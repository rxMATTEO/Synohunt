export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const body = await readBody(event);
  const account = await event.context.prisma.user.findFirst({
    where: {
      email: body.email
    },
    include: {
      Money: true,
      Message: {
        include: {
          Status: true
        }
      },
      Level: {
        include: {
          Group: true
        }
      }
    }
  });
  // todo remember me do
  if (!account.levelId) {
    const createLvl = await event.context.prisma.user.update({
      where: { id: account.id },
      data: {
        registrationDate: Date.now(),
        Level: {
          create: ({
            value: '1',
            groupdId: 1
          })
        },
        Money: {
          create: ({
            value: 1
          })
        }
      }
    });
    const acc = await event.context.prisma.user.findFirst({
      where: {
        email: body.email
      },
      include: {
        Message: {
          include: {
            Status: true
          }
        },
        Level: {
          include: {
            Group: true
          }
        },
        Money: true
      }
    });
    return { account: acc };
  }
  return { account };
});

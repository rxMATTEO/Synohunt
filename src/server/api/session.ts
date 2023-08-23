export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const body = await readBody(event);
  console.log('im in session', body.email);
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
  if (!account.levelId) {
    const createLvl = await event.context.prisma.user.update({
      where: { id: account.id },
      data: {
        registrationDate: new Date(),
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

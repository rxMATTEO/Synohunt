export default eventHandler(async (event) => {
  const body = await readBody(event);
  const account = await event.context.prisma.user.findFirst({
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
      }
    }
  });
  if (!account.levelId) {
    const createLvl = await event.context.prisma.user.update({
      where: { id: account.id },
      data: {
        Level: {
          create: ({
            value: '1',
            groupdId: 1
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
        }
      }
    });
    return { account: acc };
  }
  return { account };
});

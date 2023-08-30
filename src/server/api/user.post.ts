export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const body = await readBody(event);
  const account = await event.context.prisma.user.findFirst({
    where: {
      name: body.name
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
  return { account };
});

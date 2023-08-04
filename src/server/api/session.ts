export default eventHandler(async (event) => {
  const body = await readBody(event);
  const account = await event.context.prisma.user.findFirst({
    where: {
      email: body.email
    },
    include: {
      Level: {
        include: {
          Group: true
        }
      }
    }
  });
  return { account };
});

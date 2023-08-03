export default eventHandler(async (event) => {
  const body = await readBody(event);
  const account = await event.context.prisma.account.findFirst({
    where: {
      user: {
        email: body.email
      }
    }
  });
  return { account: account };
});
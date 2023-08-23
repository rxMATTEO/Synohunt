import { readBody } from 'h3';
export default eventHandler(async (event) => {
  const { username, password, email } = await readBody(event);
  const account = await event.context.prisma.user.create({
    data: {
      email,
      name: username,
      id: '2281338',
      levelId: 16,
      points: 30,
      moneyId: 1,
      registrationDate: Date.now()
    }
  });
  return { account };
});

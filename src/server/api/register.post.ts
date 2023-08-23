import { readBody } from 'h3';
import { v4 as uuidv4 } from 'uuid';
export default eventHandler(async (event) => {
  const { username, password, email } = await readBody(event);
  const id = uuidv4();
  const account = await event.context.prisma.user.create({
    data: {
      email,
      name: username,
      id,
      levelId: 16,
      points: 30,
      moneyId: 1,
      registrationDate: Date.now()
    }
  });
  return { account };
});

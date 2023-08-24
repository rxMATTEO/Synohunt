import { readBody } from 'h3';
import { v4 as uuidv4 } from 'uuid';
export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const { username, email } = await readBody(event);
  const id = uuidv4();
  const account = await event.context.prisma.user.create({
    data: {
      email,
      name: username,
      id,
      points: 0,
      registrationDate: Date.now()
    }
  });
  return { account };
});
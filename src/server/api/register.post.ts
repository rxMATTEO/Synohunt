import { readBody } from 'h3';
export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const { username, email } = await readBody(event);
  const account = await event.context.prisma.user.create({
    data: {
      email,
      name: username,
      points: 1,
      registrationDate: Date.now(),
      image: '/img/user-placeholder.png'
    }
  });
  return { account };
});

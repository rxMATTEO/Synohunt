import type { User } from '@prisma/client';
export default eventHandler(async (event) => {
  BigInt.prototype.toJSON = function () { return this.toString(); };
  const { user }: { user: User } = await readBody(event);
  const account = await event.context.prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      ...Object.fromEntries(Object.entries(user).filter(([key, value]) => key !== 'id'))
    }
  });
  return account;
});

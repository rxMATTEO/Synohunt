import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, amount } = await readBody(event);
  const user = await event.context.prisma.user.update({
    where: {
      id: userId
    },
    include: {
      Money: true
    },
    data: {
      Money: {
        update: ({
          value: {
            increment: +amount
          }
        })
      }
    }
  });
  return user;
});

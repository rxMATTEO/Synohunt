import { getQuery, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);
  const user = await event.context.prisma.user.findFirst({
    include: {
      Level: {
        include: {
          Group: true
        }
      }
    },
    where: {
      id: userId
    }
  });
  return { lvl: user.Level.value, current: +user.points, need: (+user.Level.value + 1) * user.Level.Group.multiplier };
});

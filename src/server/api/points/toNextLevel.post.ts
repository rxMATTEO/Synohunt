import { getQuery, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = readBody(event);
  const user = await event.context.prisma.user.findFirst({
    include: {
      Level: {
        include: {
          Group: true
        }
      }
    },
    where: {
      userId
    }
  });
  return (+user.Level.value + 1) * user.Level.Group.multiplier;
});

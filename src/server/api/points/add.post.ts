import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, amount } = await readBody(event);
  const pointsToNextLvl = await $fetch('/api/points/toNextLevel', {
    method: 'POST',
    body: {
      userId
    }
  });
  let user = {};

  if (pointsToNextLvl.current + amount >= pointsToNextLvl.need) {
    user = await event.context.prisma.user.update({
      where: {
        id: userId
      },
      include: {
        Level: true
      },
      data: {
        Level: {
          update: {
            value: (+pointsToNextLvl.lvl + 1).toString()
          }
        },
        points: +pointsToNextLvl.current - +pointsToNextLvl.need + amount
      }
    });
  } else {
    user = await event.context.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        points: {
          increment: +amount
        }
      }
    });
  }
  return user;
});

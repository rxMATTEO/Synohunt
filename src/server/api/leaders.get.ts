import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const { quantity } = getQuery(event) as { quantity: string };
  const leaders = await event.context.prisma.User.findMany({
    take: +quantity,

    select: {
      name: true,
      image: true,
      points: true,
      Level: true
    },
    orderBy: [
      {
        points: 'desc'
      }
    ]
  });
  return leaders;
});

import {getQuery} from 'h3';

export default defineEventHandler(async (event) => {
  const { lang, diff } = getQuery(event);
  const tasks = await event.context.prisma.task.findMany({
    include: {
      Language: true,
      Difficulity: true
    },
    where: {
      AND: [
        {
          Language: { langShort: lang },
          Difficulity: { name: diff }
        }
      ],
    }
  });
  return { tasks };
});
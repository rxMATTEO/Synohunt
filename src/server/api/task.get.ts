import {getQuery} from 'h3';

export default defineEventHandler(async (event) => {
  const { lang, diff } = getQuery(event);
  const tasks = await event.context.prisma.task.findMany({
    include: {
      Language: true,
      Difficulity: true,
      Tag: true,
    },
    where: {
      AND: [
        {
          Language: { langFull: lang },
          Difficulity: { name: diff }
        }
      ],
    }
  });
  return tasks;
});
import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { diff, lang, butId } = await readBody(event);
  const tasks = await event.context.prisma.task.findMany({
    include: {
      Language: true,
      Difficulity: true
    },
    where: {
      Language: {
        langFull: lang
      },
      Difficulity: {
        name: diff
      },
      NOT: {
        id: {
          equals: parseInt(butId)
        }
      }
    }
  });

  return tasks;
});

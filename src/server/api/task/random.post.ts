import { readBody } from 'h3';
import getRandomNumber from '../../../composables/random';

export default defineEventHandler(async (event) => {
  const { diff, lang, butId } = await readBody(event);
  const tasks = await event.context.prisma.task.findMany({
    include: {
      Language: true,
      Difficulity: true,
      Word: {
        include: {
          Synonym: true
        }
      }
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

  const randomNumber = getRandomNumber(0, tasks.length);

  return tasks[randomNumber];
});

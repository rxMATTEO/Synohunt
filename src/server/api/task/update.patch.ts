import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
  const { updatingTask } = await readBody(event);

  const prismaUpdated = await event.context.prisma.task.update({
    where: {
      id: updatingTask.task.id
    },
    include: {
      Word: true
    },
    data: {
      ...Object.fromEntries(Object.entries(updatingTask.task).filter(([key, value]) => key !== 'id'))
    }
  });

  function awaiter () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500);
    });
  }

  updatingTask.synos.map((syno) => {
    awaiter().then(
      async () => {
        return await event.context.prisma.synonym.create({
          data: {
            wordId: syno.wordId,
            value: syno.value,
            pointsForGuess: syno.pointsForGuess,
            moneyForGuess: syno.moneyForGuess
          }
        });
      }
    );
  });

  const prismaUpdatedWord = await event.context.prisma.task.update({
    where: {
      id: updatingTask.task.id
    },
    include: {
      Word: true
    },
    data: {
      Word: {
        update: ({
          data: {
            ...updatingTask.word

          }
        })
      }
    }
  });

  return { prismaUpdated, prismaUpdatedWord };
});

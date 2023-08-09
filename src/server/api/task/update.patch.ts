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
      ...updatingTask.task,
    }
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

          }})
      }
    }
  });

  return {prismaUpdated, prismaUpdatedWord};
});

import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);

  const completedTasks = event.context.prisma.task.findMany({
    include: {
      Word: {
        include: {
          Synonym: true
        }
      },
      Difficulity: true,
      Language: true,
      Tag: true,
      _count: {
        select: { CompletedTask: true }
      }
    },
    where: {
      userId
    }
  });
  return completedTasks;
});

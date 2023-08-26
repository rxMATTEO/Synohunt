import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);

  const completedTasks = event.context.prisma.completedTask.findMany({
    include: {
      Task: {
        include: {
          Difficulity: true,
          Word: {
            include: {
              Synonym: true
            }
          }
        }
      }
    },
    where: {
      userId
    }
  });
  return completedTasks;
});

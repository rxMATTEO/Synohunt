import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, taskId } = await readBody(event);

  const completedTask = event.context.prisma.completedTask.create({
    data: {
      userId, taskId
    }
  });
  return completedTask;
});

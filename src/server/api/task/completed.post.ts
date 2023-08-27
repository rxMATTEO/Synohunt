import { readBody } from 'h3';
import type { CompletedTask, Task, Word } from '@prisma/client';

export type CompletedTaskResponse = CompletedTask & { Task: Task & { Word: Word } }& {
  timesComplete: number
}
export default defineEventHandler(async (event): Promise<CompletedTaskResponse> => {
  const { userId } = await readBody(event);

  const completedTasks = await event.context.prisma.completedTask.findMany({
    include: {
      Task: {
        include: {
          Difficulity: true,
          Language: true,
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
  return await Promise.all(completedTasks.map(async (task) => {
    const count = await event.context.prisma.completedTask.findMany({
      where: {
        taskId: task.taskId
      }
    });
    task.timesComplete = count.length;
    return task;
  }));
});

import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, taskId } = await readBody(event);
  const bookmarkedTask = await $fetch('/api/task/getBookmark', {
    method: 'POST',
    body: { userId, taskId }
  });
  if (bookmarkedTask.status === 'not found') { // standartiziruy with ts and shit
    return event.context.prisma.bookmarkedTask.create({
      data: {
        userId, taskId
      }
    });
  }
  return null;
});

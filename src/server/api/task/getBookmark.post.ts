import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, taskId } = await readBody(event);
  const bookmarkedTask = await event.context.prisma.bookmarkedTask.findFirst({
    where: {
      userId, taskId
    }
  });
  return bookmarkedTask || { status: 'not found' };
});

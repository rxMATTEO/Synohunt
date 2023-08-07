import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, taskId } = await readBody(event);
  const bookmarkedTask = await event.context.prisma.bookmarkedTask.findFirst({
    where: {
      userId, taskId
    }
  });
  if (bookmarkedTask) {
    const deletedBookmark = await event.context.prisma.bookmarkedTask.delete({
      where: {
        id: bookmarkedTask.id
      }
    });
    return deletedBookmark;
  }
  return bookmarkedTask;
});

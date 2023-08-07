import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);
  const bookmarkedTask = await event.context.prisma.bookmarkedTask.findMany({
    where: {
      userId
    },
    include: {
      Task: {
        include: {
          Word: {
            include: {
              Synonym: true
            }
          }
        }
      }
    }
  });
  return bookmarkedTask;
});

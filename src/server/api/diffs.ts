export default defineEventHandler(async (event) => {
  const diffs = await event.context.prisma.difficulity.findMany({select: {
    name: true
  } });
  return { diffs };
});
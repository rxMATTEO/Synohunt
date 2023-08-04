export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  const task = await event.context.prisma.task.findFirst({
    include: {
      Language: true,
      Difficulity: true,
      Tag: {
        select: {name: true}
      },
    },
    where: {
      id: parseInt(id)
    }
  });
  return task;
});
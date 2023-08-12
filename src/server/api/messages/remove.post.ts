import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, id } = await readBody(event);
  const createdMessage = event.context.prisma.message.delete({
    where: {
      userId,
      id
    }
  });
  return createdMessage;
});

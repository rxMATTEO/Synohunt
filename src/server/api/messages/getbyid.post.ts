import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { messageId } = await readBody(event);
  const message = event.context.prisma.message.findFirst({
    where: {
      id: +messageId,
    },
  });
  return message;
});

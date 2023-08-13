import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, messages } = await readBody(event);
  for (const msg of messages) {
    const createdMessage = await event.context.prisma.message.delete({
      where: {
        userId,
        id: msg.id
      }
    });
  }
  return messages;
});

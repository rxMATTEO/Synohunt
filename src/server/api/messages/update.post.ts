import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, messages } = await readBody(event);
  for (const msg of messages) {
    const updatedMsg = await event.context.prisma.message.update({
      where: {
        userId,
        id: msg.id
      },
      data: {
        topic: msg.topic,
        value: msg.value,
        statusId: msg.statusId,
      }
    });
  }
  return messages;
});

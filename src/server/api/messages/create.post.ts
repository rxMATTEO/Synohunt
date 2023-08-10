import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, text } = await readBody(event);

  const createdMessage = event.context.prisma.message.create({
    data: {
      userId,
      value: text,
      statusId: 1,
    }
  });
  return createdMessage;
});

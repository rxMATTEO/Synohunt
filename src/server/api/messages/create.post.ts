import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId, text, topic, imgPath } = await readBody(event);

  const createdMessage = event.context.prisma.message.create({
    data: {
      userId,
      value: text,
      topic,
      imgPath,
      statusId: 1
    },
    include: {
      Status: true
    }
  });
  return createdMessage;
});

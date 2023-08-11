import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);

  const messages = event.context.prisma.user.findFirst({
    where: {
      id: userId
    },
    select: {
      Message: { include: { Status: true } }
    }
  });
  return messages;
});

import {PrismaClient} from '@prisma/client';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  return {prisma: await prisma.types.findFirst()};
});
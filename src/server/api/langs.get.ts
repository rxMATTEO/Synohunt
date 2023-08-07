export default defineEventHandler(async (event) => {
  const langs = await event.context.prisma.language.findMany({select: {
    langFull: true
  } });
  return langs;
});
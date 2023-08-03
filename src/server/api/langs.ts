export default defineEventHandler(async (event) => {
  const langs = await event.context.prisma.language.findMany({select: {
    langShort: true
  } });
  return { langs };
});
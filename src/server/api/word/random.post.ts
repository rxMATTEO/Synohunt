import { readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const { lang, diff, userId } = await readBody(event);
  const langFullIndex = await event.context.prisma.language.findFirst({
    where: {
      langFull: lang
    }
  });
  const diffDb = await event.context.prisma.difficulity.findFirst({
    where: {
      name: diff
    }
  });
  const randomWord = (await $fetch('https://random-word-form.repl.co/random/noun'))[0];
  const context = await $fetch(`/api/word/context?word=${randomWord}&lang=${lang}`);
  const synonyms = (await $fetch(`/api/word/synonyms?word=${randomWord}&lang=${lang}`));

  const word = await event.context.prisma.word.create({
    data: {
      word: randomWord
    }
  });

  const synos = synonyms.synonyms.map(async (syno) => {
    return await event.context.prisma.synonym.create({
      data: {
        wordId: word.id,
        value: syno.synonym
      }
    });
  });

  const task = await event.context.prisma.task.create({
    data: {
      diffId: diffDb.id,
      langId: langFullIndex.id,
      description: context.examples[0].source,
      wordId: word.id,
      userId
    }
  });

  return { word, synos: await Promise.all(synos), task };
});

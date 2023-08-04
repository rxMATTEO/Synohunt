import Index from 'reverso-api';

const reverso = new Index();

export default defineEventHandler(async (event) => {
  const randomWord = (await $fetch('https://random-word-form.repl.co/random/noun'))[0];
  const context = await $fetch(`/api/word/context?word=${randomWord}&lang=english`);
  const synonyms = (await $fetch(`/api/word/synonyms?word=${randomWord}&lang=english`));

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
      diffId: 1, // todo fix this
      langId: 1,
      description: context.examples[0].source,
      wordId: word.id
    }
  });

  // const synonym = await event.context.prisma.synonym.createMany({
  //   data: synonyms.synonyms.map((syno) => {
  //     return { value: syno.synonym, wordId: word.id };
  //   }),
  //   skipDuplicates: true
  // });
  //
  // const task = await event.context.prisma.task.create({
  //   data: {
  //     description: context.examples[0].source,
  //     diffId: 1,
  //     langId: 1
  //   }
  // });

  return { word, synos: await Promise.all(synos), task };
});

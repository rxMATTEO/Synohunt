import Index from 'reverso-api';

const reverso = new Index();

export default defineEventHandler(async (event) => {
  const { diff, lang, desc, words } = await readBody(event);

  return await reverso.getSynonyms(word, lang);
});

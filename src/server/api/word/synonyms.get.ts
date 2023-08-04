import Index from 'reverso-api';

const reverso = new Index();

export default defineEventHandler(async (event) => {
  const { word, lang } = getQuery(event);

  return await reverso.getSynonyms(word, lang);
});

import Index from 'reverso-api';
import { getQuery } from 'h3';

const reverso = new Index();

export default defineEventHandler(async (event) => {
  const { word, lang } = getQuery(event);

  return await reverso.getContext(word, lang);
});

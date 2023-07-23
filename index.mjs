import Index from 'reverso-api';
const reverso = new Index();

async function getContext(){
  return await reverso.getSynonyms(   'car',
    'english');
}

console.log(await getContext());
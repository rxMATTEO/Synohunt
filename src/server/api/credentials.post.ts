import rsa from 'js-crypto-rsa';
import { readBody } from 'h3';

export type JwkResponse = {
  publicKey: JsonWebKey,
  id: string,
}
export default eventHandler(async (event): Promise<Response> => {
  const { data, email, id } = await readBody(event);

  const postedUser = await $fetch('/api/register', {
    method: 'POST',
    body: {
      email
    }
  });

  const updateCreds = await event.context.prisma.credentials.update({
    where: {
      id
    },
    data: {
      data,
      email
    },
    select: {
      publicKey: true
    }
  });
  return updateCreds;
});

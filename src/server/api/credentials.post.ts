import rsa from 'js-crypto-rsa';
import { readBody } from 'h3';

export type JwkResponse = {
  publicKey: JsonWebKey,
  id: string,
}
export default eventHandler(async (event): Promise<Response> => {
  const { data, email, id } = await readBody(event);
  const updateCreds = await event.context.prisma.credentials.update({
    where: {
      id
    },
    data: {
      data,
      email
    },
    select: {
      publicKey: true // todo look at this and think what i need mb status
    }
  });
  return updateCreds;
});

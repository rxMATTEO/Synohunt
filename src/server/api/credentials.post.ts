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
      data: JSON.stringify(data),
      email
    }
  });
  return updateCreds;
  // const msg = Buffer.from('aboba');
  // const encrypted = await rsa.encrypt(msg, publicKey);
  // const decrypted = await rsa.decrypt(encrypted, privateKey);
  // console.log(Buffer.from(decrypted.buffer).toString(), 'dec');
  // return decrypted;
});

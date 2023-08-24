import rsa from 'js-crypto-rsa';
import { readBody } from 'h3';
import { Credentials } from '@prisma/client';

export type JwkResponse = {
    publicKey: JsonWebKey,
    id: string,
}
export default eventHandler(async (event): Promise<Response> => {
  const { publicKey, email } = await readBody(event);
  const credentials = await event.context.prisma.credentials.findFirst({
    where: {
      email
    }
  }) as Credentials;
  const privateKey = JSON.parse(credentials.privateKey);
  const data = JSON.parse(credentials.data);
  const uintArray = Uint8Array.from(Object.values(data));
  const decrypted = await rsa.decrypt(uintArray, privateKey);
  return decrypted;
  // const msg = Buffer.from('aboba');
  // const encrypted = await rsa.encrypt(msg, publicKey);
  // const decrypted = await rsa.decrypt(encrypted, privateKey);
  // console.log(Buffer.from(decrypted.buffer).toString(), 'dec');
  // return decrypted;
});

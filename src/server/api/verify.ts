import rsa from 'js-crypto-rsa';
import { readBody } from 'h3';
import { Credentials } from '@prisma/client';

export type VerifyResponse = {
  isCredentialsValid: boolean,
  username: string
}
export default eventHandler(async (event): Promise<VerifyResponse> => {
  const { email, creds } = await readBody(event);
  const credentials = await event.context.prisma.credentials.findFirst({
    where: {
      email
    }
  }) as Credentials;
  const privateKeyValid = JSON.parse(credentials.privateKey);
  const dataValid = JSON.parse(credentials.data);
  const uintArrayValid = Uint8Array.from(Object.values(dataValid));
  const decryptedValid = await rsa.decrypt(uintArrayValid, privateKeyValid);

  const dataUser = JSON.parse(creds);
  const uintArrayUser = Uint8Array.from(Object.values(dataUser));
  const decryptedUser = await rsa.decrypt(uintArrayUser, privateKeyValid);

  const plainUserValid = Buffer.from(decryptedValid.buffer).toString();
  const plainUser = Buffer.from(decryptedUser.buffer).toString();

  const parsedValid = JSON.parse(plainUserValid);
  const parsed = JSON.parse(plainUser);
  const verified = parsed.password === parsedValid.password && parsed.email ===
       parsedValid.email;
  return {
    isCredentialsValid: verified,
    username: verified ? JSON.parse(plainUserValid).username : ''
  }; // dats sux dude
});

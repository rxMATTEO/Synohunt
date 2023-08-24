import rsa from 'js-crypto-rsa';
export default eventHandler(async (event) => {
  const { publicKey, privateKey } = await rsa.generateKey(2048);
  const createdCreds = await event.context.prisma.credentials.create({
    data: {
      publicKey, privateKey
    }
  });
  return { };
  // const msg = Buffer.from('aboba');
  // const encrypted = await rsa.encrypt(msg, publicKey);
  // const decrypted = await rsa.decrypt(encrypted, privateKey);
  // console.log(Buffer.from(decrypted.buffer).toString(), 'dec');
  // return decrypted;
});

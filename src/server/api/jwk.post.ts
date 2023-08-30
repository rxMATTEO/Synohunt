import rsa from 'js-crypto-rsa';
export type JwkResponse = {
  publicKey: JsonWebKey,
  id: string,
}
export default eventHandler(async (event): Promise<JwkResponse> => {
  const { publicKey, privateKey } = await rsa.generateKey(2048);
  const createdCreds = await event.context.prisma.credentials.create({
    data: {
      publicKey: JSON.stringify(publicKey), privateKey: JSON.stringify(privateKey)
    }
  });
  return { publicKey, id: createdCreds.id };
});

import { readBody } from 'h3';

export type PublicKeyResponse = {
    publicKey: string
}
export default eventHandler(async (event): Promise<PublicKeyResponse> => {
  const { email } = await readBody(event);
  const publicKeyPost = await event.context.prisma.credentials.findFirst({
    where: {
      email
    },
    select: {
      publicKey: true
    }
  });
  return publicKeyPost;
});

import {getServerSession} from '#auth';

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  console.log(session);
  // const body = await readBody(event);
  if(session){
    console.log(await Promise.resolve(session?.user));
  }
  if (!session) {
    return { status: 'unauthenticated!' };
  }
  return { status: 'authenticated!', };
  // const account = await event.context.prisma.account.findFirst({
  //   where: {
  //     user: {
  //       email: body.email
  //     }
  //   }
  // });
  // return { status: 'authenticated!', account };
});
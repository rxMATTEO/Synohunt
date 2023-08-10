import {Group, Language, MessageStatus, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
async function main(){
  const difficulity = ['Easy', 'Medium', 'Hard'];
  difficulity.forEach(async (diff, index) => {
    const level = await prisma.difficulity.upsert({
      where: { id: index },
      update: {},
      create: {
        id: index,
        name: diff
      }
    });
  });
  const groups: Omit<Group, 'id'>= {
    min: 1,
    max: 10,
    name: 'Beginner',
    multiplier: 10
  };

  const group = await prisma.group.upsert({
    where: { id: 1 },
    update: {},
    create: {...groups}
  });

  const langs: Omit<Language, 'id'>[] = [{langFull: 'English', langShort: 'en'},
    {langShort: 'ru', langFull: 'Russian'}];
  langs.forEach(async (lang, index) => {
    const prismaLang = await prisma.language.upsert({
      where: { id: index + 1 },
      update: {},
      create: {
        ...lang
      }
    });
  });
  const msgStatuses = ['Pending', 'Send', 'Read'] as const;
  export type MessageStatuses = typeof msgStatuses[number];
  msgStatuses.forEach(async (msgStatus, index) => {
    const prismaStatus = await prisma.messageStatus.upsert({
      where: { id: index  + 1},
      update: {},
      create: {
        value: msgStatus
      }
    });
  });
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.log(e);
  await prisma.$disconnect();
  process.exit(1);
})
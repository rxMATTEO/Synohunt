<script setup lang="ts">
import { reactive, ref } from 'vue';
import { NuxtOptionsRouter } from '@nuxt/types/config/router';

type RouteParams = {
  params: {
    taskId: number
  }
}
const route: RouteParams = useRoute();
const router = useRouter();
type Syno = {
  id: number,
  wordId: number,
  value: string,
}
type Task = {
  id: number,
  diffId: number,
  langId: number,
  description: string,
  wordId: 3,
}
type TaskResponse = {
  Word: {
    id: number,
    word: string,
    Synonym: Syno[],
  },
  task: Task[]
}

function solveUserSyno (e?: KeyboardEvent) {
  if (!e || e.key === 'Enter') {
    const foundSynoIndex = synonyms.value.findIndex(syno => syno.value === userSyno.value);
    if (foundSynoIndex !== -1) {
      solvedSynonyms.value.push(synonyms.value[foundSynoIndex]);
      synonyms.value.splice(foundSynoIndex, 1);
      console.log(synonyms.value[foundSynoIndex]);
      userSyno.value = '';
    } else {
      shake();
    }
  }
}

const isShaking = reactive({ value: false });
function shake () {
  isShaking.value = true;
  setTimeout(() => { isShaking.value = false; }, 1000);
}

const task = reactive<{value: TaskResponse}>({ value: (await useFetch(`/api/task/${route.params.taskId}`)).data });
const synonyms = reactive({ value: task.value.Word.Synonym });
const solvedSynonyms = reactive({ value: [] });
const userSyno = ref('');

type Diff = 'Easy' | 'Medium' | 'Hard';
type Lang = 'English' | 'Russian';

async function gotoRandomTask (diff: Diff, lang: Lang, butId: number) {
  const randomTask = await $fetch('/api/task/random', {
    method: 'POST',
    body: {
      diff, lang, butId
    }
  });
  task.value = randomTask;
  synonyms.value = task.value.Word.Synonym;
  solvedSynonyms.value = [];
  router.push({
    path: '/play/' + task.value.id,
    params: { taskId: task.value.id }
  });
}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3" @keyup="solveUserSyno">
        <div class="surface-ground t-rounded-md p-5 h-fit">
          <div class="relative">
            <Button v-tooltip="'Goto next task'" class="absolute right-0 text-right" icon="pi pi-arrow-right" unstyled @click="gotoRandomTask(task.value.Difficulity.name, task.value.Language.langFull, task.value.id)" />
          </div>
          <h1 class="text-4xl">
            Guess the all synonyms
          </h1>
          <div class="my-5">
            <p class="text-2xl">
              Context:
            </p>
            <div class="mt-3">
              <span v-for="word in task.value.description.split(' ')">
                <span :class="{'bg-primary-500': word === task.value.Word.word} ">{{ word }}</span>
                {{ }}
              </span>
            </div>
          </div>

          <div class="flex t-place-content-between flex-wrap">
            <div class="max-md:t-inline-block max-md:t-mt-5 t-w-1/2 md:t-w-1/5 t-order-1">
              <p class="text-xl">
                All synonyms:
              </p>
              <div class="mt-5">
                <p v-for="(syno) in synonyms.value">
                  {{ syno.value }}
                </p>
              </div>
            </div>
            <div class="max-md:t-inline-block max-md:t-mt-5 t-w-1/2 md:t-w-1/5 text-right t-order-1 md:t-order-3">
              <p class="text-xl">
                Solved synonyms
              </p>
              <div class="mt-5">
                <p v-for="(syno) in solvedSynonyms.value">
                  {{ syno.value }}
                </p>
              </div>
            </div>
            <div class="t-w-full t-w-flex md:t-w-3/5 md:t-order-1 max-md:t-h-full">
              <div class="text-8xl text-center t-min-h-[200px] t-max-h-[200px] t-h-[200px] overflow-hidden">
                {{ userSyno || " " }}
              </div>
              <p class="p-float-label w-full">
                <InputText
                  id="user-syno"
                  v-model="userSyno"
                  class="w-full"
                  tabindex="10"
                />
                <label for="user-syno">Synonym</label>
              </p>
              <div class="mx-auto mt-5">
                <Button
                  tabindex="10"
                  label="Guess"
                  type="null"
                  :class="{shake: isShaking.value}"
                  class="text-center block mx-auto px-5 py-3 animated-gradient-rainbow"
                  @click="() => solveUserSyno()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="sass">

</style>

<script setup lang="ts">
import { reactive, ref } from 'vue';

type RouteParams = {
  params: {
    taskId: number
  }
}
const route: RouteParams = useRoute();
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

function checkUserInput (e?: KeyboardEvent) {
  if (!e || e.key === 'Enter') {
    const foundSynoIndex = synonyms.findIndex(syno => syno.value === userSyno.value);
    if (foundSynoIndex !== -1) {
      solvedSynonyms.value.push(synonyms[foundSynoIndex]);
      synonyms.splice(foundSynoIndex, 1);
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
const synonyms = task.value.Word.Synonym;
const solvedSynonyms = reactive({ value: [] });
const userSyno = ref('');
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3" @keyup="checkUserInput">
        <div class="surface-ground t-rounded-md p-5">
          <h1 class="text-4xl">
            Guess the all synonyms
          </h1>
          <div class="my-5">
            <p class="text-2xl">
              Context:
            </p>
            <div class="mt-3">
              <span v-for="word in task.value.description.split(' ')">
                <span :class="{'bg-primary-500': word === task.value.Word.word} ">{{ word + " " }}</span>
              </span>
            </div>
          </div>

          <div class="flex t-place-content-between flex-wrap">
            <div class="max-md:t-inline-block max-md:t-mt-5 t-w-1/2 md:t-w-1/5 t-order-1">
              <p class="text-xl">
                All synonyms:
              </p>
              <div class="mt-5">
                <p v-for="(syno) in synonyms">
                  {{ syno.value }}
                </p>
              </div>
            </div>
            <div class="max-md:t-inline-block max-md:t-mt-5 t-w-1/2 md:t-w-1/5 text-right t-order-1 md:t-order-3">
              <p>Solved synonyms</p>
              <p v-for="(syno) in solvedSynonyms.value">
                {{ syno.value }}
              </p>
            </div>
            <div class="t-w-full t-w-flex md:t-w-3/5 md:t-order-1 overflow-hidden">
              <div class="text-8xl text-center t-h-1/2 block overflow-hidden">
                {{ userSyno || " " }}
              </div>
              <p class="p-float-label w-full">
                <InputText id="user-syno" v-model="userSyno" class="w-full" />
                <label for="user-syno">Synonym</label>
              </p>
              <div class="mx-auto mt-5">
                <Button
                  label="Guess"
                  type="null"
                  :class="{shake: isShaking.value}"
                  class="text-center block mx-auto px-5 py-3 animated-gradient-rainbow"
                  @click="() => checkUserInput()"
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

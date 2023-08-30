<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Ref } from 'vue/dist/vue';
import { usePointsStore } from '../../stores/pointsStore';
import { useMoneyStore } from '@/stores/moneyStore';
import Hints from '@/components/Hints.vue';

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
  pointsForGuess: number,
  moneyForGuess: number,
}
type Task = {
  id: number,
  diffId: number,
  langId: number,
  description: string,
  wordId: 3,
}
export type TaskResponse = {
  Word: {
    id: number,
    word: string,
    Synonym: Syno[],
  },
  task: Task[]
}
const { data: { value: { user: { account } } } } = useAuth();
const pointsStore = usePointsStore();
const moneyStore = useMoneyStore();
const coinSpin = ref();

async function solveUserSyno (e?: KeyboardEvent) {
  if (!e || e.key === 'Enter') {
    const foundSynoIndex = synonyms.value.findIndex(syno => syno.value === userSyno.value);
    if (foundSynoIndex !== -1) {
      solvedSynonyms.value.push(synonyms.value[foundSynoIndex]);
      const { pointsForGuess, moneyForGuess } = synonyms.value[foundSynoIndex];
      synonyms.value.splice(foundSynoIndex, 1);
      userSyno.value = '';
      coinSpin.value.append(async () => { await moneyStore.setMoney(moneyForGuess); });

      await pointsStore.setPoints(pointsForGuess);

      if (synonyms.value.length === 0) {
        completeTask();
      }
    } else {
      shake();
    }
  }
}

const items = ref<Hint[]>([
  {
    label: 'Complete one synonym',
    icon: '/img/tip.png',
    cost: 15,
    preffect: () => {
      isListening.value = true;
    },
    effect: (wantedSyno) => {
      userSyno.value = wantedSyno;
    }
  },
  {
    label: 'Complete the challenge',
    icon: '/img/check.png',
    cost: 50,
    preffect: () => {
      completeTask();
    }
  },
  {
    label: 'Refresh context',
    icon: '/img/reload.png',
    cost: 10
  }
]);

const isListening = ref(false);
const hovered = ref();
const currentEffect = ref();
const click = function (syno) {
  if (isListening.value) {
    isListening.value = false;
    hovered.value = null;
    currentEffect.value(syno.value);
  }
};
function mouseOverSyno (syno) {
  if (isListening.value) {
    hovered.value = syno;
  }
}

function onSelect ({ effect, preffect }) {
  if (preffect) { preffect(); }
  currentEffect.value = effect;
}

// TODO ADD HINTS, FILTER NOT COMPLETED TASKS ONLY, COMMENTS

async function completeTask () {
  isDialogVisible.value = true;
  return await $fetch('/api/task/complete', {
    method: 'POST',
    body: {
      userId: account.id,
      taskId: +route.params.taskId
    }
  });
}

const contextHtml = computed({
  get () {
    return (task.value.description as string).replaceAll(task.value.Word.word, `<span class="bg-primary-500 text-white">${task.value.Word.word}</span>`);
  }
});

const isShaking = reactive({ value: false });
function shake () {
  isShaking.value = true;
  setTimeout(() => { isShaking.value = false; }, 1000);
}

const task = reactive<{value: TaskResponse}>({ value: (await useFetch(`/api/task/${route.params.taskId}`)).data });

useHead({
  title: `${task.value.Word.word}`
});

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
const bookmark = await checkBookmark();
const isBookmarked = reactive({ value: bookmark });

async function toggleBookmarkTask () {
  if (isBookmarked.value) {
    isBookmarked.value = false;
    return await $fetch('/api/task/deleteBookmark', {
      method: 'POST',
      body: {
        userId: account.id,
        taskId: task.value.id
      }
    });
  } else {
    isBookmarked.value = true;
    return await $fetch('/api/task/setBookmark', {
      method: 'POST',
      body: {
        userId: account.id,
        taskId: task.value.id
      }
    });
  }
}

async function checkBookmark () {
  const value = await $fetch('/api/task/getBookmark', {
    method: 'POST',
    body: {
      userId: account.id,
      taskId: task.value.id
    }
  });
  return value.status !== 'not found';
}

const isDialogVisible = ref(false);

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <ConfirmDialog
        :draggable="false"
        class="confirm-purchase"
        group="buyHintDialog"
        :pt="{
          rejectButton: {
            root: {
              class: ['!t-text-white']
            }
          },
          closeButton: {
            class: ['transparent']
          }
        }"
      >
        <template #message="msg">
          <div>
            <div class="flex align-items-center">
              <span>
                Do you want buy this hint for
              </span>
              <TinyCoin :value="msg.message.message.cost" />
            </div>

            <div class="text-primary-500 p-1">
              {{ msg.message.message.value }}
            </div>
          </div>
        </template>
      </ConfirmDialog>
      <CoinSpin ref="coinSpin" />
      <img v-if="isDialogVisible" src="/img/salute_v2.gif" class="w-full h-full" alt="salute">
      <Dialog v-model:visible="isDialogVisible" modal header="Congratulations" :style="{ width: '50vw' }">
        <p>
          You completed this task!
        </p>
        <template #footer>
          <Button label="Cool" icon="pi pi-check" autofocus type="null" @click="() => {isDialogVisible = false; gotoRandomTask(task.value.Difficulity.name, task.value.Language.langFull, task.value.id)}" />
        </template>
      </Dialog>

      <PaddingBox @keyup="solveUserSyno">
        <div class="surface-ground t-rounded-md p-5 h-fit">
          <div class="relative">
            <Button v-tooltip="'Goto next challenge'" class="absolute right-0 text-right" icon="pi pi-arrow-right" unstyled @click="gotoRandomTask(task.value.Difficulity.name, task.value.Language.langFull, task.value.id)" />
            <NuxtLink to="/create/task">
              <Button v-tooltip="'Create new challenge'" class="mt-3 absolute t-top-5 right-0 text-right" icon="pi pi-plus" unstyled />
            </NuxtLink>
            <Button class="absolute right-0 mt-5 t-top-10 text-right" :icon="isBookmarked.value ? 'pi pi-star-fill': 'pi pi-star'" unstyled @click="toggleBookmarkTask" />
          </div>
          <h1 class="text-4xl">
            Guess the all synonyms
          </h1>
          <div class="my-5">
            <p class="text-2xl">
              For word:
            </p>
            <div class="mt-3">
              {{ task.value.Word.word }}
            </div>
          </div>
          <div class="my-5">
            <p class="text-2xl">
              Context:
            </p>
            <div class="mt-3">
              <span v-html="contextHtml" />
            </div>
          </div>

          <div class="flex t-place-content-between flex-wrap">
            <div class="max-md:t-inline-block max-md:t-mt-5 t-w-1/2 md:t-w-1/5 t-order-1">
              <p class="text-xl">
                All synonyms:
              </p>
              <div class="mt-5">
                <p v-for="(syno) in synonyms.value" :class="{ 'bg-primary-500 cursor-pointer': syno.id === hovered?.id }" @mouseover="mouseOverSyno(syno)" @click="click(syno)">
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
                  v-focustrap
                  class="w-full"
                  tabindex="10"
                />
                <label for="user-syno">Synonym</label>
              </p>
              <div class="mx-auto mt-5">
                <Button
                  v-focustrap
                  tabindex="10"
                  label="Guess"
                  type="null"
                  :class="{shake: isShaking.value}"
                  class="t-border-0 text-white text-center block mx-auto px-5 py-3 animated-gradient-rainbow"
                  @click="() => solveUserSyno()"
                />
              </div>
            </div>
          </div>
        </div>
      </PaddingBox>
      <keep-alive>
        <component :is="Hints" :key="'Hints'" :items="items" @select="onSelect" />
      </keep-alive>
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
.confirm-purchase
  @include apply-default-button()
</style>

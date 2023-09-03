<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { Synonym } from '@prisma/client';
import { useField, useForm } from 'vee-validate';
import type { ServerDiff, ServerLang } from '../dashboard.vue';
import validateWeakness from '@/composables/validator';

useHead({
  title: 'Create task',
  link: [{
    rel: 'canonical', href: `${import.meta.env.VITE_AUTH_ORIGIN}create/task`
  }],
});

useSeoMeta({
  title: 'Create new synonym challenge in Synohunt',
  ogTitle: 'Create new synonym challenge in Synohunt',
  description: 'Create new synonym challenge in Synohunt and make players guess all synonyms of your word',
  ogDescription: 'Create new synonym challenge in Synohunt and make players guess all synonyms of your word',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}create/task`
});

const { data: { value: { user: { account } } } } = useAuth();
const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });

const selectedDiff = reactive<{value: ServerDiff}>({ value: {} as ServerDiff });
const selectedLanguage = reactive<{value: ServerLang}>({ value: {} as ServerLang });
type Synonyms = {
  value: [ Array<Synonym>, Array<Synonym> ]
}

const { handleSubmit, resetForm, setErrors } = useForm();
const { value: word, errorMessage: wordErrorMessage } = useField('word', value => validateWeakness(value, 'Word'));
const { value: context, errorMessage: contextErrorMessage } = useField('context', value => validateWeakness(value, 'Context'));
const { value: synos, errorMessage: synosErrorMessage } = useField('synos', () => synonyms.value[1].length > 0 ? true : 'Included synonyms is empty');

const synonyms = reactive<Synonyms>({ value: [[], []] });
const taskFetched = ref({});
useFetch('/api/diffs').then((res) => {
  diffs.value = res.data.value;
  selectedDiff.value = diffs.value[0];
});
useFetch('/api/langs').then((res) => {
  langs.value = res.data.value;
  selectedLanguage.value = langs.value[0];
});

onMounted(async () => {
  const editor = await import('quill');
});

const router = useRouter();
const isRandomTaskGenerating = ref(false);

async function randomGenerateTask (bindValues = true) {
  isRandomTaskGenerating.value = true;
  const task = await $fetch('/api/word/random', {
    method: 'POST',
    body: {
      lang: selectedLanguage.value.langFull,
      diff: selectedDiff.value.name,
      userId: account.id
    }
  });
  if (bindValues) {
    word.value = task.word.word;
    synonyms.value[0] = task.synos;
    context.value = task.task.description;
  }
  taskFetched.value = task;
  isRandomTaskGenerating.value = false;
}

const isDialogVisible = ref(false);
const isLoading = ref(false);
const createTask = handleSubmit(async () => {
  if (synonyms.value[1].length === 0) {
    setErrors({
      synos: 'Included synonyms is empty'
    });
    return;
  }
  isLoading.value = true;
  if (Object.keys(taskFetched.value).length === 0) {
    await randomGenerateTask(false);
    taskFetched.value.synos = synonyms.value[1].map((syno) => {
      syno.wordId = taskFetched.value.word.id;
      return syno;
    });
  }
  taskFetched.value.synos.push(...synonyms.value[1].map((syno) => {
    syno.wordId = taskFetched.value.word.id;
    return syno;
  }));
  taskFetched.value.task.description = context;
  taskFetched.value.word.word = word;
  taskFetched.value.task.isVisible = true;
  const created = await $fetch('/api/task/update', {
    method: 'PATCH',
    body: {
      updatingTask: taskFetched.value
    }
  });
  isDialogVisible.value = true;
});
function gotoMyChallenges () {
  router.push('/profile/challenges');
}

const addingSynonym = ref('');

function addSynonym () {
  if (!addingSynonym.value) {
    isAddSynoShake.value = true;
    setTimeout(() => isAddSynoShake.value = false, 2000);
    return;
  }
  setErrors({
    synos: ''
  });
  synonyms.value[1].push({
    id: synonyms.value[1].length,
    value: addingSynonym.value,
    synonym: addingSynonym.value,
    moneyForGuess: 10,
    pointsForGuess: 10
  });
  addingSynonym.value = '';
}
// todo add button loader and shake button up
const isAddSynoShake = ref(false);
</script>

<template>
  <div>
    <Dialog v-model:visible="isDialogVisible" modal header="Congratulations" class="t-w-full md:!t-w-1/2">
      <p>
        You created new task!
      </p>
      <template #footer>
        <Button label="Cool" icon="pi pi-check" autofocus type="null" @click="() => {isDialogVisible = false; gotoMyChallenges()}" />
      </template>
    </Dialog>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div class="surface-ground t-rounded-md p-3 md:p-5 h-fit">
          <div class="relative">
            <div class="absolute right-0">
              <Button v-tooltip="'Generate randomly'" unstyled aria-label="Generate randomly" @click="randomGenerateTask">
                <template #icon>
                  <i class="pi pi-sync" :class="{'pi-spin' : isRandomTaskGenerating}" />
                </template>
              </Button>
            </div>
          </div>
          <form class="flex flex-column" @submit.prevent>
            <h1 class="text-4xl">
              Create new challenge
            </h1>
            <div class="mt-6">
              <Fieldset>
                <template #legend>
                  <div class="flex align-items-center text-primary">
                    <span class="pi pi-language mr-2" />
                    <span class="font-bold text-lg">Language & difficulty</span>
                  </div>
                </template>
                <div class="p-float-label relative mt-3">
                  <Dropdown
                    v-model="selectedDiff.value"
                    input-id="dd-diff"
                    :options="diffs.value"
                    option-label="name"
                    placeholder="Select difficulty"
                    class="w-full"
                    aria-label="Select language"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.name }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex align-items-center">
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </template>
                  </Dropdown>
                  <label for="dd-diff" class="">Select difficulty</label>
                  <Button v-tooltip.focus.left="'Define challenge difficulty so players can choose it depends them skill'" aria-label="Define challenge difficulty so players can choose it depends them skill" icon="pi pi-info-circle" :unstyled="true" class="absolute t-top-[-20px] right-0" />
                </div>
                <div class="p-float-label mt-5">
                  <Dropdown
                    v-model="selectedLanguage.value"
                    input-id="dd-lang"
                    :options="langs.value"
                    option-label="name"
                    placeholder="Select language"
                    class="w-full"
                    aria-label="Select language"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.langFull }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="flex align-items-center">
                        <div>{{ slotProps.option.langFull }}</div>
                      </div>
                    </template>
                  </Dropdown>
                  <label for="dd-lang" class="">Select Language</label>
                  <Button v-tooltip.focus.left="'Select language of word and synonyms'" aria-label="Select language of word and synonyms" icon="pi pi-info-circle" :unstyled="true" class="absolute t-top-[-20px] right-0" />
                </div>
              </Fieldset>
            </div>
            <Fieldset class="my-5">
              <template #legend>
                <div class="flex align-items-center text-primary">
                  <span class="pi pi-book mr-2" />
                  <span class="font-bold text-lg">Word & context</span>
                </div>
              </template>
              <div class="mt-0">
                <div class="flex t-place-content-between">
                  <label for="word">Word</label>
                  <Button v-tooltip.focus.left="'The word which synonyms players will be guessing'" aria-label="The word which synonyms players will be guessing" icon="pi pi-info-circle" :unstyled="true" class="" />
                </div>
                <InputText id="word" v-model="word" type="text" class="w-full" :class="{ 'p-invalid': wordErrorMessage }" />
                <small id="text-error" class="p-error">{{
                  wordErrorMessage || "&nbsp;"
                }}</small>
              </div>
              <div class="mt-5">
                <div class="flex t-place-content-between">
                  <label for="context">Context</label>
                  <Button v-tooltip.focus.left="'Enter the context of word. You can use html tags'" aria-label="Enter the context of word. You can use html tags" icon="pi pi-info-circle" :unstyled="true" class="" />
                </div>
                <Editor
                  id="context"
                  v-model="context"
                  :class="{ 'border-red-300 border-solid border-1': contextErrorMessage }"
                  :modules="{
                  }"
                />
                <small id="text-error" class="p-error">{{
                  contextErrorMessage || "&nbsp;"
                }}</small>
              </div>
            </Fieldset>
            <Fieldset
              :pt="{
                content: {
                  class: ['!t-max-w-full p-0']
                }
              }"
            >
              <template #legend>
                <div class="flex align-items-center text-primary">
                  <span class="pi pi-file-import mr-2" />
                  <span class="font-bold text-lg">Synonyms</span>
                </div>
              </template>
              <template #default>
                <div class="relative">
                  <Button v-tooltip.focus.left="'The synonyms which is players will be guessing'" aria-label="The synonyms which is players will be guessing" icon="pi pi-info-circle" :unstyled="true" class="absolute t-top-[-20px] right-0" />
                </div>
                <div class="!t-max-w-full">
                  <div class="t-p-5 flex">
                    <div class="p-float-label max-md:!t-flex max-md:!t-flex-col align-items-center">
                      <InputText id="syno" v-model="addingSynonym" />
                      <label for="syno" class="max-md:!t-mt-[-1.5rem] p-float-label">Enter synonym</label>
                      <Button
                        aria-label="Add synonym"
                        :type="null"
                        label="+"
                        class="ml-3"
                        :class="{ 'shake': isAddSynoShake }"
                        @click="addSynonym"
                      />
                    </div>
                  </div>
                  <small id="text-error" class="p-error">{{
                    synosErrorMessage || "&nbsp;"
                  }}</small>
                  <PickList
                    id="synos"
                    key=""
                    v-model="synonyms.value"
                    class="pick-list"
                    :class="{ 'border-red-300 border-solid border-1': synosErrorMessage }"
                    aria-label="Select language"
                  >
                    <template #sourceheader>
                      Not included
                    </template>
                    <template #targetheader>
                      Included
                    </template>
                    <template #item="slotProps : {item: Synonym}">
                      <div :key="slotProps.item.id" class="flex flex-wrap p-2 align-items-center gap-3 pick-list">
                        <div class="flex-1 flex flex-column gap-2">
                          <span class="font-bold">{{ slotProps.item.value }}</span>
                          <div class="flex align-items-center gap-2">
                            <Badge v-tooltip="{value: `<p>Player will get <b>${slotProps.item.pointsForGuess} points</b> for guessing this synonym</p`, escape: true}" :value="slotProps.item.pointsForGuess" :severity="'info'" />
                            <Badge v-tooltip="{value: `<p>Player will get <b>${slotProps.item.moneyForGuess} coins</b> for guessing this synonym</p`, escape: true}" :value="slotProps.item.moneyForGuess" :severity="'warning'" />
                          </div>
                        </div>
                      </div>
                    </template>
                  </PickList>
                </div>
              </template>
            </Fieldset>
            <div class="mt-5 prevent-tw">
              <Button label="Create challenge" type="submit" class="mx-auto block" :loading="isLoading" @click="createTask" />
            </div>
          </form>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style lang="sass">
@use '../../assets/main' as main

.pick-list
  @include main.apply-default-button()

</style>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { Synonym } from '@prisma/client';
import type { ServerDiff, ServerLang } from '../dashboard.vue';

const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });

const selectedDiff = reactive<{value: ServerDiff}>({ value: {} as ServerDiff });
const selectedLanguage = reactive<{value: ServerLang}>({ value: {} as ServerLang });
const word = reactive({ value: '' });
const synonyms = reactive({ value: [[], []] });
const taskFetched = ref({});
const context = ref('');
useFetch('/api/diffs').then((res) => {
  diffs.value = res.data.value;
  selectedDiff.value = diffs.value[0];
});
useFetch('/api/langs').then((res) => {
  langs.value = res.data.value;
  selectedLanguage.value = langs.value[0];
});

const isRandomTaskGenerating = ref(false);

async function randomGenerateTask () {
  isRandomTaskGenerating.value = true;
  const task = await $fetch(`/api/word/random?lang=${selectedLanguage.value.langFull}&diff=${selectedDiff.value.name}`);
  word.value = task.word.word;
  synonyms.value[0] = task.synos;
  context.value = task.task.description;
  taskFetched.value = task;
  isRandomTaskGenerating.value = false;
}

async function createTask () {
  taskFetched.value.task.description = context.value;
  taskFetched.value.task.isVisible = true;
  taskFetched.value.word.word = word.value;
  const created = await $fetch('/api/task/update', {
    method: 'PATCH',
    body: {
      updatingTask: taskFetched.value
    }
  });
}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-ground t-rounded-md p-5 h-fit">
          <div class="relative">
            <div class="absolute right-0">
              <Button v-tooltip="'Generate randomly'" unstyled @click="randomGenerateTask">
                <template #icon>
                  <i class="pi pi-sync" :class="{'pi-spin' : isRandomTaskGenerating}" />
                </template>
              </Button>
            </div>
          </div>
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
                <i v-tooltip.left="'Define challenge difficulty so players can choose it depends them skill'" class="pi pi-info-circle absolute t-top-[-20px] right-0" />
              </div>
              <div class="p-float-label mt-5">
                <Dropdown
                  v-model="selectedLanguage.value"
                  input-id="dd-lang"
                  :options="langs.value"
                  option-label="name"
                  placeholder="Select language"
                  class="w-full"
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
                <i v-tooltip.left="'Select language of word and synonyms'" class="pi pi-info-circle absolute t-top-[-20px] right-0" />
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
                <p>Word</p>
                <i v-tooltip.left="'The word which synonyms players will be guessing'" class="pi pi-info-circle" />
              </div>
              <InputText v-model="word.value" type="text" class="w-full" />
            </div>
            <div class="mt-5">
              <div class="flex t-place-content-between">
                <p>Context</p>
                <i v-tooltip.left="'Enter the context of word. You can use html tags'" class="pi pi-info-circle" />
              </div>
              <Editor v-model="context" />
            </div>
          </Fieldset>
          <Fieldset>
            <template #legend>
              <div class="flex align-items-center text-primary">
                <span class="pi pi-file-import mr-2" />
                <span class="font-bold text-lg">Synonyms</span>
              </div>
            </template>
            <div class="relative">
              <i v-tooltip.left="'The synonyms which is players will be guessing'" class="pi pi-info-circle absolute t-right-0" />
            </div>
            <div class="mt-5">
              <PickList
                v-model="synonyms.value"
                data-key="id"
              >
                <template #sourceheader>
                  Possible
                </template>
                <template #targetheader>
                  Selected
                </template>
                <template #item="slotProps : {item: Synonym}">
                  <div class="flex flex-wrap p-2 align-items-center gap-3 pick-list">
                    <div class="flex-1 flex flex-column gap-2">
                      <span class="font-bold">{{ slotProps.item.value }}</span>
                      <div class="flex align-items-center gap-2">
                        <Badge v-tooltip="{value: `<p>Player will get <b>${slotProps.item.pointsForGuess} points</b> for guessing this synonym</p`, escape: true}" :value="slotProps.item.pointsForGuess" :severity="'info'" />
                        <Badge v-tooltip="{value: `<p>Player will get <b>${slotProps.item.moneyForGuess} points</b> for guessing this synonym</p`, escape: true}" :value="slotProps.item.moneyForGuess" :severity="'warning'" />
                      </div>
                    </div>
                  </div>
                </template>
              </PickList>
            </div>
          </Fieldset>
          <div class="mt-5">
            <!--              todo redirect to my tasks-->
            <!--              <NuxtLink to="/dashboard">-->
            <Button label="Create challenge" type="null" class="mx-auto block" @click="createchallenge" />
          <!--              </NuxtLink>-->
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.pick-list{
  button, [type="button"] {
    color: var(--primary) !important;
  }
}
</style>

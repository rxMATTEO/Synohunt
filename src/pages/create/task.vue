<script lang="ts" setup>
import {ref, onMounted, reactive} from 'vue';
import type { ServerDiff, ServerLang } from '../dashboard.vue';

const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });

const selectedDiff = reactive<{value: ServerDiff}>({ value: {} as ServerDiff });
const selectedLanguage = reactive<{value: ServerLang}>({ value: {} as ServerLang });
const word = reactive({ value: '' });
const synonyms = reactive({ value: [[], []] });
const context = ref('');
useFetch('/api/diffs').then((res) => {
  diffs.value = res.data.value;
  selectedDiff.value = diffs.value[0];
});
useFetch('/api/langs').then((res) => {
  langs.value = res.data.value;
  selectedLanguage.value = langs.value[0];
});

async function randomGenerateTask () {
  const task = await $fetch(`/api/word/random?lang=${selectedLanguage.value.langFull}&diff=${selectedDiff.value.name}`);
  word.value = task.word.word;
  synonyms.value[0] = task.synos;
  context.value = task.task.description;
  console.log(context.value);
}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-ground t-rounded-md p-5 h-fit">
          <div class="relative">
            <div class="absolute right-0">
              <Button v-tooltip="'Generate randomly'" icon="pi pi-sync" unstyled @click="randomGenerateTask" />
            </div>
          </div>
          <h1 class="text-4xl">
            Creating new task
          </h1>
          <div class="mt-5">
            <div class="p-float-label">
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
            </div>
          </div>
          <div class="mt-5">
            <p>Word</p>
            <InputText v-model="word.value" type="text" class="w-full" />
          </div>
            <div class="mt-5">
              <p>Context</p>
              <Editor v-model="context" />
            </div>
          <div class="mt-5">
            <p>Synonyms</p>
            <div class="mt-5">
              <PickList
                v-model="synonyms.value"
                data-key="id"
              >
                <template #sourceheader>
                  Available
                </template>
                <template #targetheader>
                  Selected
                </template>
                <template #item="slotProps">
                  <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <div class="flex-1 flex flex-column gap-2">
                      <span class="font-bold">{{ slotProps.item.value }}</span>
                      <div class="flex align-items-center gap-2">
                        <Badge :value="slotProps.item.pointsForGuess" :severity="'info'" />
                      </div>
                    </div>
                  </div>
                </template>
              </PickList>
            </div>
            <div class="mt-5">
              <!--              todo redirect to my tasks-->
              <NuxtLink to="/dashboard">
                <Button label="Create task" type="null" class="mx-auto block" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>

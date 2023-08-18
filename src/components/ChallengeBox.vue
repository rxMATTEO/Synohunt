<script setup lang="ts">
import { Difficulity, Language, Task } from '@prisma/client';
import { reactive } from 'vue';
import Dropdowns from '@/components/loading/Dropdowns.vue';
import ChallengeContent from '@/components/loading/ChallengeContent.vue';

export type ServerDiff = Pick<Difficulity, 'name'>;
export type ServerLang = Pick<Language, 'langFull'>;

const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });
const task = reactive<{ value: Task }>({ value: {} as Task });

const selectedDiff = reactive<{ value: ServerDiff }>({
  value: {} as ServerDiff
});
const selectedLanguage = reactive<{ value: ServerLang }>({
  value: {} as ServerLang
});
const { pending: diffsPending, data: diffsFetched } = useLazyFetch(
  '/api/diffs',
  {
    server: false
  }
);
const { pending: langsPending, data: langsFetched } = useLazyFetch(
  '/api/langs',
  {
    server: false
  }
);
const taskPending = ref(true);

watch(diffsFetched, (newDiffs) => {
  diffs.value = newDiffs;
  selectedDiff.value = newDiffs[0];
  onChangeTaskOption();
});

watch(langsFetched, (newLangs) => {
  langs.value = newLangs;
  selectedLanguage.value = newLangs[0];
  onChangeTaskOption();
});
//     .then((res) => {
//   diffs.value = res.data.value;
//   selectedDiff.value = diffs.value[0];
// });
//     .then((res) => {
//   langs.value = res.data.value;
//   selectedLanguage.value = langs.value[0];
// });
type GradientNames = 'easy' | 'medium' | 'hard';
const gradient = reactive<{ value: GradientNames }>({ value: 'easy' });

function onChangeTaskOption (id = -1) {
  setTimeout(async () => {
    if (selectedLanguage.value.langFull && selectedDiff.value.name) {
      gradient.value = selectedDiff.value.name.toLowerCase() as GradientNames;
      const { data: tasksFetched, pending } = await useAsyncData('task', () => $fetch('/api/task/random', {
        method: 'POST',
        body: {
          diff: selectedDiff.value.name,
          lang: selectedLanguage.value.langFull,
          butId: id
        }
      }));
      taskPending.value = pending.value;
      task.value =
        Object.keys(tasksFetched).length > 0
          ? tasksFetched
          : {
            description: 'По данным фильтрам не найдены испытания!'
          };
    }
  });
}

const loading = ref(diffsPending || langsPending);
</script>

<template>
  <GradientBox :gradient-name="gradient.value">
    <template #left-side>
      <div class="t-p-3">
        <div v-if="loading">
          <Dropdowns />
        </div>
        <div v-else>
          <p class="text-sm">
            Suggested Challenge
          </p>
          <div class="mt-5">
            <div class="p-float-label">
              <Dropdown
                v-model="selectedDiff.value"
                input-id="dd-diff"
                :options="diffs.value"
                option-label="name"
                placeholder="Select difficulty"
                class="w-full"
                @change="() => onChangeTaskOption()"
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
                @change="() => onChangeTaskOption()"
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
          <div class="mt-5 flex">
            <div class="t-mx-auto">
              <NuxtLink v-if="task.value.id" :to="`/play/${task.value.id}`">
                <Button
                  type="null"
                  label="TRAIN"
                  class="text-sm p-2 mr-2 bg-blue-300 border-1 border-white hover:bg-blue-800 text-white"
                />
              </NuxtLink>
              <Button
                type="null"
                label="SKIP"
                class="text-sm p-2 bg-indigo-400 border-1 border-white hover:bg-indigo-800 text-white"
                @click="onChangeTaskOption(task.value.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #right-side>
      <div class="t-p-3 h-full relative">
        <div v-if="taskPending">
          <ChallengeContent />
        </div>
        <div v-else>
          <p v-html="task.value.description" />
          <div class="t-h-8">
            <div class="absolute t-bottom-3 unset flex flex-row">
              <div
                v-for="tag in task.value.Tag"
                class="vertical-align-middle text-center mr-5 surface-ground text-sm px-1 t-rounded-md"
              >
                <p class="flex">
                  <span class="vertical-align-top p-1">{{ tag.name }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </GradientBox>
</template>

<style scoped lang="sass"></style>

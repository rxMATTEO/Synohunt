<script setup lang="ts">
import { Difficulity, Language, Task } from '@prisma/client';
import { reactive, ref } from 'vue';

definePageMeta({
  middleware: 'auth'
});

export type ServerDiff = Pick<Difficulity, 'name'>;
export type ServerLang = Pick<Language, 'langFull'>;

const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });
const task = reactive<{value: Task}>({ value: {} as Task });

const selectedDiff = reactive<{value: ServerDiff}>({ value: {} as ServerDiff });
const selectedLanguage = reactive<{value: ServerLang}>({ value: {} as ServerLang });
useFetch('/api/diffs').then((res) => {
  diffs.value = res.data.value;
  selectedDiff.value = diffs.value[0];
});
useFetch('/api/langs').then((res) => {
  langs.value = res.data.value;
  selectedLanguage.value = langs.value[0];
});

function generateRandom () {

}
type GradientNames = 'easy' | 'medium' | 'hard';
const gradient = reactive<GradientNames>({ value: 'easy' });

function onChangeTaskOption (id = -1) {
  setTimeout(async () => {
    if (selectedLanguage.value.langFull && selectedDiff.value.name) {
      gradient.value = selectedDiff.value.name.toLowerCase();
      console.log(gradient.value);
      const tasksFetched = await $fetch('/api/task/random', {
        method: 'POST',
        body: {
          diff: selectedDiff.value.name,
          lang: selectedLanguage.value.langFull,
          butId: id
        }
      });
      task.value = Object.keys(tasksFetched).length > 0
        ? tasksFetched
        : {
          description: 'По данным фильтрам не найдены испытания!'
        };
    }
  });
}
onMounted(() => onChangeTaskOption());

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <GradientBox :gradient-name="gradient.value">
          <div class="flex flex-column md:flex-row t-text-white">
            <div class="t-w-full md:t-w-1/3">
              <div class="t-p-3">
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
                      <Button type="null" label="TRAIN" class="text-sm p-2 mr-2 bg-blue-300 border-1 border-white hover:bg-blue-800 text-white" />
                    </NuxtLink>
                    <Button type="null" label="SKIP" class="text-sm p-2 bg-indigo-400 border-1 border-white hover:bg-indigo-800 text-white" @click="onChangeTaskOption(task.value.id)" />
                  </div>
                </div>
              </div>
            </div>
            <div class="t-w-full md:t-w-2/3 t-backdrop-blur-sm t-bg-black t-bg-opacity-50">
              <div class="t-p-3 h-full relative">
                {{ task.value.description }}
                <div class="t-h-8">
                  <div class="absolute t-bottom-3 unset flex flex-row">
                    <div v-for="(tag) in task.value.Tag" class="vertical-align-middle text-center mr-5 surface-ground text-sm px-1 t-rounded-md">
                      <p class="flex">
                        <span class="vertical-align-top p-1">{{ tag.name }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GradientBox>
        <div class="mt-5">
          <div class="flex t-flex-col md:flex-row align-items-stretch">
            <div class="w-full md:t-w-3/4">
              <div class="p-3 surface-ground t-rounded-md h-full flex">
                <div class="t-w-1/3 md:t-w-1/5">
                  <img src="/img/placeholder.png" class="block h-full" alt="todo">
                </div>
                <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                  <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
                </div>
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
          </div>

          <div class="flex t-flex-col md:flex-row align-items-stretch mt-5">
            <div class="w-full md:t-w-3/4">
              <div class="p-3 gradient-black-white t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
            <div class="w-full max-md:t-mt-3 md:t-w-1/4 md:t-pl-5">
              <div class="p-3 surface-ground t-rounded-md h-full">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p class="text-3xl">
            Leaderboard
          </p>
          <p class="my-3">
            You are automatically given an allegiance with anyone who is in the same clan as you. You can also become allies with other warriors by following each other or inviting new warriors to join.
          </p>
          <Leaderboard :limit="5" />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">
.unset
  color: initial

</style>

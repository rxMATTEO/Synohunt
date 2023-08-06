<script lang="ts" setup>
import { reactive } from 'vue';
import type { ServerDiff, ServerLang } from '../dashboard.vue';

const diffs = reactive({ value: [] as ServerDiff[] });
const langs = reactive({ value: [] as ServerLang[] });

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
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <div class="surface-ground t-rounded-md p-5 h-fit">
          <div class="relative">
            <div class="absolute right-0">
              <i class="" />
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
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>

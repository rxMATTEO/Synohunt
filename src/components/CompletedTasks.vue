<script setup lang="ts">
import type { CompletedTaskResponse } from '@/server/api/task/completed.post';

const { data: { value: { user: { account } } } } = useAuth();
const completedTasks = ref<CompletedTaskResponse[]>((await useFetch('/api/task/completed', {
  method: 'POST',
  body: {
    userId: account.id
  }
})).data.value || []);
</script>

<template>
  <div class="">
    <h1 class="text-4xl font-bold mb-5">
      Completed challenges
    </h1>
    <div v-if="completedTasks.length === 0">
      <div>
        <span>No completed challenges yet.</span>
        <NuxtLink to="/play/random" class="text-primary">
          Complete them all!
        </NuxtLink>
      </div>
    </div>
    <DataView
      v-else
      :value="completedTasks"
      paginator
      :rows="5"
    >
      <!--    todo remember solved synonyms on plaay page pls 404 page-->
      <template #list="slotProps: {data: CompletedTaskResponse}">
        <NuxtLink :to="`/play/${slotProps.data.Task.id}`" class="block w-full">
          <GradientBox :gradient-name="slotProps.data.Task.Difficulity.name.toLowerCase()" class="mb-5">
            <template #left-side>
              <div class="col-12 relative">
                <div class="flex flex-column xl:flex-row xl:align-items-start px-4 py-2 gap-4">
                  <div class="flex flex-column sm:flex-row justify-content-between xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column sm:align-items-start gap-3">
                      <div class="text-2xl font-bold text-900">
                        <p class="text-white">
                          {{ slotProps.data.Task.Word.word }}
                        </p>
                      </div>
                      <p v-html="slotProps.data.Task.description" />
                    </div>
                  </div>
                </div>
                <div class="relative t-bottom-0 t-left-6">
                  <Tag :value="slotProps.data.Task.Language.langFull" />
                  <Tag class="ml-3" :value="slotProps.data.Task.Difficulity.name" />
                </div>
              </div>
            </template>
            <template #right-side>
              <div class="p-4">
                <div class="flex align-items-center gap-3 t-place-content-between t-left-5 t-right-5">
                  <NuxtLink :to="`/profile/${slotProps.data.Task.User.name}`" class="hover:text-primary transition-colors animation-ease-in-out transition-duration-300">
                    <i class="pi pi-user vertical-align-middle" />
                    <span class="pl-1 vertical-align-">{{ slotProps.data.Task.User.name }}</span>
                  </NuxtLink>
                  <div class="flex align-items-center flex-row">
                    <div class="flex align-items-center">
                      <i class="pi pi-bookmark-fill block h-full" />
                      <span class="pl-1">3</span>
                    </div>
                    <div class="flex align-items-center ml-3">
                      <i class="pi pi-check block h-full" />
                      <span class="pl-1">{{ slotProps.data.timesComplete }}</span>
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <div class="flex flex-row flex-wrap align-items-center gap-3 sm:gap-2">
                    <div v-for="syno in slotProps.data.Task.Word.Synonym">
                      <Tag class="text-white bg-gray-500 hover:bg-gray-800 transition-all animation-ease-in-out transition-duration-300">
                        {{ syno.value }}
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </GradientBox>
        </NuxtLink>
      </template>
    </DataView>
  </div>
</template>

<style scoped lang="sass">

</style>

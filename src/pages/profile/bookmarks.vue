<script lang="ts" setup>
import { CompletedTaskResponse } from '@/server/api/task/completed.post';

const { data: { value: { user: { account } } } } = useAuth();
const completedTasks = (await useFetch('/api/task/allBookmarks', {
  method: 'POST',
  body: {
    userId: account.id
  }
})).data.value;

useHead({
  title: 'Bookmarks'
});

useServerSeoMeta({
  title: 'Synohunt my bookmarked challenges',
  ogTitle: 'Synohunt my bookmarked challenges',
  description: 'Bookmarked synonym words challenges',
  ogDescription: 'Bookmarked synonym words challenges',
  ogImage: 'https://www.synohunt.ru/img/biglogo.png',
  ogUrl: `${import.meta.env.VITE_AUTH_ORIGIN}profile/bookmarks`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div
          class="surface-ground t-rounded-md p-5"
        >
          <h1 class="text-4xl font-bold mb-5">
            Bookmarked challenges
          </h1>
          <div v-if="completedTasks.length === 0">
            <div>
              <span>No bookmarks challenges yet. If you want keep challenge for later, you can <span class="bg-primary-500 text-white"><i class="pi pi-bookmark" /> bookmark them</span></span>
            </div>
          </div>
          <DataView
            v-else
            :value="completedTasks"
            paginator
            :rows="5"
            class="h-full"
            :pt="{
              container: {
                class: ['h-full']
              }
            }"
          >
            <template #list="slotProps: {data: CompletedTaskResponse}">
              <NuxtLink :to="`/play/${slotProps.data.Task.id}`" class="block w-full">
                <GradientBox :gradient-name="slotProps.data.Task.Difficulity.name.toLowerCase()" class="mb-5">
                  <template #left-side>
                    <div class="col-12 relative">
                      <div class="flex flex-column xl:flex-row xl:align-items-start px-4 py-2 gap-4">
                        <div class="flex flex-column sm:flex-row justify-content-between xl:align-items-start flex-1 gap-4">
                          <div class="flex flex-column sm:align-items-start gap-3">
                            <div class="text-2xl font-bold text-900">
                              <p>{{ slotProps.data.Task.Word.word }}</p>
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
                    <div class="p-4 h-full">
                      <div class="flex align-items-center gap-3 absolute t-place-content-between t-left-5 t-right-5">
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
                      <div class="w-full h-full overflow-hidden h-full relative">
                        <div class="flex overflow-hidden flex-row max-lg:t-flex-col align-items-center sm:align-items-end gap-3 sm:gap-2 absolute bottom-0 max-md:t-mt-3 md:t-bottom-3 t-bottom-1 ">
                          <div v-for="syno in slotProps.data.Task.Word.Synonym" class="">
                            <Tag class="bg-gray-300 hover:bg-gray-500 transition-all animation-ease-in-out transition-duration-300">
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
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>

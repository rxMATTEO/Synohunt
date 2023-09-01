<script setup lang="ts">
import type { Word, Synonym, Difficulity, Tag, Language, Task } from '@prisma/client';

const { data: { value: { user: { account } } } } = useAuth();

type CompletedTasksResponse = Task & {
  Word: Word & { Synonym: Synonym[] }
  Difficulity: Difficulity,
  Language: Language,
  Tag: Tag,
  _count: { CompletedTask: number }
}
// todo add message on emty, fix leaderboard like points * lvl
const createdTasks = ref((await useFetch('/api/task/created', {
  method: 'POST',
  body: {
    userId: account.id
  }
})).data.value as CompletedTasksResponse[] || []);
// todo mb add coins that was spent on task and creator can loot them
</script>
<template>
  <h1 class="text-4xl font-bold mb-5">
    Created challenges
  </h1>
  <div v-if="createdTasks.length === 0">
    <div>
      <span>No created challenges yet.</span>
      <NuxtLink to="/create/task" class="text-primary">
        Create your own!
      </NuxtLink>
    </div>
  </div>
  <DataView
    v-else
    :value="createdTasks"
    paginator
    :rows="5"
    data-key="id"
  >
    <template #list="slotProps: { data: CompletedTasksResponse }">
      <NuxtLink :key="slotProps.data.id" :to="`/play/${slotProps.data.id}`" class="block w-full">
        <GradientBox :gradient-name="slotProps.data.Difficulity.name.toLowerCase()" class="mb-5">
          <template #left-side>
            <div class="col-12 relative">
              <div class="flex flex-column xl:flex-row xl:align-items-start px-4 py-2 gap-4">
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      <p class="text-white">
                        {{ slotProps.data.Word.word }}
                      </p>
                    </div>
                    <p v-html="slotProps.data.description" />
                  </div>
                </div>
              </div>
              <div class="relative t-bottom-0 t-left-6">
                <Tag class="">
                  {{ slotProps.data.Language.langFull }}
                </Tag>
                <Tag class="ml-3">
                  {{ slotProps.data.Difficulity.name }}
                </Tag>
              </div>
            </div>
          </template>
          <template #right-side>
            <div v-if="slotProps.data.Word.Synonym.length > 1" class="p-4 overflow-hidden">
              <div class="flex flex-wrap align-items-center sm:align-items-end gap-3 sm:gap-2">
                <div v-for="syno in slotProps.data.Word.Synonym" :key="syno.id">
                  <Tag class="text-white bg-gray-500 hover:bg-gray-800 transition-all animation-ease-in-out transition-duration-300">
                    {{ syno.value }}
                  </Tag>
                </div>
              </div>
            </div>
          </template>
        </GradientBox>
      </NuxtLink>
    </template>
  </DataView>
</template>

<style scoped lang="sass">

</style>

<script setup lang="ts">
import { Word, Synonym, Difficulity, Tag, Language, Task } from '@prisma/client';

const { data: { value: { user: { account } } } } = useAuth();
const createdTasks = ref((await useFetch('/api/task/created', {
  method: 'POST',
  body: {
    userId: account.id
  }
})).data.value);

type CompletedTasksResponse = Task & {
  Word: Word & { Synonym: Synonym[] }
  Difficulity: Difficulity,
  Language: Language,
  Tag: Tag,
  _count: { CompletedTask: number }
}
</script>

<template>
  <DataView
    :value="createdTasks"
    paginator
    :rows="5"
  >
    <template #list="slotProps: { data: CompletedTasksResponse }">
      <GradientBox :gradient-name="slotProps.data.Difficulity.name.toLowerCase()" class="mb-3">
        <template #left-side>
          <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
              <div class="text-2xl font-bold text-900">
                <p v-html="slotProps.data.description" />
              </div>
              <div class="flex align-items-center gap-3">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-tag" />
                  <span class="font-semibold">{{ slotProps.data.Word.word }}</span>
                </span>
                <Tag :value="slotProps.data.Tag" severity="" />
              </div>
            </div>
            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <div v-for="syno in slotProps.data.Word.Synonym">
                <p>{{ syno.value }}</p>
              </div>
            </div>
          </div>
        </template>
        <template #right-side>
          <TinyCoin :value="slotProps.data._count.CompletedTask.toString()" />
        </template>
      </GradientBox>
    </template>
  </DataView>
</template>

<style scoped lang="sass">

</style>

<script setup lang="ts">
import { reactive } from 'vue';

type RouteParams = {
  params: {
    taskId: number
  }
}
const route: RouteParams = useRoute();
type Syno = {
  id: number,
  wordId: number,
  value: string,
}
type Task = {
  id: number,
  diffId: number,
  langId: number,
  description: string,
  wordId: 3,
}
type TaskResponse = {
  Word: {
    id: number,
    word: string,
    Synonym: Syno[],
  },
  task: Task[]

}
const task = reactive<{value: TaskResponse}>({ value: (await useFetch(`/api/task/${route.params.taskId}`)).data });

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        <h1>Guess the all synonyms</h1>
        <span v-for="word in task.value.description.split(' ')">
          <span :class="{'bg-blue-500': word === task.value.Word.word} ">{{ word + " " }}</span>
        </span>

        <div class="flex t-place-content-between">
          <div class="t-w-1/5">
            <p>All synonyms</p>
            <p v-for="(syno) in task.value.Word.Synonym">
              {{ syno.value }}
            </p>
          </div>
          <div class="bg-cyan-50 t-w-3/5">
            a
          </div>
          <div class="t-w-1/5 text-right">
            <p>Solved synonyms</p>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>

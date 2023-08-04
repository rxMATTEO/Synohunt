<script setup lang="ts">
import {reactive} from 'vue';

type RouteParams = {
  params: {
    taskId: number
  }
}
const route: RouteParams = useRoute();
const task = reactive({value: (await useFetch(`/api/task/${route.params.taskId}`)).data});

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        {{ task.value }}
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
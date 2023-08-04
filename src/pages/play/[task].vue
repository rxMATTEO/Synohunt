<script setup lang="ts">

type RouteParams = {
  params: {
    task: number
  }
}
const route: RouteParams = useRoute();
const task = await useFetch('/api/task');

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
      {{route.params.task}}
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
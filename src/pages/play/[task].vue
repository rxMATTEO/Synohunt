<script setup lang="ts">
const route = useRoute();

</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      {{route.params.task}}
    </NuxtLayout>
  </div>
</template>

<style scoped lang="sass">

</style>
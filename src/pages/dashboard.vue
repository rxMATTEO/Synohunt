<script setup lang="ts">
import {ref} from 'vue';

const visible = ref(true);
</script>

<template>
  <div class="flex">
    <Sidebar width="15rem" />
    <div class="main w-full flex-1">
      <div class="h-4rem">
        <Header />
      </div>
      <div class="ml-[14rem]">
        adssadasdas
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@tailwind base
@tailwind components
@tailwind utilities
</style>
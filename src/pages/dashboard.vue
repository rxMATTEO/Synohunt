<script setup lang="ts">
import {ref} from 'vue';

const visible = ref(true);
</script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="relative main">
      <Header />
    </div>
  </div>
</template>

<style scoped lang="sass">
.main
  left: 15rem
</style>
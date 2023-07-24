<template>
  <NuxtPage />
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
.page-enter-active, .page-enter-leave {
  transition: all .4s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
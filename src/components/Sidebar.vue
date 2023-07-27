<script setup lang="ts">
const props = defineProps({
  width: String,
  mobileWidth: String
});
</script>

<template>
  <div :class="`z-1 hidden lg:block lg:w-${props.width} lg:flex-auto flex-none left-0 top-0 bottom-0 fixed surface-card shadow-8`">
    <div class="logo">
      <img src="/img/download.webp" class="mx-auto block w-6" alt="logo" draggable="false"  />
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
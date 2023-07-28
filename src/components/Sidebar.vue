<script setup lang="ts">
const props = defineProps({
  isExpanded: Object,
  toggle: Function,
});

</script>

<template>
  <div :class="{'md:t-w-[14rem] t-w-full md:visible': isExpanded.value, 'hidden': !isExpanded.value}">
    <div :class="{hidden: !isExpanded.value}" class="z-1 md:t-block lg:flex-auto flex-none left-0 top-0 bottom-0 fixed surface-card shadow-8 sidebar">
      <div class="logo">
        <NuxtLink to="/" class="w-6 mx-auto block">
          <img src="/img/download.webp" class="block mx-auto w-full" alt="logo" draggable="false"  />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.sidebar
  width: inherit
</style>
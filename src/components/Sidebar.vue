<script setup lang="ts">
import {onMounted} from 'vue';

const props = defineProps({
  isExpanded: Object,
  toggle: Function,
});

onMounted(() => {
  // if(window.document.documentElement.offsetWidth <= 768) props.toggle();
});
</script>

<template>
  <div :class="{'md:t-w-[14rem] t-w-full md:visible': isExpanded.value, 'hidden': !isExpanded.value}">
    <div :class="{hidden: !isExpanded}" class="z-1 md:t-block lg:flex-auto flex-none left-0 top-0 bottom-0 fixed surface-card shadow-8 sidebar">
      <div class="logo">
        <img src="/img/download.webp" class="mx-auto block w-6" alt="logo" draggable="false"  />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.sidebar
  width: inherit
</style> //:class="{'md:t-w-[14rem] t-w[5rem]': expanded.value }"
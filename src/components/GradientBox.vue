<script lang="ts">
import { defineComponent, createElementVNode, PropType } from 'vue';
type GradientName = 'indigo' | 'black-white' | 'primary' | 'easy' | 'medium' | 'hard';
export default defineComponent({
  name: 'GradientBox',
  props: {
    gradientName: String as PropType<GradientName>
  }
});
</script>
<template>
  <div :class="{ [`gradient-${gradientName}`]: true }" class="col-12 t-rounded p-1">
    <div class="flex flex-column md:flex-row t-text-white t-rounded t-background-blur-sm t-bg-black t-bg-opacity-30">
      <div class="t-w-full md:t-w-1/3">
        <slot name="left-side" />
      </div>
      <div class="t-w-full md:t-w-2/3 t-backdrop-blur-sm t-bg-black t-bg-opacity-50">
        <slot name="right-side" />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

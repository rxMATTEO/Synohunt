<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLevelStore } from '@/stores/levelStore';

defineProps<{ value: number }>();
const levelStore = useLevelStore();
const { level } = storeToRefs(levelStore);
const lvlBreakPoints = [[0, 'bg-bluegray-600'], [10, 'bg-orange-500'], [20, 'bg-indigo-400']];
const userLvlColor = lvlBreakPoints.findLast(([breakPoint, color]) => breakPoint <= +level.value.value);
</script>

<template>
  <Badge :value="+value" class="mr-2" :class="{[userLvlColor[1]]: true}" />
</template>

<style scoped lang="sass">

</style>

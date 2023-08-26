<script setup lang="ts">
const props = defineProps<{ value: number }>();
const lvlBreakPoints = [[0, 'bg-bluegray-600'], [10, 'bg-orange-500'], [20, 'bg-indigo-400']];
const userLvlColor = lvlBreakPoints.reverse().find(([breakPoint, color]) => breakPoint <= props.value);
</script>

<template>
  <Badge :value="+value" class="mr-2" :class="{[userLvlColor[1]]: true}" />
</template>

<style scoped lang="sass">

</style>

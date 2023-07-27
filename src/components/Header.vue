<script setup lang="ts">
const props = defineProps({
  expanded: Function,
});
</script>

<template>
  <div class="fixed surface-card shadow-8 w-full">
    <Button @click="expanded">Hi</Button>
    This is a header
  </div>
</template>

<style scoped lang="sass">

</style>
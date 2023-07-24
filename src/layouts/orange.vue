<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'orange'
});
</script>

<template>
  <div>
    <p>This is orange layout</p>
    <slot />
  </div>
</template>

<style scoped lang="sass">
div
  background-color: orange
</style>
<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GradientBox',
  props: {
    pages: Array,
    index: Number
  },
  setup (props, { slots }) {
    return () => props.pages[props.index];
  }
});
</script>

<template>
</template>

<style scoped lang="sass">

</style>

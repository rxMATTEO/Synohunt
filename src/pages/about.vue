<script lang="ts">
import {defineComponent} from 'vue';

definePageMeta({pageTransition: {name: 'spin'}});
export default defineComponent({
  name: 'about',
});
</script>

<template>
<div>
  <NuxtLink to="/">Home page</NuxtLink>
  this is about!
</div>
</template>

<style scoped>

</style>
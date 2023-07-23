<template>
  <div id="app">dsadesasdasdasasd
   <Button about="ass" :inputmode="'email'">asdass</Button>
  </div>
</template>

<script lang="ts">
import {useAppConfig} from 'nuxt/app';

export default {
  name: 'App',
  created() {
    const appConfig = useAppConfig();
    console.log(useAppConfig());
  }
};
</script>

<style scoped>

</style>
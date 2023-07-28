<template>
  <div>
    <p v-if="!pending">
      This is prisma data: {{prisma}}
    </p>
    <p v-else>Pensing</p>

    <div>
      <NuxtLink to="welcome/user">To user</NuxtLink>
      <br />
      <NuxtLink to="about">To about</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue';

const {pending, data: prisma} = useLazyFetch('/api/prisma');
defineComponent({
  name: 'index.vue',
});
</script>

<style scoped>

</style>
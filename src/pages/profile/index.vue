<script setup lang="ts">
import { ref } from 'vue';

// useHead({
//   title: 'My profile',
//   meta: [
//     { name: 'description', content: 'Register a new account on Synohunt' }
//   ]
// });

const { data: { value: { user: { account } } } } = useAuth();

const pending = ref(true);
onMounted(() => {
  pending.value = false;
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <Profile :account="account" :foreign="false" />
    </NuxtLayout>
  </div>
</template>

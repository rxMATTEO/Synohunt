<script setup lang="ts">
import { useRoute } from '#imports';

const { params: { id: name } } = useRoute();
const account = (await useFetch('/api/user', {
  method: 'POST',
  body: {
    name
  }
})).data.value.account;
</script>

<template>
  <NuxtLayout name="header-n-sidebar">
    <Profile :account="account" />
  </NuxtLayout>
</template>

<style scoped lang="sass">

</style>

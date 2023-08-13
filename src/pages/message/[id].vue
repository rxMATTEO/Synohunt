<script setup lang="ts">
const { params : { id } } = useRoute();
const msg = (await useFetch('/api/messages/getbyid', {
  method: 'POST',
  body: {
    messageId: id
  },
})).data.value;
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        hi
      </div>
    </NuxtLayout>
  </div>
</template>

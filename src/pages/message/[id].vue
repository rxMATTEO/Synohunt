<script setup lang="ts">
import { Message } from '@prisma/client';

const { params: { id } } = useRoute();
const msg = (await useFetch('/api/messages/getbyid', {
  method: 'POST',
  body: {
    messageId: id
  }
})).data.value as Message;

useHead({
  title: `${msg.value}`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        {{ msg.value }}
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

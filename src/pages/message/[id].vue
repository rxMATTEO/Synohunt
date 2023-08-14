<script setup lang="ts">
import { Message } from '@prisma/client';

const { params: { id } } = useRoute();
const msg = (await useFetch('/api/messages/getbyid', {
  method: 'POST',
  body: {
    messageId: id
  }
})).data.value as Message;
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="lg:px-8 lg:mx-8 px-3">
        {{ msg.value }}
      </div>
    </NuxtLayout>
  </div>
</template>

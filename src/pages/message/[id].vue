<script setup lang="ts">
import { Message } from '@prisma/client';

const { params: { id } } = useRoute();
const msg = (await useFetch('/api/messages/getbyid', {
  method: 'POST',
  body: {
    messageId: id
  }
})).data.value as Message;

const { data: { value: { user: { account } } } } = useAuth();
const data = (await useLazyFetch('/api/messages/get', {
  server: false,
  method: 'POST',
  body: {
    userId: account.id
  }
}));
const pending = ref(data.pending);
const msgs = ref(data.data.value);
watch(data.pending, () => {
  msgs.value = data.data.value;
});

useHead({
  title: `${msg.topic}`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div class="flex gap-5">
          <div v-if="!pending" class="t-w-1/3">
            {{ msgs }}
          </div>
          <div class="t-w-2/3">
            b
          </div>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

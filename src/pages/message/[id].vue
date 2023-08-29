<script setup lang="ts">
import type { Message } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { useMessageStore } from '@/stores/messageStore';

const { params: { id } } = useRoute();
const msg = (await useFetch('/api/messages/getbyid', {
  method: 'POST',
  body: {
    messageId: id
  }
})).data.value as Message;

// const { data: { value: { user: { account } } } } = useAuth();
// // const data = (await useLazyFetch('/api/messages/get', {
// //   server: false,
// //   method: 'POST',
// //   body: {
// //     userId: account.id
// //   }
// // }));
// const pending = ref(data.pending);
// const msgs = ref<{Message: Message[]}>(data.data.value);
// watch(data.pending, () => {
//   msgs.value = data.data.value;
// });

const messageStore = useMessageStore();
const { messages: { value: msgs } } = storeToRefs(messageStore);
console.log(msgs.value);
useHead({
  title: `${msg.topic}`
});
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <PaddingBox>
        <div class="flex gap-5">
          <div class="t-w-1/3">
            <div>
              <div v-for="message in msgs.value">
                <div class="surface-200 t-rounded-2xl shadow-6 mb-4">
                  <div class="flex t-h-20 align-items-center">
                    <img class="h-full t-rounded-full" :src="message.imgPath">
                    <div>
                      <p class="ml-3 text-xl font-bold">
                        {{ message.topic }}
                      </p>
                      <p class="ml-3 text-sm text-color-secondary">
                        Notification
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t-w-2/3">
            b
          </div>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

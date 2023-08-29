<script setup lang="ts">
import type { Message } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { useMessageStore } from '@/stores/messageStore';

const { params: { id } } = useRoute();

const messageStore = useMessageStore();
const { messages: { value: msgs } } = storeToRefs(messageStore);
const selected = ref(msgs.value.find(msg => msg.id === +id));
useHead({
  title: selected.value.topic
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
                <div class="surface-200 t-rounded-2xl shadow-6 mb-4 p-3">
                  <div class="flex t-h-20 align-items-center">
                    <img class="h-full t-rounded-full" :src="message.imgPath" :alt="message.topic">
                    <div>
                      <p class="ml-3 text-xl font-bold">
                        {{ message.topic }}
                      </p>
                      <p class="ml-3 text-sm text-color-secondary">
                        Notification
                      </p>
                    </div>
                  </div>
                  <div class="mt-3">
                    {{ message.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t-w-2/3">
            {{ selected }}
          </div>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

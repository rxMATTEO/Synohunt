<script setup lang="ts">
import type { Message } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMessageStore } from '@/stores/messageStore';

const { params: { id } } = useRoute();

const messageStore = useMessageStore();
const { messages: { value: msgs } } = storeToRefs(messageStore);
const selected = ref(msgs.value.find(msg => msg.id === +id));

function selectMessage (msg: Message) {
  selected.value = msg;
  selected.value.statusId = 3;
  messageStore.updateMessage([msg]);
}

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
                <div class="relative surface-200 t-rounded-2xl shadow-6 mb-4 p-3 cursor-pointer" @click="selectMessage(message)">
                  <div class="flex t-h-20 align-items-center">
                    <img class="h-full t-rounded-full" :src="message.imgPath" :alt="message.topic">
                    <div>
                      <p class="ml-3 text-xl font-bold">
                        {{ message.topic }}
                      </p>
                      <p class="ml-3 text-sm text-color-secondary">
                        Notification
                      </p>
                      <Badge class="absolute right-0 t-top-5" value="" :severity="messageStore.getSeverity(message)" />
                    </div>
                  </div>
                  <div class="mt-3 t-line-clamp-1 overflow-hidden">
                    {{ message.value }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t-w-2/3">
            <div>
              <div>
                <p class="text-4xl font-semibold py-3">
                  {{ selected.topic }}
                </p>
              </div>
              <div>
                <p>
                  {{ selected.value }}
                </p>
              </div>
            </div>
            {{ selected }}
          </div>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

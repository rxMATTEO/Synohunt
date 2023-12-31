<script setup lang="ts">
import type { Message } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMessageStore } from '@/stores/messageStore';

const { params: { id } } = useRoute();

const messageStore = useMessageStore();
const { messages: { value: msgs } } = storeToRefs(messageStore);
const selected = id ? ref(msgs.value.find(msg => msg.id === +id)) : ref(msgs.value[0] || 'Empty');

const isEmptyMessages = computed(() => {
  return msgs.value.length === 0;
});

function selectMessage (msg: Message) {
  selected.value = msg;
  if (msg.statusId !== 3) {
    msg.statusId = selected.value.statusId = 3;
    messageStore.updateMessage([msg]);
  }
}

function deleteMessage (msg: Message) {
  selected.value = msgs.value[0];
  messageStore.removeMessage([msg]);
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
          <template v-if="isEmptyMessages">
            <div class="text-center w-full flex flex-column align-items-center">
              <p class="text-4xl md:text-6xl">
                You got no messages yet!
              </p>
              <NuxtImg class="block md:t-w-1/4 h-20rem" alt="Empty box" src="/img/emptyMailBox.png" />
            </div>
          </template>
          <template v-else>
            <div class="t-w-1/3">
              <div>
                <div v-for="message in msgs.value">
                  <div :class="message.id == selected.id ? 'bg-primary-500': 'surface-300'" class="relative surface-200 t-rounded-2xl shadow-6 mb-4 p-3 cursor-pointer" @click="selectMessage(message)">
                    <div class="flex t-h-20 align-items-center max-md:t-flex-col max-md:t-h-full">
                      <NuxtImg
                        format="webp"
                        class="h-full t-rounded-full"
                        :src="message.imgPath"
                        :alt="message.topic"
                        height="80"
                        width="80"
                      />
                      <div>
                        <p class="md:ml-3 md:text-xl font-bold">
                          {{ message.topic }}
                        </p>
                        <p class="ml-3 text-sm text-color-secondary max-md:t-hidden">
                          Notification
                        </p>
                        <Badge class="absolute right-0 t-top-5" value="" :severity="messageStore.getSeverity(message)" />
                      </div>
                    </div>
                    <div class="mt-3 t-line-clamp-1 overflow-hidden max-md:t-hidden">
                      {{ message.value }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!isEmptyMessages" class="t-w-2/3">
              <div class="t-h-[90vh] sticky t-top-5 surface-300 t-rounded-xl p-3">
                <div class="">
                  <p class="text-4xl font-semibold">
                    {{ selected.topic }}
                  </p>
                </div>
                <div class="t-mt-10">
                  <p>
                    {{ selected.value }}
                  </p>
                </div>
                <div class="absolute t-bottom-5 t-right-5">
                  <Button v-tooltip.left="'Delete notification'" aria-label="Delete notification" icon="pi pi-times-circle" type="null" @click="deleteMessage(selected)" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

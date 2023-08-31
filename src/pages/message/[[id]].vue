<script setup lang="ts">
import type { Message } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMessageStore } from '@/stores/messageStore';

const { params: { id } } = useRoute();

const messageStore = useMessageStore();
const { messages: { value: msgs } } = storeToRefs(messageStore);
const selected = id ? ref(msgs.value.find(msg => msg.id === +id)) : ref(msgs.value[0]);

function selectMessage (msg: Message) {
  selected.value = msg;
  if (msg.statusId !== 3) {
    msg.statusId = selected.value.statusId = 3;
    msgs.value.map(message => message.id == msg.id ? msg : message);
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
          <div class="t-w-1/3">
            <div>
              <div v-for="message in msgs.value">
                <div :class="message.id == selected.id ? 'bg-primary-500': 'surface-300'" class="relative surface-200 t-rounded-2xl shadow-6 mb-4 p-3 cursor-pointer" @click="selectMessage(message)">
                  <div class="flex t-h-20 align-items-center max-md:t-flex-col max-md:t-h-full">
                    <img class="h-full t-rounded-full" :src="message.imgPath" :alt="message.topic">
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
          <div class="t-w-2/3">
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
                <Button v-tooltip.left="'Delete notification'" icon="pi pi-times-circle" type="null" @click="deleteMessage(selected)" />
              </div>
            </div>
          </div>
        </div>
      </PaddingBox>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Message, MessageStatus } from '@prisma/client';
import { storeToRefs } from 'pinia';
import arg from 'arg';
import { useMessageStore } from '@/stores/messageStore';
import { useNotificationsStore } from '@/stores/notificationsStore';
import { useRouter } from '#imports';

const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore);
const logoSpin = ref(false);
const router = useRouter();
// todo add message on notification set all readed or smrthmng
const buttonItems = [
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: (e) => {
      update();
    }
  },
  {
    label: 'View all',
    icon: 'pi pi-inbox',
    command: () => {
      router.push('/message');
    }
  },
  {
    label: 'Delete all',
    icon: 'pi pi-times',
    command: async () => {
      await messageStore.removeMessage(messages.value.value);
    }
  }
];

const selectedMsg = ref({});

const messageActions = ref([
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: async () => {
      await messageStore.removeMessage([selectedMsg.value.value]);
    }
  },
  {
    label: 'Upload',
    icon: 'pi-eye pi',
    command: async () => {
      selectedMsg.value.value.statusId = 3;
      await messageStore.updateMessage([selectedMsg.value.value]);
    }
  },
  {
    label: 'Open in tab',
    icon: 'pi pi-external-link',
    command: () => {
      const selectedId = selectedMsg.value.value.id;
      router.push('/message/' + selectedId);
    }
  }
]);
function update () {
  logoSpin.value = true;
  messageStore.fetchMessages().then(() => {
    setTimeout(() => { logoSpin.value = false; }, 1000); // timeout cuz too fast
  });
}
</script>

<template>
  <div>
    <div class="msgs relative flex flex-column flex-wrap">
      <div class="flex t-flex-col t-min-w-full md:t-min-w-[20%] h-full">
        <p class="text-4xl">
          Your messages
        </p>
        <div class="inline-block ml-auto">
          <SplitButton
            outlined
            type="null"
            label="Update"
            d
            icon="pi pi-refresh"
            :model="buttonItems"
            @click="update"
          >
            <template #icon>
              <i v-if="logoSpin" class="pi pi-refresh mr-2 pi-spin" />
              <i v-else class="pi pi-refresh mr-2" />
            </template>
          </SplitButton>
        </div>
      </div>
      <div class="t-min-w-full md:t-mix-w-[80%] mt-3">
        <div v-if="messages.value.length === 0">
          <p class="text-xl text-center mt-3">
            You've got no messages yet!
          </p>
        </div>
        <DataView v-else :value="messages.value" class="t-max-w-full">
          <template #list="{data: slotProps}">
            <div class="col-12 relative">
              <div class="flex flex-row xl:align-items-start p-2 gap-4">
                <img class="max-md:t-h-1/2 w-3 sm:w-10rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="slotProps.imgPath" :alt="slotProps.name">
                <div class="flex flex-column sm:flex-row justify-content-between xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      {{ slotProps.topic }}
                    </div>
                    <!--          todo fix overlay hiding when pointing on speed dial-->

                    <SpeedDial
                      key="label"
                      button-class="p-button-outlined !t-w-[25px] !t-h-[25px]"
                      :model="messageActions"
                      direction="left"
                      type="semi-circle"
                      :style="{ position: 'absolute', display: 'flex'}"
                      :pt="{
                        root: {
                          class: ['t-right-0', 't-bottom-5'],
                        },
                        action: (...params) => ({
                          onmousedown: () => { selectedMsg.value = slotProps }
                        })
                      }"
                    >
                      <template #icon="icon">
                        <i v-if="icon.visible" class="pi z-5 pi-cog pi-spin" />
                        <i v-else class="pi z-5 pi-cog" />
                      </template>
                      <!--                      <template #item="item">-->
                      <!--                        <slot />-->
                      <!--                      </template>-->
                    </SpeedDial>
                    <div class="relative inline-block" />
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        <span class="t-line-clamp-1 overflow-hidden">{{ slotProps.value }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="absolute t-right-0">
                    <Tag clas="relative" :value="slotProps.Status.value" :severity="messageStore.getSeverity(slotProps)" />
                  </div>
                  <!--                  <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">-->
                  <!--                    <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>-->
                  <!--                  </div>-->
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
</template>

<style>

</style>

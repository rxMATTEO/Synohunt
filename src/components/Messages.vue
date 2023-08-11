<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Message, MessageStatus } from '@prisma/client';
import { storeToRefs } from 'pinia';
import { useMessageStore } from '../stores/messageStore';

const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore);
const buttonItems = [
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      console.log('aaa');
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
    }
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
    }
  },
  { label: 'Upload', icon: 'pi pi-upload' }
];

const messageActions = ref([
  {
    label: 'Add',
    icon: 'pi pi-pencil',
    command: () => {
      toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
    }
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {
      toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
    }
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      router.push('/fileupload');
    }
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    }
  }
]);

async function update () {
  await messageStore.fetchMessages();
}
</script>

<template>
  <div>
    <div class="msgs relative flex flex-column flex-wrap">
      <p class="absolute text-4xl">
        Your messages
      </p>
      <div class="t-min-w-full md:t-min-w-[20%] t-h-10">
        <div class="absolute t-right-0 t-top-0 inline-block">
          <SplitButton
            outlined
            type="null"
            label="Update"
            icon="pi pi-refresh"
            :model="buttonItems"
            @click="update"
          />
        </div>
      </div>
      <div class="t-min-w-full md:t-mix-w-[80%] mt-3">
        <!--        todo add status badge-->
        <DataView :value="messages.value" class="t-max-w-full">
          <template #list="slotProps: {data: Message & { Status: MessageStatus }}">
            <div class="col-12 relative">
              <div class="flex flex-row xl:align-items-start p-2 gap-4">
                <img class="w-3 sm:w-10rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src="/img/biglogo.png" :alt="slotProps.data.name">
                <div class="flex flex-column sm:flex-row justify-content-between xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      {{ slotProps.data.topic }}
                    </div>
                    <SpeedDial
                      button-class="p-button-outlined !t-w-[25px] !t-h-[25px]"
                      :model="messageActions"
                      direction="left"
                      type="semi-circle"
                      :style="{ position: 'absolute', display: 'flex'}"
                      :pt="{
                        root: {
                          class: ['t-right-0', 't-bottom-5'],
                        },
                      }"
                    >
                      <template #icon="icon">
                        <i v-if="icon.visible" class="pi z-5 pi-cog pi-spin" />
                        <i v-else class="pi z-5 pi-cog" />
                      </template>
                    </SpeedDial>
                    <div class="relative inline-block" />
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        <span class="">{{ slotProps.data.value }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="absolute t-right-0">
                    <Tag clas="relative" :value="slotProps.data.Status.value" :severity="messageStore.getSeverity(slotProps.data)" />
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

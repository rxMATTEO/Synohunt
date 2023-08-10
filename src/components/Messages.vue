<script setup lang="ts">
import { reactive } from 'vue';
import { Message } from '@prisma/client';
import { useMessageStore } from '../stores/messageStore';

const messageStore = useMessageStore();
const messages = reactive({ value: messageStore.messages.value });

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

function update () {

}
</script>

<template>
  <div>
    <div class="msgs relative">
      <div class="t-max-w-[80%]">
        <DataView :value="messages.value" class="t-max-w-full">
          <template #list="slotProps: {data: Message}">
            <div class="t-max-w-full">
              <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src="/img/biglogo.png" :alt="slotProps.data.name">
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      {{ slotProps.data.topic }}
                    </div>
                    <SpeedDial button-class="p-button-outlined" :model="messageActions" direction="left" :style="{ position: 'relative', top: '50%', right: 0 }" />
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        <i class="pi pi-tag" />
                        <span class="font-semibold">{{ slotProps.data.value }}</span>
                      </span>
                      <Tag :value="slotProps.data.inventoryStatus" />
                    </div>
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
      <div class="t-min-w-[20%]">
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
    </div>
  </div>
</template>

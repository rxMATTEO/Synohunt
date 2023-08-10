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

function update () {

}
</script>

<template>
  <div>
    <div class="msgs relative">
      <div class="t-w-1/5">
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
      <div class="t-w-5/6">
        <DataView :value="messages.value">
          <template #list="slotProps: {data: Message}">
            <div class="col-12">
              <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                    <div class="text-2xl font-bold text-900">
                      {{ slotProps.data.topic }}
                    </div>
                    <Rating :model-value="slotProps.data.rating" readonly :cancel="false" />
                    <div class="flex align-items-center gap-3">
                      <span class="flex align-items-center gap-2">
                        <i class="pi pi-tag" />
                        <span class="font-semibold">{{ slotProps.data.value }}</span>
                      </span>
                      <Tag :value="slotProps.data.inventoryStatus" />
                    </div>
                  </div>
                  <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                    <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                    <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
</template>

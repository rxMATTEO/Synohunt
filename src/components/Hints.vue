<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useConfirm } from 'primevue/useconfirm/useconfirm.esm';
import type { Synonym } from '@prisma/client';
import { useNotificationsStore } from '@/stores/notificationsStore';
import { useMoneyStore } from '@/stores/moneyStore';
import type { TaskResponse } from '@/pages/play/[taskId].vue';

const notificationsStore = useNotificationsStore();
const moneyStore = useMoneyStore();
const hidden = ref(false);
function hideHintsPanel () {
  hidden.value = true;
}
const confirmPurchaseDialog = useConfirm();
function showHintsPanel (e: MouseEvent) {
  hidden.value = false;
}

type Hint = {
  label: string;
  icon: string;
  cost: number;
  effect: (task: TaskResponse) => unknown
};
function onHintClick (hint: Hint) {
  confirmPurchaseDialog.require({
    group: 'buyHintDialog',
    message: {
      value: `You will able to ${hint.label}`,
      cost: hint.cost
    },
    header: 'Purchase confirmation',
    position: 'bottom',
    accept: async () => {
      const setMoneyResult = await moneyStore.setMoney(-hint.cost);
      if (setMoneyResult) {
        notificationsStore.addNotification({
          title: 'Hi',
          description: `You bought this hint for ${hint.cost}`
        });
        emit('select', hint);
      } else {
        notificationsStore.addNotification({
          title: 'Denied',
          description: 'You have not that much coins'
        });
      }
      return setMoneyResult;
    },
    reject: () => {}
  });
}
const emit = defineEmits(['select']);
defineProps<{
  items: []
}>();
</script>

<template>
  <Dialog
    :visible="true"
    header="Hints"
    position="bottom"
    class="overflow-hidden"
    :class="{ '!t-mb-[-140px]': hidden }"
    :pt="{
      root: {
        class: [hidden? 't-bottom-[-140px] !t-top-[unset]' : '', 'absolute', 'overflow-hidden', 'max-md:t-w-full','t-rounded-xl']
      },
      closeButton: {
        'onclick': hideHintsPanel
      }
    }"
    @dragend="showHintsPanel"
  >
    <template #closeicon>
      <i class="pi pi-times" @click="hideHintsPanel" />
    </template>
    <div>
      <div class="card dock-demo">
        <div
          class="dock-window w-full"
        >
          <Dock
            :model="items"
            position="bottom"
            class="relative"
            :pt="{
              container: {
                class: ['surface-ground'],
              },
            }"
          >
            <template #item="data: { item: Hint }">
              <a href="#" class="p-dock-link" @click="onHintClick(data.item)">
                <img
                  v-tooltip.top="`Cost is ${data.item.cost} coins.\nYou will able to ${data.item.label.toLowerCase()}.`"
                  :alt="data.item.label"
                  :src="data.item.icon"
                  style="width: 100%"
                >
              </a>
            </template>
          </Dock>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<style scoped lang="sass"></style>

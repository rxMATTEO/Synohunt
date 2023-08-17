<script setup lang="ts">
import { ref } from 'vue';
import { useConfirm } from 'primevue/useconfirm/useconfirm.esm';
import { useNotificationsStore } from '@/stores/notificationsStore';
import { useMoneyStore } from '@/stores/moneyStore';

const notificationsStore = useNotificationsStore();
const moneyStore = useMoneyStore();
const hidden = ref(false);
function hideHintsPanel () {
  hidden.value = true;
}
const confirmPurchaseDialog = useConfirm();

const x = ref(0);
const y = ref(0);

onActivated(() => {
  console.log(x, y);
});
function showHintsPanel (e: MouseEvent) {
  hidden.value = false;
  x.value = e.x;
  y.value = e.y;
  console.log(x, y);
}

type Hint = { label: string; icon: string; cost: number };
function onHintClick (hint: Hint) {
  confirmPurchaseDialog.require({
    group: 'buyHintDialog',
    message: hint.cost,
    header: 'Purchase confirmation',
    position: 'bottom',
    accept: () => {
      moneyStore.setMoney(-hint.cost);
      notificationsStore.addNotification({
        title: 'Hi',
        secondaryText: 'Hooray',
        description: `You buyed this shit for ${hint.cost}`
      });
    },
    reject: () => {} // todo fixed sidebar remember sidebar state, hide when navigate store create mb
  });
}
const items = ref<Hint[]>([
  {
    label: 'Complete',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg',
    cost: 5
  },
  {
    label: 'App Store',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
    cost: 5
  },
  {
    label: 'Photos',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg',
    cost: 5
  },
  {
    label: 'Trash',
    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png',
    cost: 5
  }
]);
</script>

<template>
  <keep-alive>
    <Dialog
      :visible="true"
      header="Hints"
      position="bottom"
      class="overflow-hidden"
      :class="{ '!t-mb-[-140px]': hidden }"
      :pt="{
        root: {
          class: [hidden? 't-bottom-[-140px] !t-top-[unset]' : '', 'absolute', 'overflow-hidden', 't-rounded-xl']
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
              :class="`t-left-[${x}] right-[${y}] relative`"
              :pt="{
                container: {
                  class: ['surface-ground'],
                },
              }"
            >
              <template #item="data: { item: Hint }">
                <a href="#" class="p-dock-link" @click="onHintClick(data.item)">
                  <img
                    v-tooltip.top="`Cost is ${data.item.cost}`"
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
  </keep-alive>
</template>

<style scoped lang="sass"></style>

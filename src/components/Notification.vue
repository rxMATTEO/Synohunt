<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ToastMessageOptions } from 'primevue/toast';
import { useNotificationsStore } from '@/stores/notificationsStore';
const toast = useToast();
type NotificationType = 'notification' | 'message'
// todo messages add mb
type NotificationAction = {
  onAccept: () => unknown,
  onReject: () => unknown,
}
export type NotificationProps = {
  id: string | number
  title: string,
  description: string,
  image: string
  notificationType?: NotificationType,
  actions: NotificationAction
}
// todo add theme change on like ALL page built
// withDefaults(defineProps<NotificationProps>(), {
//   icon: 'pi pi-bell',
//   closeIcon: 'pi pi-check',
//   image: '/img/placeholder.png',
//   notificationType: 'notification'
// });

const notification = ref<{ [k: string]: NotificationProps }>({});

const notificationsStore = useNotificationsStore();
const unsubscribe = notificationsStore.$onAction(({ name, args }: { name: string, args: [NotificationProps] }) => {
  if (name === 'addNotification') {
    const dispatched: NotificationProps = args[0];
    toast.add({ life: 5000, detail: 'a', summary: 'b', content: dispatched });
    notification.value[dispatched.image] = dispatched;
  }
});

const hiddenIds = ref({});

// todo delete toasts from object and do some id idk and types PLS
</script>

<template>
  <Toast
    position="top-right"
    class="t-z-[9999] fixed max-md:!t-w-full max-md:!t-right-0"
    :pt="{
      container: {
        class: ['!t-rounded-2xl', 'gradient-primary', '!t-border-0', 'text-white'],
      },
      content: {
        class: ['p-0']
      },
      buttonContainer: {
        class: ['absolute', 't-right-1']
      }
    }"
  >
    <template #message="{message: {content}}">
      <div
        class="relative left-0 right-0 w-full p-2"
        :class="{
          'hidden': hiddenIds[id]
        }"
      >
        <div class="absolute t-top-0 t-left-0 t-right-0 t-bottom-[80%] t-background-blur-sm t-bg-white t-bg-opacity-20 t-rounded-t-2xl" />
        <div class="w-full">
          <div class="t-h-[20%]">
            <div class="">
              <div class="relative t-right-0 flex text- t-place-content-end align-items-center">
                <p class="mr-3 text-gray-700">
                  <!--                  {{ notification[notif.image].notificationType }}-->
                </p>
              </div>
            </div>
          </div>

          <div class="t-h-[70%] t-mt-[5%] flex">
            <div class="t-max-w-[33%]">
              <div class="h-full flex">
                <img :src="notification[content.image].image" alt="logo" class="block t-w-[100px] t-h-[100px] t-rounded-full t-my-auto">
              </div>
            </div>
            <div class="t-w-2/3 pl-3 pt-2">
              <div>
                <p class="font-bold text-2xl">
                  <span class="vertical-align-bottom line-height-1 t-text-black">{{ notification[content.image].title }}</span>
                </p>
                <p class="text- my-2 text-gray-800">
                  {{ notification[content.image].description }}
                </p>
                <div class="flex gap-3 t-place-content-between">
                  <Button
                    size="small"
                    type="null"
                    class="p-0 t-w-1/2 t-rounded-lg text-white"
                    severity="info"
                    label="Accept"
                    :pt="{
                      root: {
                        class: ['p-0']
                      }
                    }"
                    @click="notification[content.image].actions.onAccept(hiddenIds, id)"
                  />
                  <Button
                    size="small"
                    type="null"
                    class="t-w-1/2 t-rounded-lg t-text-black bg-white t-border-0"
                    label="Reject"
                    @click="() => notification[content.image].actions.onReject(hiddenIds, id)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template>
      <div v-if="hiddenIds[id]" class="relative t-right-0 t-top-0">
        <i class="pi pi-times" />
      </div>
    </template>
  </Toast>
</template>

<style scoped>

</style>

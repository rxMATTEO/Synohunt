<script setup lang="ts">
type NotificationType = 'notification' | 'message'

type NotificationProps = {
  title: string,
  description: string,
  icon?: string,
  closeIcon?: string,
  image?: string
  notificationType?: NotificationType,
  secondaryText: string
}
withDefaults(defineProps<NotificationProps>(), {
  icon: 'pi pi-bell',
  closeIcon: 'pi pi-check',
  image: '/img/placeholder.png',
  notificationType: 'notification'
});
</script>

<template>
  <Toast
    position="top-right"
    class="t-z-[9999] fixed !t-w-full !t-right-0"
    :pt="{
      container: {
        class: ['!t-rounded-2xl', 'gradient-primary', '!t-border-0', 'text-white'],
      }
    }"
  >
    <template #message="props">
      <div class="absolute t-top-0 t-left-0 t-right-0 t-bottom-[80%] t-background-blur-sm t-bg-white t-bg-opacity-20 t-rounded-t-2xl" />
      <div class="w-full">
        <div class="t-h-[25%]">
          <div class="">
            <div class="relative t-right-0 flex text- t-place-content-end align-items-center">
              <p class="mr-3 text-gray-700">
                {{ notificationType }}
              </p>
              <i :class="icon" />
            </div>
          </div>
        </div>

        <div class="t-h-[75%] mt-3 flex">
          <div class="t-max-w-[33%]">
            <div class="h-full flex">
              <img :src="image" alt="logo" class="block t-w-[100px] t-h-[100px] t-rounded-full t-my-auto">
            </div>
          </div>
          <div class="t-w-2/3 pl-3 pt-2">
            <div>
              <p class="font-bold text-3xl">
                <span class="vertical-align-bottom line-height-1 t-text-black">{{ title }}</span>
              </p>
              <p class="text-sm font-semibold text-red-500 mt-2">
                {{ secondaryText }}
              </p>
              <p class="text-lg my-2 text-gray-800">
                {{ description }}
              </p>
              <div class="flex gap-3 t-place-content-between">
                <Button type="null" class="t-w-1/2 t-rounded-lg text-white" severity="info" label="Accept" />
                <Button type="null" class="t-w-1/2 t-rounded-lg t-text-black bg-white t-border-0" label="Reject" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #closeicon="icon">
      <i :class="closeIcon" />
    </template>
  </Toast>
</template>

<style scoped>

</style>

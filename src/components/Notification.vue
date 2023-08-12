<script setup lang="ts">
import { defineProps } from 'vue';

type NotificationProps = {
  title: string,
  description: string,
  icon?: string,
  closeIcon?: string
}
withDefaults(defineProps<NotificationProps>(), {
  icon: 'pi pi-bell',
  closeIcon: 'pi pi-check'
});
</script>

<template>
  <Toast
    position="top-right"
    class="t-z-[9999] absolute"
    :pt="{
      container: {
        class: ['!t-rounded-2xl', 'gradient-primary', '!t-border-0', 'text-white'],
      }
    }"
  >
    <template #message="props">
      <div class="absolute t-top-0 t-left-0 t-right-0 t-bottom-[75%] t-background-blur-sm t-bg-white t-bg-opacity-20" />
      <div class="w-full">
        <div class="t-h-[25%]">
          <div class="">
            <div class="relative t-right-0 flex text- t-place-content-end align-items-center">
              <p class="mr-3">
                {{ title }}
              </p>
              <i :class="icon" />
            </div>
          </div>
        </div>

        <div class="t-h-[75%] mt-3">
          <div class="t-max-w-[33%]">
            <img src="/img/placeholder.png" alt="logo" class="block t-w-[100px] t-h-[100px] t-rounded-full">
          </div>
          <div class="t-w-2/3" />
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

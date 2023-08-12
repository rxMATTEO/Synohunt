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
    class="t-z-[9999] absolute"
    :pt="{
      container: {
        class: ['!t-rounded-2xl', 'gradient-primary', '!t-border-0', 'text-white'],
      }
    }"
  >
    <template #message="props">
      <div class="w-full">
        <div class="t-h-1/6">
          <div class="">
            <div class="relative t-right-0 flex text- t-place-content-end align-items-center">
              <p class="mr-3">
                {{ title }}
              </p>
              <i :class="icon" />
            </div>
          </div>
        </div>
        <div class="t-h-5/6">
          {{ description }}
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

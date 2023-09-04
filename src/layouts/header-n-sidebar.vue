<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSidebarStore } from '@/stores/sidebarStore';
import { useAppConfig } from '#imports';
import { Platforms } from '@/app.config';

const sidebarStore = useSidebarStore();
const { isExpanded } = storeToRefs(sidebarStore);
function onNavigate () {
  sidebarStore.hideMenuMobile();
}
</script>

<template>
  <div class="flex">
    <LazyNotification />
    <LazySidebar :is-expanded="isExpanded" :toggle="sidebarStore.toggleMenu" @navigate="onNavigate" />
    <div class="w-full flex-1">
      <div class="t-ml-0 h-4rem">
        <header>
          <LazyHeader :expanded="sidebarStore.toggleMenu" />
        </header>
      </div>
      <div class="max-w-full relative">
        <NuxtLayout name="footer">
          <slot />
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>

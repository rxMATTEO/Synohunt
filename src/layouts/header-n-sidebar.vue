<script setup lang="ts">
import { onMounted } from 'vue';
import { useSidebarStore } from '@/stores/sidebarStore';
import { useAppConfig } from '#imports';
import { Platforms } from '@/app.config';

const { toggleMenu, setMenuVisibility, isExpanded: expanded } = useSidebarStore();

function hideMenuMobile () {
  const { platform } = useAppConfig();
  if (platform === Platforms.pc) {
    setMenuVisibility(true);
  } else {
    setMenuVisibility(false);
  }
}

onMounted(() => {
  hideMenuMobile();
});

function onNavigate () {
  hideMenuMobile();
}
</script>

<template>
  <div class="flex">
    <LazyNotification />
    <LazySidebar :is-expanded="expanded" :toggle="toggleMenu" @navigate="onNavigate" />
    <div class="w-full flex-1">
      <div class="t-ml-0 h-4rem">
        <LazyHeader :expanded="toggleMenu" />
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

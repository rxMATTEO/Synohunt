<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Platforms } from './app.config.ts';
import { useThemeStore } from '@/stores/themeStore.ts';
import { usePlatformStore } from '@/stores/platformStore.ts';
import { useSidebarStore } from '@/stores/sidebarStore.ts';

const themeStore = useThemeStore();
themeStore.applyFromCookie();

useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - Synohunt` : 'Synohunt';
  }
});

onMounted(() => {
  const platformStore = usePlatformStore();
  const { platform } = storeToRefs(platformStore);
  if (platform.value === 'unknown') {
    const sidebarStore = useSidebarStore();
    if (window.document.documentElement.offsetWidth >= 768) {
      platformStore.setCurrentPlatform(Platforms.pc);
      sidebarStore.toggleMenu();
    } else {
      platformStore.setCurrentPlatform(Platforms.mobile);
    }
  }
});
</script>

<style lang="sass">
*
  box-sizing: border-box
  margin-block-start: 0
  margin-block-end: 0
  margin-inline-start: 0
  margin-inline-end: 0
  text-decoration: none

html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, ul, li
  margin: 0
  padding: 0
  border: 0
  font-size: 100%
  vertical-align: baseline

html, body
  scroll-behavior: smooth

</style>

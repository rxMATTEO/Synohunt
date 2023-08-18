<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Platforms } from './app.config.ts';
import { useAppConfig } from '#imports';
import { useThemeStore } from '@/stores/themeStore';

const appConfig = useAppConfig();
onMounted(async () => {
  if (window.document.documentElement.offsetWidth >= 768) {
    appConfig.platform = Platforms.pc;
  } else {
    appConfig.platform = Platforms.mobile;
  }
  const { setCurrentTheme, getCurrentTheme } = useThemeStore();

  setTimeout(() => {
    if (getCurrentTheme() === 'light') {
      setCurrentTheme('dark', 'light');
    }
  }, 0); // TODO idk pls fix
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

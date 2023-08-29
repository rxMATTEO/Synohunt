<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Platforms } from './app.config.ts';
import { useAppConfig } from '#imports';
import { useThemeStore } from '@/stores/themeStore';

useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - Synohunt` : 'Synohunt';
  }

});

const { themeId, themeCookieKey } = useAppConfig();
const cookieTheme = useCookie(themeCookieKey);
const appConfig = useAppConfig();
useHead({
  link: [
    {
      id: themeId,
      rel: 'stylesheet',
      href: `/themes/${cookieTheme.value}/theme.css`
    }
  ]
});

const { setCurrentTheme, getCurrentTheme } = useThemeStore();
if (process.client) {
  const currentTheme = getCurrentTheme();
  // setTimeout(() => {
  // setCurrentTheme('bootstrap4-dark-purple', currentTheme);
  // }, 300);
}
onMounted(() => {
  if (window.document.documentElement.offsetWidth >= 768) {
    appConfig.platform = Platforms.pc;
  } else {
    appConfig.platform = Platforms.mobile;
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

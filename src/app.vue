<template>
  <NuxtPage  onload="load()"/>
</template>

<script setup lang="ts">
import {onBeforeMount, onMounted, reactive} from 'vue';
import {Platforms, Theme, ThemesNames} from './app.config.ts';
import {useAppConfig, useRuntimeConfig} from 'nuxt/app';
import {usePrimeVue} from 'primevue/config';
const appConfig = useAppConfig();
const primeVue = usePrimeVue();
onMounted(() => {
  if(window.document.documentElement.offsetWidth >= 768) {
    appConfig.platform = Platforms.pc;
  } else {
    appConfig.platform = Platforms.mobile;
  }

  setTimeout(() => {
    const {public: {themeId}}: string = useRuntimeConfig();
    primeVue.changeTheme('dark','light',themeId);
  }, 0);

  // const light = ThemesNames.light;
  // const dark = ThemesNames.dark;
  // const [currentTheme1, newTheme] = currentTheme === 'dark' ? [dark, light] : [light, dark];
  // console.log(currentTheme1, newTheme);
  // setCurrentTheme(currentTheme1, newTheme);

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
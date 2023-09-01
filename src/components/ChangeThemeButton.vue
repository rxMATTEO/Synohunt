<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { ThemesNames } from '@/app.config';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
let { currentTheme } = storeToRefs(useThemeStore());
function changeTheme () {
  currentTheme = themeStore.getCurrentTheme();
  const newTheme = currentTheme.includes('dark')
    ? ThemesNames.light
    : ThemesNames.dark;
  themeStore.setCurrentTheme(newTheme);
}
</script>

<template>
  <Button
    aria-label="Change theme"
    unstyled
    class="flex justify-center align-items-center"
    @click="changeTheme"
  >
    <i class="pi pi-moon text-xl cursor-pointer t-fill-black" />
    <!--    <i v-else-if="theme.theme.light" class="pi pi-moon text-xl cursor-pointer t-fill-black" />-->
  </Button>
</template>

<style scoped lang="sass"></style>

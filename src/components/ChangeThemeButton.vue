<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Theme, ThemesNames } from '@/app.config';
import { useThemeStore } from '@/stores/themeStore';
const theme: {theme: Theme} = reactive({ theme: { dark: true } });

const { getCurrentTheme, setCurrentTheme, currentTheme } = useThemeStore();
onMounted(() => {
  getCurrentTheme();
  theme.theme = currentTheme;
});
function changeTheme () {
  const light = ThemesNames.light;
  const dark = ThemesNames.dark;
  const [currentTheme, newTheme] = theme.theme.dark ? [dark, light] : [light, dark];
  setCurrentTheme(currentTheme, newTheme);
}
</script>

<template>
  <Button unstyled class="ml-5" @click="changeTheme">
    <i v-if="theme.theme.dark" class="pi pi-moon text-xl cursor-pointer t-fill-black" />
    <i v-else-if="theme.theme.light" class="pi pi-moon text-xl cursor-pointer t-fill-black" />
  </Button>
</template>

<style scoped lang="sass">

</style>

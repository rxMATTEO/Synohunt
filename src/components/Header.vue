<script setup lang="ts">
import {onMounted, reactive} from 'vue';
import {Theme, ThemesNames} from '@/app.config';
import {useThemeStore} from '@/stores/themeStore';
import {useSidebarStore} from '@/stores/sidebarStore';

const {isExpanded} = useSidebarStore();
defineProps({
  expanded: Function,
});
const { getCurrentTheme, setCurrentTheme, currentTheme } = useThemeStore();
let theme: {theme: Theme} = reactive({theme: {dark: true}});
onMounted(() => {
  getCurrentTheme();
  theme.theme = currentTheme;
});

function changeTheme(){
  const light = ThemesNames.light;
  const dark = ThemesNames.dark;
  const [currentTheme, newTheme] = theme.theme.dark ? [dark, light] : [light, dark];
  setCurrentTheme(currentTheme, newTheme);
}

</script>

<template>
  <div :class="{'!t-left-56': isExpanded.value}" class="t-z-10 px-2 max-md:!t-left-0 left-0 t-transition-all t-ease-in-out t-duration-200 fixed surface-card shadow-8 right-0 header">
    <div class="flex align-items-center justify-content-between w-full py-2">
      <div>
        <Button @click="expanded" unstyled>
          <i class="pi pi-align-justify text-2xl vertical-align-middle"></i>
        </Button>
      </div>
      <div class="t-h-[20px]">
        <Button unstyled @click="changeTheme">
          <i v-if="theme.theme.dark" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
          <i v-else-if="theme.theme.light" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
</style>
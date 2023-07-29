<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';
import {useAppConfig, useRuntimeConfig} from 'nuxt/app';
import {onMounted, reactive} from 'vue';
import type {Theme} from '@/app.config';
import {usePrimeVue} from 'primevue/config';
import {Themes} from '@/app.config';

const {isExpanded} = useSidebarStore();
defineProps({
  expanded: Function,
});

const appConfig = useAppConfig();
const {public: {themeId}}: string = useRuntimeConfig();
const primeVue = usePrimeVue();
let theme: Theme = reactive(appConfig.theme);

function setPrimeTheme(currentTheme, newTheme){
  return primeVue.changeTheme(currentTheme, newTheme, themeId);
}

function changeTheme(){
  if(theme.dark) {
    setPrimeTheme(Themes.dark, Themes.light);
    appConfig.theme.dark = false;
    appConfig.theme.light = true;
  }
  else if(theme.light) {
    setPrimeTheme(Themes.light, Themes.dark);
    appConfig.theme.dark = true;
    appConfig.theme.light = false;
  }
}

</script>

<template>
  <div :class="{'!t-left-56': isExpanded.value}" class="max-md:!t-left-0 left-0 t-transition-all t-ease-in-out t-duration-200 fixed surface-card shadow-8 right-0 header">
    <div class="flex align-items-center justify-content-between w-full py-2">
      <div>
        <Button @click="expanded" unstyled>
          <i class="pi pi-align-justify text-2xl vertical-align-middle"></i>
        </Button>
      </div>
      <div class="t-h-[20px]">
        <Button unstyled @click="changeTheme">
          <i v-if="theme.dark" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
          <i v-else-if="theme.light" class="pi pi-moon text-2xl cursor-pointer t-fill-black"></i>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
</style>
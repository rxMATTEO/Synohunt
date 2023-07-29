<script setup lang="ts">
import {useSidebarStore} from '@/stores/sidebarStore';
import {useAppConfig} from 'nuxt/app';
import {onMounted, reactive} from 'vue';
import type {Theme} from './app.config';
import {usePrimeVue} from 'primevue/config';

const {isExpanded} = useSidebarStore();
defineProps({
  expanded: Function,
});

const appConfig = useAppConfig();
const primeVue = usePrimeVue();
let theme: Theme = reactive({value: 'dark'});
onMounted(() => {
  theme = appConfig.theme;
});

function changeTheme(){
  primeVue.changeTheme('bootstrap4-dark-purple', 'bootstrap4-light-purple', 'theme-link');
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
          <i v-if="theme.value == 'dark'" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
</style>
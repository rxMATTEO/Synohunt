<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import {Theme, ThemesNames} from '@/app.config';
import {useThemeStore} from '@/stores/themeStore';
import {useSidebarStore} from '@/stores/sidebarStore';

const {isExpanded} = useSidebarStore();
defineProps({
  expanded: Function,
});
const { getCurrentTheme, setCurrentTheme, currentTheme } = useThemeStore();
let theme: {theme: Theme} = reactive({theme: {dark: true}});
const op = ref();
const toggle = (e) => op.value.toggle(e);
onMounted(() => {
  getCurrentTheme();
  theme.theme = currentTheme;
});

function onMailMouseOver(e){
  toggle(e);
}

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
      <div class="t-h-[20px] flex t-items-center">
        <div class="mr-3" @mouseover="onMailMouseOver" @mouseleave="onMailMouseOver">
          <i v-badge.danger class="pi pi-envelope p-text-secondary"></i>
        </div>
        <OverlayPanel ref="op">
          <p>Тут типа сообщения</p>
        </OverlayPanel>
        <div>
          <Avatar v-badge.success="4" icon="pi pi-user" class="mr-3" size="small"></Avatar>
        </div>
        <div class="badges">
          <Badge :value="2" class="mr-2"></Badge>
          <Badge :value="8" severity="success" class="mr-2"></Badge>
          <Badge :value="4" severity="info" class="mr-2"></Badge>
          <Badge :value="12" severity="warning" class="mr-2"></Badge>
          <Badge :value="3" severity="danger"></Badge>
        </div>
        <Button unstyled @click="changeTheme" class="ml-5 t-h-[20px]">
          <i v-if="theme.theme.dark" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
          <i v-else-if="theme.theme.light" class="pi pi-moon text-xl cursor-pointer t-fill-black"></i>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
</style>
<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';
import {Theme, ThemesNames} from '@/app.config';
import {useThemeStore} from '@/stores/themeStore';
import {useSidebarStore} from '@/stores/sidebarStore';

const {isExpanded} = useSidebarStore();
const props = defineProps({
  expanded: Function,
});
const { getCurrentTheme, setCurrentTheme, currentTheme } = useThemeStore();
let theme: {theme: Theme} = reactive({theme: {dark: true}});
const overlaysNames = ['messagesOp', 'profileOp', 'levelOp'];
const overlays = overlaysNames.reduce((obj, name) => {obj[name] = ref(); return obj;}, {});
const toggle = (e) => overlays.messagesOp.value.toggle(e);
onMounted(() => {
  getCurrentTheme();
  theme.theme = currentTheme;
});

function onMouseOver(e, overlayName){
  overlays[overlayName].value.show(e);
}

function onMouseLeave(e, overlayName){
  // overlays[overlayName].value.hide(e);
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
        <div class="mr-3" @mouseover="(e) => onMouseOver(e, 'messagesOp')" @mouseleave="(e) => onMouseLeave(e, 'messagesOp')">
          <i v-badge.danger class="pi pi-envelope p-text-secondary"></i>
        </div>
        <OverlayPanel :ref="overlays.messagesOp">
          <p>Тут типа сообщения</p>
        </OverlayPanel>
        <div>
          <Avatar v-badge.success="4" icon="pi pi-user" class="mr-3" size="small" @mouseover="(e) => onMouseOver(e, 'profileOp')" @mouseleave="(e) => onMouseLeave(e, 'profileOp')"></Avatar>
          <OverlayPanel :ref="overlays.profileOp" class="!t-p-0">
            <div>
              <div class="link flex t-items-center">
                <i class="pi pi-user p-text-secondary"></i>
                <a href="#" class="t-pl-1">View Profile</a>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <i class="pi p-text-secondary pi-cog"></i>
                <a href="#" class="t-pl-1">Account Settings</a>
              </div>
              <div class="link flex t-items-center pt-3">
                <i class="pi p-text-secondary pi-file-edit"></i>
                <a href="#" class="t-pl-1">My tasks</a>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <i class="pi p-text-secondary pi-comments"></i>
                <a href="#" class="t-pl-1">Commented tasks</a>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <i class="pi p-text-secondary pi-check-circle"></i>
                <a href="#" class="t-pl-1">Completed tasks</a>
              </div>
              <div class="link flex t-items-center pt-3">
                <i class="pi p-text-secondary pi-bookmark"></i>
                <a href="#" class="t-pl-1">Bookmarked tasks</a>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <i class="pi p-text-secondary pi-power-off"></i>
                <a href="#" class="t-pl-1">Sign out</a>
              </div>
            </div>
          </OverlayPanel>
        </div>
        <div class="badges">
          <div>
            <Badge :value="2" class="mr-2"></Badge>
            <OverlayPanel :ref="overlays.levelOp"  />
          </div>
<!--          <Badge :value="8" severity="success" class="mr-2"></Badge>-->
<!--          <Badge :value="4" severity="info" class="mr-2"></Badge>-->
<!--          <Badge :value="12" severity="warning" class="mr-2"></Badge>-->
<!--          <Badge :value="3" severity="danger"></Badge>-->
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
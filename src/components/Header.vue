<script setup lang="ts">
import { onMounted, reactive, Ref, ref } from 'vue';
import OverlayPanel from 'primevue/overlaypanel';
import { useAuth } from '#imports';
import { Theme, ThemesNames } from '@/app.config';
import { useThemeStore } from '@/stores/themeStore';
import { useSidebarStore } from '@/stores/sidebarStore';

const { isExpanded } = useSidebarStore();
defineProps({
  expanded: Function
});
const { getCurrentTheme, setCurrentTheme, currentTheme } = useThemeStore();
const selected = ref({} as OverlayPanel);
const theme: {theme: Theme} = reactive({ theme: { dark: true } });
const { data: { value: { user: { account } } }, signOut } = useAuth();
const overlaysNames = ['messagesOp', 'profileOp', 'levelOp'] as const;
type OverlaysNames = typeof overlaysNames[number]
type Overlay = {
  [k in OverlaysNames]: Ref<OverlayPanel>
}
const overlays: Overlay = overlaysNames.reduce((obj, name) => {
  obj[name] = ref()!<OverlayPanel>;
  return obj;
}, {} as Overlay);

onMounted(() => {
  getCurrentTheme();
  theme.theme = currentTheme;
});

function onMouseOver (e: MouseEvent, overlayName: OverlaysNames) {
  selected.value.hide?.();
  const overlay = overlays[overlayName].value;
  overlay.show(e);
  selected.value = overlay;
}

function onMouseLeave (overlayName: OverlaysNames, e?: MouseEvent) {
  return false;
  if (e && e.relatedTarget) {
    if ((e.relatedTarget<Element>)!.className === 'p-tieredmenu p-component p-tieredmenu-overlay') {
      e.relatedTarget.addEventListener('mouseleave', () => onMouseLeave(overlayName));
      return false;
    }
  }
  overlays[overlayName].value.hide();
}
async function signOutMe () {
  await signOut();
}

function changeTheme () {
  const light = ThemesNames.light;
  const dark = ThemesNames.dark;
  const [currentTheme, newTheme] = theme.theme.dark ? [dark, light] : [light, dark];
  setCurrentTheme(currentTheme, newTheme);
}
// TODO pokazivatj coins vmesto random badge
</script>

<template>
  <div :class="{'!t-left-56': isExpanded.value}" class="t-z-10 px-2 max-md:!t-left-0 left-0 t-transition-all t-ease-in-out t-duration-200 fixed surface-card shadow-8 right-0 header">
    <div class="flex align-items-center justify-content-between w-full py-2">
      <div>
        <Button unstyled @click="expanded">
          <i class="pi pi-align-justify text-2xl vertical-align-middle" />
        </Button>
      </div>
      <div class="t-h-[20px] flex t-items-center">
        <div class="mr-3" @mouseover="(e: MouseEvent) => onMouseOver(e, 'messagesOp')">
          <i v-badge.danger class="pi pi-envelope p-text-secondary" />
          <OverlayPanel :ref="overlays.messagesOp" class="md:t-w-1/2 !t-top-10 max-md:!t-left-0" dismissable @mouseleave="(e) => onMouseLeave('messagesOp', e)">
            <Messages />
          </OverlayPanel>
        </div>
        <div>
          <Avatar
            v-badge.success="4"
            shape="circle"
            :image="account.image"
            class="mr-3 "
            size="small"
            :pt="{
              image: {
                class: 't-w-[10px] t-h-[10px]'
              }
            }"
            @mouseover="(e) => onMouseOver(e, 'profileOp')"
          />
          <OverlayPanel :ref="overlays.profileOp" dismissable class="!t-p-0" @mouseleave="() => onMouseLeave('profileOp')">
            <div>
              <div class="link flex t-items-center">
                <NuxtLink to="/profile">
                  <Button icon="p-text-secondary pi pi-user mr-1" unstyled class="t-pl-1 " label="View Profile" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-cog mr-1" unstyled class="t-pl-1 " label="Account Settings" />
                </NuxtLink>
              </div>
              <div class="link flex t-items-center pt-3">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-file-edit mr-1" unstyled class="t-pl-1 " label="My tasks" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-comments mr-1" unstyled class="t-pl-1 " label="Commented tasks" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/profile/completed">
                  <Button icon="pi p-text-secondary pi-check-circle mr-1" label="Completed tasks" unstyled />
                </NuxtLink>
              </div>
              <div class="link flex t-items-center">
                <NuxtLink to="/profile/bookmarks">
                  <Button icon="p-text-secondary pi pi-bookmark mr-1" unstyled class="link flex t-items-center pt-3" label="Bookmarked tasks" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="p-text-secondary pi pi-power-off mr-1" unstyled class="t-pl-1 " label="Sign out" @click="signOutMe()" />
                </NuxtLink>
              </div>
            </div>
          </OverlayPanel>
        </div>
        <div class="badges">
          <UserLevel :on-mouse-leave="onMouseLeave" :on-mouse-over="onMouseOver" :overlays="overlays" />
        </div>
        <Button unstyled class="ml-5" @click="changeTheme">
          <i v-if="theme.theme.dark" class="pi pi-moon text-xl cursor-pointer t-fill-black" />
          <i v-else-if="theme.theme.light" class="pi pi-moon text-xl cursor-pointer t-fill-black" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
</style>

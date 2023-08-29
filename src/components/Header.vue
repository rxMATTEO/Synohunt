<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import OverlayPanel from 'primevue/overlaypanel';
import { storeToRefs } from 'pinia';
import StickyElement from 'vue-sticky-element';
import { useMoneyStore } from '../stores/moneyStore';
import { useMessageStore } from '../stores/messageStore';
import { useAuth } from '#imports';
import { Theme, ThemesNames } from '@/app.config';
import { useThemeStore } from '@/stores/themeStore';
import { useSidebarStore } from '@/stores/sidebarStore';
import ChangeThemeButton from '@/components/ChangeThemeButton.vue';

const { isExpanded } = useSidebarStore();
defineProps({
  expanded: Function
});

// todo add listener to app:template complete into nuxt config so we can add sceletons everywhere mb set runtime config from hook

// defineNuxtConfig({
//   hooks: {
//     'app:templates': () => {
//       console.log('agtggkdfkgfd');
//     }
//   }
// });

// add half opacity shit
const selected = ref({} as OverlayPanel);
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

function onMouseOver (e: MouseEvent, overlayName: OverlaysNames) {
  selected.value.hide?.();
  const overlay = overlays[overlayName].value;
  overlay.show(e);
  selected.value = overlay;
}

function onMouseLeave (overlayName: OverlaysNames, e?: MouseEvent) {
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
const moneyStore = useMoneyStore();
const { currentMoney } = storeToRefs(moneyStore);

const messagesStore = useMessageStore();
const { messages } = storeToRefs(messagesStore);
</script>

<template>
  <StickyElement stuck-class="vue-sticky-element--stuck width-reset" :force-show="isExpanded.value">
    <div :class="{'!t-left-56': isExpanded.value, 'left-0': !isExpanded.value}" class=" t-z-10 px-2 max-md:!t-left-0 t-transition-all t-ease-in-out t-duration-200 fixed surface-card shadow-8 right-0 header">
      <div class="flex align-items-center justify-content-between w-full t-py-[.7rem]">
        <div>
          <Button unstyled @click="expanded">
            <i class="pi pi-align-justify text-2xl vertical-align-middle" />
          </Button>
        </div>
        <div class="t-h-[20px] flex t-items-center">
          <div class="mr-3" @mouseover="(e: MouseEvent) => onMouseOver(e, 'messagesOp')">
            <i v-if="messages && messages.value.length" v-badge.danger class="pi pi-envelope p-text-secondary" />
            <i v-else class="pi pi-envelope p-text-secondary" />
            <OverlayPanel :ref="overlays.messagesOp" class="md:!t-w-1/2 max-md:t-w-full max-md:!t-left-0 max-md:!t-top-10" dismissable @mouseleave="(e) => onMouseLeave('messagesOp', e)">
              <Messages />
            </OverlayPanel>
          </div>
          <div>
            <Avatar
              v-badge.warning="currentMoney"
              shape="circle"
              :image="account.image"
              class="mr-3 "
              size="normal"
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
                  <NuxtLink to="/profile#settings">
                    <Button icon="pi p-text-secondary pi-cog mr-1" unstyled class="t-pl-1 " label="Account Settings" />
                  </NuxtLink>
                </div>
                <div class="link flex t-items-center pt-3">
                  <NuxtLink to="/profile/challenges">
                    <Button icon="pi p-text-secondary pi-file-edit mr-1" unstyled class="t-pl-1 " label="My challenges" />
                  </NuxtLink>
                </div>
                <Divider />
                <div class="link flex t-items-center">
                  <NuxtLink to="/profile/completed">
                    <Button icon="pi p-text-secondary pi-check-circle mr-1" label="Completed challenges" unstyled />
                  </NuxtLink>
                </div>
                <div class="link flex t-items-center">
                  <NuxtLink to="/profile/bookmarks">
                    <Button icon="p-text-secondary pi pi-star mr-1" unstyled class="link flex t-items-center pt-3" label="Bookmarked challenges" />
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
          <ChangeThemeButton class="ml-5" />
        </div>
      </div>
    </div>
  </StickyElement>
</template>

<style scoped lang="sass">
.width-reset
  width: revert !important
</style>

<script setup lang="ts">
import { onMounted, reactive, Ref, ref, watch } from 'vue';
import OverlayPanel from 'primevue/overlaypanel';
import { useAuth, useFetch, useLazyFetch } from '../../.nuxt/imports';
import { usePointsStore } from '../stores/pointsStore';
import { useLevelStore } from '../stores/levelStore';
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
const { status, data: { value: { user: { account } } }, signIn, signOut } = useAuth();
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

const progress = reactive({ value: 0 });
// const pointsToNextLvl = await useFetch('/api/points/toNextLevel', {
//   method: 'POST',
//   body: {
//     userId: account.userId
//   }
// }).then((res) => {
//   progress.value = calculatePercentOfPointsProgress(account.points, res.data.value.need);
//   return res.data.value;
// });

const { currentPoints, calculatePercentOfPointsProgress, getPointsToNextLvl } = usePointsStore();
const levelStore = useLevelStore();
const level = levelStore.level;
const points = currentPoints;
const pointsToNextLvl = await getPointsToNextLvl();
progress.value = calculatePercentOfPointsProgress(account.points, pointsToNextLvl.need);

watch(points, (newPoints) => { // todo move in store and add toast
  progress.value = calculatePercentOfPointsProgress(newPoints.value, pointsToNextLvl.need);
  if (newPoints.value >= pointsToNextLvl.need) {
    level.value = +level.value + 1;
  }
});

function onMouseOver (e: MouseEvent, overlayName: OverlaysNames) {
  selected.value.hide?.();
  const overlay = overlays[overlayName].value;
  overlay.show(e);
  selected.value = overlay;
}

function onMouseLeave (overlayName: OverlaysNames) {
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
          <OverlayPanel :ref="overlays.messagesOp" dismissable @mouseleave="() => onMouseLeave('messagesOp')">
            <p>Тут типа сообщения</p>
          </OverlayPanel>
        </div>
        <div>
          <Avatar v-badge.success="4" icon="pi pi-user" class="mr-3" size="small" @mouseover="(e) => onMouseOver(e, 'profileOp')" />
          <OverlayPanel :ref="overlays.profileOp" dismissable class="!t-p-0" @mouseleave="() => onMouseLeave('profileOp')">
            <div>
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="p-text-secondary pi pi-user mr-1" unstyled class="t-pl-1 " label="View Profile" @click="signOutMe()" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-cog mr-1" unstyled class="t-pl-1 " label="Account Settings" @click="signOutMe()" />
                </NuxtLink>
              </div>
              <div class="link flex t-items-center pt-3">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-file-edit mr-1" unstyled class="t-pl-1 " label="My tasks" @click="signOutMe()" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to="/">
                  <Button icon="pi p-text-secondary pi-comments mr-1" unstyled class="t-pl-1 " label="Commented tasks" @click="signOutMe()" />
                </NuxtLink>
              </div>
              <Divider />
              <div class="link flex t-items-center">
                <NuxtLink to>
                  <Button icon="pi p-text-secondary pi-check-circle mr-1" label="Completed tasks" unstyled />
                </NuxtLink>
              </div>
              <div class="link flex t-items-center">
                <NuxtLink to="/">
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
          <Badge :value="level.value" class="mr-2" @mouseover="(e) => onMouseOver(e, 'levelOp')" />
          <OverlayPanel :ref="overlays.levelOp" dismissable class="t-w-[300px]" @mouseleave="() => onMouseLeave('levelOp')">
            <div class="flex t-flex-col w-full">
              <div>
                <p>У вас <span class="text-primary">{{ points.value }}</span> очков</p>
                <p class="mt-3">
                  Для следующего уровня нужно: {{ pointsToNextLvl.need }}
                </p>
              </div>
              <div class="flex flex-row mt-1">
                <ProgressBar
                  :value="+progress.value.toFixed(1)"
                  class="w-full text-center"
                  :pt="{
                    value: {
                      class: ['animated-gradient-rainbow'],
                    }
                  }"
                />
                <Badge :value="+level.value + 1" severity="danger" class="ml-2" />
              </div>
            </div>
          </OverlayPanel>
          <!--          <Badge :value="8" severity="success" class="mr-2"></Badge>-->
          <!--          <Badge :value="4" severity="info" class="mr-2"></Badge>-->
          <!--          <Badge :value="12" severity="warning" class="mr-2"></Badge>-->
          <!--          <Badge :value="3" severity="danger"></Badge>-->
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

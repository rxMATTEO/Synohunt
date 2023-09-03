<script setup lang="ts">
import { Ref, UnwrapRef } from 'vue';

const props = defineProps({
  isExpanded: Boolean,
  toggle: Function
});

const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});

type NavItem = {
  logoPath: string,
  title: string,
  description: string,
  to: string
}
type NavLink = {
  title: string,
  links: NavItem[],
}
const navLinks = ref([
  {
    title: 'Training',
    links: [
      {
        title: 'Play',
        description: 'Complete challenges & practice',
        logoPath: 'pi-angle-double-right pi',
        to: '/play/random'
      },
      {
        title: 'Messages',
        description: 'Check out your messages & notifications',
        logoPath: 'pi pi-inbox',
        to: '/message'
      }
    ]
  },
  {
    title: 'career',
    links: [
      {
        title: 'Create challenge',
        description: 'Create your own challenge for players and get coins',
        to: '/create/task',
        logoPath: 'pi-plus-circle pi'
      }
    ]
  },
  {
    title: 'Community',
    links: [
      {
        title: 'Leaderboard',
        to: '/leaderboard',
        description: 'Achieve honor and move up the global leaderboards',
        logoPath: 'pi pi-fw pi-chart-bar'
      },
      {
        title: 'Completed challenges',
        description: 'Watch your solutions',
        logoPath: 'pi-check-circle pi',
        to: '/profile/completed'
      },
      {
        title: 'My challenges',
        description: 'Check out your challenges',
        logoPath: 'pi-chart-line pi',
        to: '/profile/challenges'
      }
    ]
  },
  {
    title: 'About',
    links: [
      {
        title: 'About',
        description: 'Check out our advantages',
        logoPath: 'pi-question-circle pi',
        to: '/about'
      }
    ]
  }
] as NavLink[]);

const emit = defineEmits(['navigate']);
function onLinkClick () {
  emit('navigate');
}
// todo figure out like wtf its behind hints panel and optimize it for mobiles
</script>

<template>
  <div class="t-relative t-top-10 t-z-[11] t-transition-[width] t-ease-in-out t-duration-200" :class="{'md:t-w-56 t-w-full': isExpanded, 't-w-0': !isExpanded}">
    <div class="z-1 md:t-block lg:flex-auto flex-none left-0 md:t-top-0 t-top-10 bottom-0 fixed surface-card shadow-8 sidebar">
      <div class="logo">
        <NuxtLink to="/dashboard" class="w-6 mx-auto block" @click="onLinkClick">
          <NuxtImg
            src="/img/download.webp"
            class="block mx-auto w-full"
            alt="logo"
            draggable="false"
            width="500"
            height="300"
          />
        </NuxtLink>
      </div>
      <div v-if="isExpanded" class="mt-5 text-secondary t-text-sm t-w-1/">
        <div v-for="navItem in navLinks">
          <p class="px-2 uppercase text-color-secondary">
            {{ navItem.title }}
          </p>
          <div class="mt-1">
            <NuxtLink v-for="link in navItem.links" :to="link.to" class="hover:surface-200 block transition-colors t-ease-in-out t-duration-200" @click="onLinkClick">
              <div class="flex px-1">
                <div class="t-w-1/6 flex align-items-center">
                  <i :class="link.logoPath" />
                </div>
                <div class="t-w-5/6">
                  <p class="t-font-bold">
                    {{ link.title }}
                  </p>
                  <p class="text-sm text-color-secondary">
                    {{ link.description }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.sidebar
  width: inherit
</style>

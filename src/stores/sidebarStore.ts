import { reactive, reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { Platforms } from '@/app.config';
import { platformKey, usePlatformStore } from '@/stores/platformStore';
import { useLevelStore, useLevelStore } from '@/stores/levelStore';
import { defineStore, useAuth, useFetch } from '#imports';

export const useSidebarStore = defineStore('sidebarStore', {
  state: () => {
    const stateKey = 'sidebarExpanded';
    const sidebarCookie = useCookie(stateKey);

    const platformStore = usePlatformStore();
    const { platform } = storeToRefs(platformStore);
    if (sidebarCookie.value == undefined) {
      sidebarCookie.value = platform.value === 'pc';
    }
    if (platform.value === 'mobile') {
      sidebarCookie.value = false;
    }
    return {
      isExpanded: sidebarCookie.value,
      sidebarCookie
    };
  },
  getters: {

  },
  actions: {
    toggleMenu () {
      this.isExpanded = !this.isExpanded;
      const stateKey = 'sidebarExpanded';
      const sidebarCookie = useCookie(stateKey);
      sidebarCookie.value = this.isExpanded;
      return this.isExpaned;
    },
    hideMenuMobile () {
      const platformStore = usePlatformStore();
      const { platform } = storeToRefs(platformStore);
      if (platform.value !== Platforms.pc) {
        this.isExpanded = false;
      }
    }
  }
});

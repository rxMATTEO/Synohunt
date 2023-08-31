import { reactive, watch } from 'vue';
import { defineStore, useAuth, useFetch } from '#imports';
import { useLevelStore } from '@/stores/levelStore';

type Platform = 'mobile' | 'pc' | 'unknown';

export const usePlatformStore = defineStore('platformStore', {
  state: (): { platform: Platform } => {
    const platformKey = 'platform';
    const platformCookie = useCookie(platformKey);

    if (!platformCookie.value) {
      platformCookie.value = 'unknown';
    }
    return {
      platform: platformCookie.value
    };
  },
  getters: {
  },
  actions: {
    setCurrentPlatform (value: Platform) {
      const platformKey = 'platform';
      const platformCookie = useCookie(platformKey);
      platformCookie.value = value;
      this.platform = value;
    }
  }
});

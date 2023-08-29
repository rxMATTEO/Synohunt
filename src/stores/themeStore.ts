import { usePrimeVue } from 'primevue/config';
import { reactive, ref } from 'vue';
import { Theme, ThemesNames } from '@/app.config';
import { useAppConfig, useRuntimeConfig } from '#imports';

export const useThemeStore = defineStore('themeStore', () => {
  const { themeId, themeCookieKey } = useAppConfig();
  const primeVue = usePrimeVue();
  const appConfig = useAppConfig();
  const currentTheme = ref(appConfig.theme);

  const themeCookie = useCookie(themeCookieKey);
  function getCurrentTheme (): ThemesNames {
    if (!themeCookie.value) {
      themeCookie.value = appConfig.theme as ThemesNames;
    }
    currentTheme.value = themeCookie.value;
    return themeCookie.value;
  }

  function applyFromCookie () {
    if (!themeCookie.value) { themeCookie.value = currentTheme.value; }
    useHead({
      link: [
        {
          id: themeId,
          rel: 'stylesheet',
          href: `/themes/${themeCookie.value}/theme.css`
        }
      ]
    });
    currentTheme.value = themeCookie.value;
  }

  function setPrimeTheme (currentTheme, newTheme) {
    return primeVue.changeTheme(currentTheme, newTheme, themeId);
  }

  function setCurrentTheme (currentThemeName: ThemesNames, newThemeName: ThemesNames) {
    setPrimeTheme(currentThemeName, newThemeName);
    themeCookie.value = currentTheme.value = newThemeName;
  }
  return ({
    getCurrentTheme,
    setCurrentTheme,
    applyFromCookie,
    currentTheme
  });
});

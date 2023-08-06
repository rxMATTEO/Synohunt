import { usePrimeVue } from 'primevue/config';
import { reactive } from 'vue';
import { Theme, ThemesNames } from '@/app.config';
import { useAppConfig, useRuntimeConfig } from '#imports';

export const useThemeStore = defineStore('themeStore', () => {
  const { public: { themeId } }: string = useRuntimeConfig();
  const modeKey = import.meta.env.VITE_COLOR_MODE_KEY;
  const primeVue = usePrimeVue();
  const appConfig = useAppConfig();

  let currentTheme: Theme = reactive(appConfig.theme);

  function getCurrentTheme (): ThemesNames {
    let mode: ThemesNames = localStorage.getItem(modeKey) as ThemesNames;
    if (!mode) {
      mode = Object.keys(appConfig.theme)[0] as ThemesNames;
      localStorage.setItem(modeKey, ThemesNames.dark);
    }
    currentTheme = { [mode]: true };
    return mode;
  }

  function setPrimeTheme (currentTheme, newTheme) {
    return primeVue.changeTheme(currentTheme, newTheme, themeId);
  }

  function setCurrentTheme (currentThemeName: ThemesNames, newThemeName: ThemesNames) {
    appConfig.theme[currentThemeName] = false;
    appConfig.theme[newThemeName] = true;
    localStorage.setItem(modeKey, newThemeName);

    currentTheme = { [newThemeName]: true };
    setPrimeTheme(currentThemeName, newThemeName);
  }
  return ({
    getCurrentTheme,
    setCurrentTheme,
    currentTheme
  });
});

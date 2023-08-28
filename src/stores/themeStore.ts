import { usePrimeVue } from 'primevue/config';
import { reactive, ref } from 'vue';
import { Theme, ThemesNames } from '@/app.config';
import { useAppConfig, useRuntimeConfig } from '#imports';

export const useThemeStore = defineStore('themeStore', () => {
  const { public: { themeId } }: string = useRuntimeConfig();
  const modeKey = 'colorMode';
  const primeVue = usePrimeVue();
  const appConfig = useAppConfig();

  const currentTheme = ref(appConfig.theme);

  function getCurrentTheme (): ThemesNames {
    let mode: ThemesNames = localStorage.getItem(modeKey) as ThemesNames;
    if (!mode) {
      mode = appConfig.theme as ThemesNames;
      localStorage.setItem(modeKey, 'bootstrap4-dark-purple');
    }
    currentTheme.value = mode;
    return mode;
  }

  function setPrimeTheme (currentTheme, newTheme) {
    return primeVue.changeTheme(currentTheme, newTheme, themeId);
  }

  function setCurrentTheme (currentThemeName: ThemesNames, newThemeName: ThemesNames) {
    setPrimeTheme(currentThemeName, newThemeName);
    appConfig.theme = newThemeName;
    localStorage.setItem(modeKey, newThemeName);

    currentTheme.value = newThemeName;
  }
  return ({
    getCurrentTheme,
    setCurrentTheme,
    currentTheme
  });
});

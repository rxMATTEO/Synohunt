<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useThemeStore } from '@/stores/themeStore';
import { useNotificationsStore } from '@/stores/notificationsStore';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(useThemeStore());
const notificationsStore = useNotificationsStore();

const themeNames = ['arya-blue',
  'arya-green',
  'arya-orange',
  'arya-purple',
  'bootstrap4-dark-blue',
  'bootstrap4-dark-purple',
  'bootstrap4-light-blue',
  'bootstrap4-light-purple',
  'fluent-light',
  'lara-dark-blue',
  'lara-dark-indigo',
  'lara-dark-purple',
  'lara-dark-teal',
  'lara-light-blue',
  'lara-light-indigo',
  'lara-light-purple',
  'lara-light-teal',
  'luna-amber',
  'luna-blue',
  'luna-green',
  'luna-pink',
  'md-dark-deeppurple',
  'md-dark-indigo',
  'md-light-deeppurple',
  'md-light-indigo',
  'mdc-dark-deeppurple',
  'mdc-dark-indigo',
  'mdc-light-deeppurple',
  'mdc-light-indigo',
  'mira',
  'nano',
  'nova',
  'nova-accent',
  'nova-alt',
  'nova-vue',
  'rhea',
  'saga-blue',
  'saga-green',
  'saga-orange',
  'saga-purple',
  'soho-dark',
  'soho-light',
  'tailwind-light',
  'vela-blue',
  'vela-green',
  'vela-orange',
  'vela-purple',
  'viva-dark',
  'viva-light'] as const;

const themeKind = ['Bootstrap', 'Material Design', 'Tailwind', 'Fluent UI', 'PrimeOne Design - 2022', 'PrimeOne Design - 2021'] as const;
type ThemeKindName = typeof themeKind[number];
type ThemeName = typeof themeNames[number];

type Theme = {
  kind: ThemeKindName,
  themes: ThemeName[],
  fileType: 'svg' | 'png'
}
const themes = ref<Theme[]>([
  {
    kind: 'Bootstrap',
    fileType: 'svg',
    themes: ['bootstrap4-dark-purple', 'bootstrap4-light-purple', 'bootstrap4-dark-blue', 'bootstrap4-light-blue']
  },
  {
    kind: 'Material Design',
    fileType: 'svg',
    themes: ['md-dark-deeppurple', 'md-light-deeppurple', 'md-dark-indigo', 'md-light-indigo']
  },
  {
    kind: 'Tailwind',
    fileType: 'png',
    themes: ['tailwind-light']
  },
  {
    kind: 'PrimeOne Design - 2022',
    fileType: 'png',
    themes: ['lara-dark-blue',
      'lara-dark-indigo',
      'lara-dark-purple',
      'lara-dark-teal',
      'lara-light-blue',
      'lara-light-indigo',
      'lara-light-purple',
      'lara-light-teal']
  },
  {
    kind: 'PrimeOne Design - 2021',
    fileType: 'png',
    themes: [
      'saga-blue',
      'saga-green',
      'saga-orange',
      'saga-purple',
      'vela-blue',
      'vela-green',
      'vela-orange',
      'vela-purple',
      'arya-green',
      'arya-orange',
      'arya-purple',
      'arya-blue'
    ]
  }
]);

const onChangeTheme = (currentTheme: ThemeName, theme: ThemeName) => {
  notificationsStore.addNotification({
    title: 'Success',
    secondaryText: 'Cool',
    description: 'You changed theme',
    image: '/layout/images/themes/nova.png'
  });
  themeStore.setCurrentTheme(currentTheme, theme);
};
</script>

<template>
  <div class="">
    <h1 class="text-4xl font-bold">
      Appearance
    </h1>
    <div class="flex flex-column mt-5">
      <div v-for="themeGroup in themes">
        <h5>{{ themeGroup.kind }}</h5>
        <div class="flex flex-wrap">
          <div v-for="theme in themeGroup.themes">
            <div class="col-3">
              <button :title="theme" class="t-w-10 t-h-10" @click="onChangeTheme(currentTheme,theme)">
                <img class="h-full w-full" :src="`/layout/images/themes/${theme}.${themeGroup.fileType}`" :alt="theme">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>

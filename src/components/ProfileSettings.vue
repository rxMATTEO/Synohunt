<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(useThemeStore());
const onChangeTheme = themeStore.setCurrentTheme;

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
  themes: ThemeName[]
}
const themes = ref<Theme[]>([
  {
    kind: 'Bootstrap',
    themes: ['bootstrap4-dark-purple', 'bootstrap4-light-purple', 'bootstrap4-dark-blue', 'bootstrap4-light-blue']
  },
  {
    kind: 'Material Design',
    themes: ['md-dark-deeppurple', 'md-light-deeppurple', 'md-dark-indigo', 'md-light-indigo']
  },
  {
    kind: 'Tailwind',
    themes: ['tailwind-light']
  },
  {
    kind: 'PrimeOne Design - 2022',
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
</script>

<template>
  <h5>Bootstrap</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme(currentTheme,'bootstrap4-light-blue')">
        <img src="/layout/images/themes/bootstrap4-light-blue.svg" class="w-2rem h-2rem" alt="Bootstrap Light Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('bootstrap4-light-purple', 'light')">
        <img src="/layout/images/themes/bootstrap4-light-purple.svg" class="w-2rem h-2rem" alt="Bootstrap Light Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('bootstrap4-dark-blue', 'dark')">
        <img src="/layout/images/themes/bootstrap4-dark-blue.svg" class="w-2rem h-2rem" alt="Bootstrap Dark Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('bootstrap4-dark-purple', 'dark')">
        <img src="/layout/images/themes/bootstrap4-dark-purple.svg" class="w-2rem h-2rem" alt="Bootstrap Dark Purple">
      </button>
    </div>
  </div>

  <h5>Material Design</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('md-light-indigo', 'light')">
        <img src="/layout/images/themes/md-light-indigo.svg" class="w-2rem h-2rem" alt="Material Light Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('md-light-deeppurple', 'light')">
        <img src="/layout/images/themes/md-light-deeppurple.svg" class="w-2rem h-2rem" alt="Material Light DeepPurple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('md-dark-indigo', 'dark')">
        <img src="/layout/images/themes/md-dark-indigo.svg" class="w-2rem h-2rem" alt="Material Dark Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('md-dark-deeppurple', 'dark')">
        <img src="/layout/images/themes/md-dark-deeppurple.svg" class="w-2rem h-2rem" alt="Material Dark DeepPurple">
      </button>
    </div>
  </div>

  <h5>Material Design Compact</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('mdc-light-indigo', 'light')">
        <img src="/layout/images/themes/md-light-indigo.svg" class="w-2rem h-2rem" alt="Material Light Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('mdc-light-deeppurple', 'light')">
        <img src="/layout/images/themes/md-light-deeppurple.svg" class="w-2rem h-2rem" alt="Material Light Deep Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('mdc-dark-indigo', 'dark')">
        <img src="/layout/images/themes/md-dark-indigo.svg" class="w-2rem h-2rem" alt="Material Dark Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('mdc-dark-deeppurple', 'dark')">
        <img src="/layout/images/themes/md-dark-deeppurple.svg" class="w-2rem h-2rem" alt="Material Dark Deep Purple">
      </button>
    </div>
  </div>

  <h5>Tailwind</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('tailwind-light', 'light')">
        <img src="/layout/images/themes/tailwind-light.png" class="w-2rem h-2rem" alt="Tailwind Light">
      </button>
    </div>
  </div>

  <h5>Fluent UI</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('fluent-light', 'light')">
        <img src="/layout/images/themes/fluent-light.png" class="w-2rem h-2rem" alt="Fluent Light">
      </button>
    </div>
  </div>

  <h5>PrimeOne Design - 2022</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-light-indigo', 'light')">
        <img src="/layout/images/themes/lara-light-indigo.png" class="w-2rem h-2rem" alt="Lara Light Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-light-blue', 'light')">
        <img src="/layout/images/themes/lara-light-blue.png" class="w-2rem h-2rem" alt="Lara Light Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-light-purple', 'light')">
        <img src="/layout/images/themes/lara-light-purple.png" class="w-2rem h-2rem" alt="Lara Light Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-light-teal', 'light')">
        <img src="/layout/images/themes/lara-light-teal.png" class="w-2rem h-2rem" alt="Lara Light Teal">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-dark-indigo', 'dark')">
        <img src="/layout/images/themes/lara-dark-indigo.png" class="w-2rem h-2rem" alt="Lara Dark Indigo">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-dark-blue', 'dark')">
        <img src="/layout/images/themes/lara-dark-blue.png" class="w-2rem h-2rem" alt="Lara Dark Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-dark-purple', 'dark')">
        <img src="/layout/images/themes/lara-dark-purple.png" class="w-2rem h-2rem" alt="Lara Dark Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('lara-dark-teal', 'dark')">
        <img src="/layout/images/themes/lara-dark-teal.png" class="w-2rem h-2rem" alt="Lara Dark Teal">
      </button>
    </div>
  </div>

  <h5>PrimeOne Design - 2021</h5>
  <div class="grid">
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('saga-blue', 'light')">
        <img src="/layout/images/themes/saga-blue.png" class="w-2rem h-2rem" alt="Saga Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('saga-green', 'light')">
        <img src="/layout/images/themes/saga-green.png" class="w-2rem h-2rem" alt="Saga Green">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('saga-orange', 'light')">
        <img src="/layout/images/themes/saga-orange.png" class="w-2rem h-2rem" alt="Saga Orange">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('saga-purple', 'light')">
        <img src="/layout/images/themes/saga-purple.png" class="w-2rem h-2rem" alt="Saga Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('vela-blue', 'dark')">
        <img src="/layout/images/themes/vela-blue.png" class="w-2rem h-2rem" alt="Vela Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('vela-green', 'dark')">
        <img src="/layout/images/themes/vela-green.png" class="w-2rem h-2rem" alt="Vela Green">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('vela-orange', 'dark')">
        <img src="/layout/images/themes/vela-orange.png" class="w-2rem h-2rem" alt="Vela Orange">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('vela-purple', 'dark')">
        <img src="/layout/images/themes/vela-purple.png" class="w-2rem h-2rem" alt="Vela Purple">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('arya-blue', 'dark')">
        <img src="/layout/images/themes/arya-blue.png" class="w-2rem h-2rem" alt="Arya Blue">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('arya-green', 'dark')">
        <img src="/layout/images/themes/arya-green.png" class="w-2rem h-2rem" alt="Arya Green">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('arya-orange', 'dark')">
        <img src="/layout/images/themes/arya-orange.png" class="w-2rem h-2rem" alt="Arya Orange">
      </button>
    </div>
    <div class="col-3">
      <button class="p-link w-2rem h-2rem" @click="onChangeTheme('arya-purple', 'dark')">
        <img src="/layout/images/themes/arya-purple.png" class="w-2rem h-2rem" alt="Arya Purple">
      </button>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>

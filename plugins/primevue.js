import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import {defineNuxtPlugin} from 'nuxt/app';
import Slider from 'primevue/slider';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Slider', Slider);
});
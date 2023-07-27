import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import { defineNuxtPlugin } from 'nuxt/app';
import Sidebar from 'primevue/sidebar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Sidebar', Sidebar);
});

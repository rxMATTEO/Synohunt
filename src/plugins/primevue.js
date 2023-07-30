import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import { defineNuxtPlugin } from 'nuxt/app';
import Dropdown from 'primevue/dropdown';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import BadgeDirective from 'primevue/badgedirective';
import OverlayPanel from 'primevue/overlaypanel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.directive('badge', BadgeDirective);
  
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
  nuxtApp.vueApp.component('Badge', Badge);
  nuxtApp.vueApp.component('Avatar', Avatar);
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);
});

import VStickyElement from 'vue-sticky-element';
import { defineNuxtPlugin } from '#imports';
export default defineNuxtPlugin({
  parallel: true,
  setup: (nuxtApp) => {
    nuxtApp.vueApp.use(VStickyElement);
  }
});

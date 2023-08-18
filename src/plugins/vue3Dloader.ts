import vue3dLoader from 'vue-3d-loader';
import { defineNuxtPlugin } from '#imports';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3dLoader);
});

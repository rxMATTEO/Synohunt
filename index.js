import { createApp } from 'vue';
import App from '@/src/app.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/bootstrap4-dark-purple';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
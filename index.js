import { createApp } from 'vue';
import App from '@/app.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/bootstrap4-dark-purple';
import Button from 'primevue/button';
import Slider from 'primevue/slider';

const app = createApp(App);
app.use(PrimeVue);
app.component(Button);
app.component(Slider);
app.mount('#app');
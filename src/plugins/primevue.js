import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import BadgeDirective from 'primevue/badgedirective';
import OverlayPanel from 'primevue/overlaypanel';
import Divider from 'primevue/divider';
import ProgressBar from 'primevue/progressbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Tooltip from 'primevue/tooltip';
import PickList from 'primevue/picklist';
import FocusTrap from 'primevue/focustrap';
import Dialog from 'primevue/dialog';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.directive('badge', BadgeDirective);
  nuxtApp.vueApp.directive('tooltip', Tooltip);
  nuxtApp.vueApp.directive('focustrap', FocusTrap);

  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
  nuxtApp.vueApp.component('Badge', Badge);
  nuxtApp.vueApp.component('Avatar', Avatar);
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);
  nuxtApp.vueApp.component('Divider', Divider);
  nuxtApp.vueApp.component('ProgressBar', ProgressBar);
  nuxtApp.vueApp.component('DataTable', DataTable);
  nuxtApp.vueApp.component('Column', Column);
  nuxtApp.vueApp.component('Checkbox', Checkbox);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('PickList', PickList);
  nuxtApp.vueApp.component('Dialog', Dialog);
});

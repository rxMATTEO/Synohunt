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
import DataView from 'primevue/dataview';
import TabMenu from 'primevue/tabmenu';
import Knob from 'primevue/knob';
import Editor from 'primevue/editor';
import SplitButton from 'primevue/splitbutton';
import SpeedDial from 'primevue/speeddial';
import Dock from 'primevue/dock';
import RadioButton from 'primevue/radiobutton';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ConfirmDialog from 'primevue/confirmdialog';
import Fieldset from 'primevue/fieldset';
import ConfirmationService from 'primevue/confirmationservice';
import Skeleton from 'primevue/skeleton';
import { defineNuxtPlugin } from '#imports';
export default defineNuxtPlugin({
  parallel: true,
  setup: async (nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
      ripple: true,
      pt: {
        skeleton: {
          root: {
            style: {
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
          }
        }
      }
    });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
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
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('TabMenu', TabMenu);
    nuxtApp.vueApp.component('Knob', Knob);
    nuxtApp.vueApp.component('Editor', Editor);
    nuxtApp.vueApp.component('SplitButton', SplitButton);
    nuxtApp.vueApp.component('SpeedDial', SpeedDial);
    nuxtApp.vueApp.component('Dock', Dock);
    nuxtApp.vueApp.component('RadioButton', RadioButton);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog);
    nuxtApp.vueApp.component('Fieldset', Fieldset);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
  }
});

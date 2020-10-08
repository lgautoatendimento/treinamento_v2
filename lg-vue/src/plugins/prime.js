import Vue from 'vue';

/* Produtos finais terão que referenciar o CSS do CDN da LG */
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

Vue.component('p-input-text', InputText);
Vue.component('p-button', Button);

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/language';

import './plugins/prime';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

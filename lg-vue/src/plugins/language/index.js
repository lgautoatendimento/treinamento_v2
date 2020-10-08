import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ptBr from './pt_br';
import en from './en';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'pt_br',
  messages: {
    pt_br: ptBr,
    en,
  },
});

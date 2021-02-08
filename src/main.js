import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import (/* webpackPreload: true */ './style.css');
import generalFunctions from './services/genFunc'
import VueMeta from 'vue-meta'
 
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})


Vue.config.productionTip = false;
Vue.mixin(generalFunctions)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

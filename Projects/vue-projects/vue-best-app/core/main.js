// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { i18n, router, vue } from './extends';
import store from './store';
import app from '../app/index';

// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
Vue.config.productionTip = false

store.dispatch("app/INIT_APP").then(obj => {
  !obj.err && (obj.v = new vue({
    i18n, router, store,
    el: '#app',
    template: '<app/>',
    components: { app }
  }));
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

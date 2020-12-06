import Vue from 'vue'
import Axios from "axios";
/*import App from './App.vue'*/
import router from './router'
import store from './store'
import Website from './components/Website/component.vue'
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue)

Vue.prototype.$axios=Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Website)
}).$mount('#app')


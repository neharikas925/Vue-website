import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
//Vue.use(VueRouter);

//const router= new VueRouter({

//});
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



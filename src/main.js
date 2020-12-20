import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false

Vue.use(VueTypedJs)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BMap from 'vue-baidu-map'
import WebIM from './webim'

import element from './element-ui.config'

Vue.config.productionTip = false

Vue.use(element)

Vue.use(VueAxios,axios)
Vue.use(WebIM)
Vue.use(BMap,{
  ak:'XE9xErr0wmqsYGPFfLM8j0tsnYXUoHnd'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

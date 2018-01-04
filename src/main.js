import Vue from 'vue'

import App from './App.vue'
import SvgImage from './components/svg/svgImage.vue'
import router from './router/index'
import store from './store/index'

Vue.component('SvgImage', SvgImage)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

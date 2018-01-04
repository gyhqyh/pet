import Vue from 'vue'

import App from './App.vue'
import SvgImage from './components/svg/svgImage.vue'
import router from './router/index'

Vue.component('SvgImage', SvgImage)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

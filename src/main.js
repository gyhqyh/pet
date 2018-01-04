import Vue from 'vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Button} from 'mint-ui'

import App from './App.vue'
import SvgImage from './components/svg/svgImage.vue'
import router from './router/index'
import store from './store/index'

Vue.use(MintUi)
Vue.component(Button.name, Button)
Vue.component('SvgImage', SvgImage)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

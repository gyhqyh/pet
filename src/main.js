import Vue from 'vue'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Button} from 'mint-ui'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import SvgImage from './components/svg/svgImage.vue'
import router from './router/index'
import store from './store/index'
import split from './components/split/split.vue'
import loading from './common/imgs/loading.gif'

Vue.use(MintUi)
Vue.use(VueLazyload, {
  loading
})
Vue.component(Button.name, Button)
Vue.component('SvgImage', SvgImage)
Vue.component('split', split)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

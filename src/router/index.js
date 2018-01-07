/**
 * Created by Administrator on 2017/12/31.
 */
import Vue from  'vue'
import Router from   'vue-router'

import Home from '../pages/home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Center from '../pages/Center/Center.vue'
import FenLei from '../pages/FenLei/FenLei.vue'
import PingPai from '../pages/PingPai/PingPai.vue'
import Select from '../pages/Select/select.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      meta : {
        isTop : true
      }

    },
    {
      path: '/classification',
      component: Classification,
      meta : {
        isTop: true
      },
      children : [
        { // 自动跳转路由
          path: '/classification',
          redirect: '/classification/feilei'
        },
        {
          path : 'feilei',
          component:FenLei,
          meta : {
            isTop: true,
          }
        },
        {
          path: 'pingpai',
          component: PingPai,
          meta : {
            isTop: true
          }
        }
      ]
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart,
      meta : {
        isTop : false
      }
    },
    {
      path: '/center',
      component: Center,
      meta : {
        isTop : false
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/select',
      component: Select,
      meta : {
        isTop: false,
      }
    }
  ],
  mode: 'history'
})


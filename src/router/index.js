/**
 * Created by Administrator on 2017/12/31.
 */
import Vue from  'vue'
import Router from   'vue-router'

import Home from '../pages/home/Home.vue'
import Classification from '../pages/Classification/Classification.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Center from '../pages/Center/Center.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,

    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})


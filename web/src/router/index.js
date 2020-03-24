import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index" 
import order from "@/pages/order"
import shopcar from "@/pages/shopcar"
import my from "@/pages/my"
import list from "@/pages/list"
import detail from "@/pages/detail"
import login from "@/pages/login"
import reg from "@/pages/reg"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})

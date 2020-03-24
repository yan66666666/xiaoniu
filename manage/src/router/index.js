import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import manage from '@/pages/manage'
import home from '@/pages/child/home'
import user from '@/pages/child/user'
import admin from '@/pages/child/admin'
import addGoods from '@/pages/child/addGoods'
import goods from '@/pages/child/goods'
import updateGoods from '@/pages/child/updateGoods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
     // name: 'manage',
      component: manage,
      children:[
      	{
      		path:"",
      		name:"home",
      		component:home
      	},
      	{
      		path:"user",
      		name:"user",
      		component:user,
      		meta:["数据管理","用户管理"]
      	},
      	{
      		path:"admin",
      		name:"admin",
      		component:admin,
      		meta:["数据管理","管理员管理"]
      	},
      	{
      		path:"addgoods",
      		name:"addGoods",
      		component:addGoods,
      		meta:["数据添加","添加商品"]
      	},
      	{
      		path:"goods",
      		name:"goods",
      		component:goods,
      		meta:["数据管理","商品管理"]
      	},
      	{
      		path:"updateGoods",
      		name:"updateGoods",
      		component:updateGoods,
      		meta:["数据管理","修改商品"]
      	}
      ]
    }
  ]
})

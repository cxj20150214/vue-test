import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import login from '@/views/login/login'
import index_main from '@/views/index_main/index_main'
import product from '@/views/product/product'
import news from '@/views/news/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index_main',
      name: 'index',
      component: index,
      children:[
        {
          path: '/product',
          name: 'product',
          component: product
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path:'/index_main',
          name:'index_main',
          component:index_main
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

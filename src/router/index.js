import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import login from '@/views/login/login'
import aboutUs from '@/views/aboutUs/aboutUs'
import contact from '@/views/contact/contact'
// import news from '@/views/news/news'
import anli from '@/views/anli/case'
import case1 from '@/views/anli/caseChild/case1'
import caseDetail from '@/views/anli/caseChild/caseDetail'
import case2 from '@/views/anli/caseChild/case2'
import newslist from '@/views/new/newslist'
import newslist1 from '@/views/new/newslist1'
import newinfos from '@/views/new/newinfos'
import case3 from '@/views/anli/caseChild/case3'
import case4 from '@/views/anli/caseChild/case4'
import case5 from '@/views/anli/caseChild/case5'
import case6 from '@/views/anli/caseChild/case6'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  linkExactActiveClass:'active',
  // 跳转返回顶部
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/case',
      name: 'case',
      component: anli,
      redirect: '/case/case1',
      children:[
        {
          path:'/case/case1',
          component:case1,
        },
        {
          path:'/case/case2',
          component:case2,
        },
        {
          path:'/case/case3',
          component:case3,
        },
        {
          path:'/case/case4',
          component:case4,
        },
        {
          path:'/case/case5',
          component:case5,
        },
        {
          path:'/case/case6',
          component:case6,
        },
        {
          path:'/case/caseDetail',
          component:caseDetail,
        }
      ]
    },
    {
      path:'/newslist1',
      name:newslist,
      component:newslist,
      children:[
        {
          path:'',
          name:newslist1,
          component:newslist1,
        },
        {
          path:'/newslist2',
          name:newslist1,
          component:newslist1
        },
        {
          path:'/newslist3',
          name:newslist1,
          component:newslist1
        },
        {
          path:'/newslist4',
          name:newslist1,
          component:newslist1
        },
        {
          path:'/newslist1/newinfos',
          name:newinfos,
          component:newinfos}
      ]
    }

  ]
})

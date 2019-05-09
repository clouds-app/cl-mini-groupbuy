import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import { setToken, getToken, canTurnTo,getCookie } from '@/libs/util'
import getPageTitle from '@/libs/get-page-title'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import config from '@/config'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const { homeName } = config

Vue.use(Router)

const router = new Router({
    routes:routes
})
const LOGIN_PAGE_NAME = 'login'

const whiteList = ['/login', '/register'] // no redirect whitelist
  // determine whether the user has logged in
const hasToken = getCookie('userName')

//路由拦截，权限控制
router.beforeEach((to, from, next) => {
   // start progress bar
   NProgress.start()
   // 设置页面标题，方便搜索
    document.title =getPageTitle(to.meta.title)
    //debugger
    if (hasToken){
      if (to.path === '/login' || to.path === '/register') {
        // if is logged in, redirect to the home page
        next({ path: '/home' })
        NProgress.done()
      }else{
        next()
        NProgress.done()
      }
    }else{
      /* has no token*/
      if(to.meta.isLogin){
        next({ path: '/login' })
        NProgress.done()
      }
      else{
        next()
        NProgress.done()
      }
    
    }  

     /* has no token*/
    //  next()
    //  NProgress.done()
   })

//路由拦截，页面控制
router.afterEach(to => {
   // finish progress bar
    NProgress.done()
    window.scrollTo(0, 0)
  })

export default router

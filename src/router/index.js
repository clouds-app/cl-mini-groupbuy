import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import { setToken, getToken, canTurnTo } from '@/libs/util'

import config from '@/config'
const { homeName } = config

Vue.use(Router)

const router = new Router({
    routes:routes
})
const LOGIN_PAGE_NAME = 'login'
//路由拦截，权限控制
router.beforeEach((to, from, next) => {
    //debugger
    // const token = getToken()
    //  //console.warn(token);
    // if (token=="undefined"  && to.name !== LOGIN_PAGE_NAME) {
    //     // 未登录且要跳转的页面不是登录页
    //     next({
    //       name: LOGIN_PAGE_NAME // 跳转到登录页
    //     })
    //   }
    //   else if (token=="undefined" && !to.meta.isLogin && to.name === LOGIN_PAGE_NAME) {
    //     // 未登陆且要跳转的页面是登录页
    //     next() // 跳转
    //   } else if (token!="undefined" && to.name === LOGIN_PAGE_NAME) {
    //     // 已登录且要跳转的页面是登录页
    //     next({
    //       name: homeName // 跳转到homeName页
    //     })
    //   }
    //   else
    //   {
    //     next()
    //   }

    next()
    
   })

//路由拦截，页面控制
router.afterEach(to => {
    window.scrollTo(0, 0)
  })

export default router

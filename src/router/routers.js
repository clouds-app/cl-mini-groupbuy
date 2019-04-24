import Home from '@/views/Home.vue'

export default [
  
 {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'main',
    component: Home
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    meta:{
      isLogin: true
    },
    component: () => import(/* webpackChunkName: "UserCenter" */ '@/views/UserCenter.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta:{
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta:{
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue')
  },
  {
    path: '/shopingCart',
    name: 'shopingCart',
    meta:{
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "ShopingCart" */ '@/views/ShopingCart/ShopingCart.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    meta:{
      
    },
    component: () => import(/* webpackChunkName: "Category" */ '@/views/Category/Category.vue')
  },
  {
    path: '/goodslist',
    name: 'goodslist',
    meta:{
     
    },
    component: () => import(/* webpackChunkName: "AddressList" */ '@/views/GoodsList/GoodsList.vue')
  },
  {
    path: '/addresslist',
    name: 'addresslist',
    meta:{
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "AddressList" */ '@/views/AddressList/AddressList.vue')
  },
  {
    path: '*',
    name: 'err404',
    component: () => import(/* webpackChunkName: "err404" */ '@/views/Err404.vue')
  }
]
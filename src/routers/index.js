import Vue from 'vue'
import App from '@/App'
import VueRouter from 'vue-router'
const routes = [
  {
    // 首页
    path: '/',
    name: 'index',
    redirect: '/home',
    component: App,
    children: [
      {
        // 首页
        path: 'home',
        name: 'home',
        // 路由懒加载
        component: () => import(/* webpackChunkName: "index" */ '../views/index/home.vue')
      }
    ]
  },
  {
    // 登陆
    path: '/login',
    name: 'login',
    redirect: '/login/index',
    component: App,
    children: [
      {
        // 登陆主页
        path: 'index',
        name: 'login-index',
        component: () => import(/* webpackChunkName: "index" */ '../views/login/index.vue')
      },
      {
        // 登陆验证
        path: 'verification',
        name: 'login-verification',
        component: () => import(/* webpackChunkName: "index" */ '../views/login/verification.vue')
      }
    ]
  },
  {
    // 商城
    path: '/mall',
    name: 'mall',
    redirect: '/mall/index',
    component: App,
    children: [
      {
        // 商城主页
        path: 'index',
        name: 'mall-index',
        component: () => import(/* webpackChunkName: "mall" */ '../views/mall/index.vue')
      },
      {
        // 搜索主页
        path: 'search',
        name: 'mall-search',
        component: () => import(/* webpackChunkName: "mall" */ '../views/mall/search.vue')
      }
    ]
  },
  {
    // 商品
    path: '/goods',
    name: 'goods',
    redirect: '/goods/index',
    component: App,
    children: [
      {
        // 商品列表/商品搜索结果
        path: 'index',
        name: 'goods-index',
        component: () => import(/* webpackChunkName: "goods" */ '../views/goods/index.vue')
      },
      {
        // 商品/商品详情
        path: 'detail',
        name: 'goods-detail',
        component: () => import(/* webpackChunkName: "goods" */ '../views/goods/detail.vue')
      }
    ]
  },
  {
    // 购物车
    path: '/cart',
    name: 'cart',
    redirect: '/cart/index',
    component: App,
    children: [
      {
        path: 'index',
        name: 'cart-index',
        component: () => import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
      }
    ]
  },
  {
    // 我的
    path: '/mine',
    name: 'mine',
    redirect: '/mine/index',
    component: App,
    children: [
      {
        path: 'index',
        name: 'mine-index',
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine/index.vue')
      }
    ]
  },
  {
    // demo页面
    path: '/demo',
    name: 'demo',
    redirect: '/demo/vant',
    component: App,
    children: [
      {
        // 改造后基础组件demo
        path: 'base',
        name: 'demo-base',
        component: () => import(/* webpackChunkName: "demo" */ '../views/demo/base.vue')
      },
      {
        // vant组件demo
        path: 'vant',
        name: 'demo-vant',
        component: () => import(/* webpackChunkName: "demo" */ '../views/demo/vant.vue')
      },
      {
        // 页面公共组件demo
        path: 'layout',
        name: 'demo-layout',
        component: () => import(/* webpackChunkName: "demo" */ '../views/demo/layout.vue')
      },
      {
        // 页面公共组件demo
        path: 'test',
        name: 'demo-test',
        component: () => import(/* webpackChunkName: "demo" */ '../views/demo/test.vue')
      }
    ]
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  base: process.env.BASE_URL,
  props: true
})

export default router

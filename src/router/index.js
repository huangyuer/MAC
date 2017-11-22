import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {
  AppHeader,
  AppFooter,
  SearchIndex,
  SearchAll,
  SearchBook,
} from './params'
// 配置路由
export default new Router({
  routes: [
    // 懒加载引入自定义组件
    {
      path: '/',
      component: resolve => require(['../components/index.vue'], resolve)
    },
    {
      path: '/sign_in',
      component: resolve => require(['../components/auth/sign_in.vue'], resolve)
    },
    {
      path: '/sign_up',
      component: resolve => require(['../components/auth/sign_up.vue'], resolve)
    },
    {
      path: '/search/result',
      component: SearchIndex,
      children: [
        {
          path: '/',
          name: 'searchAll',
          components: {
            'childSearch': SearchAll,
          }
        },
        {
          path: 'book',
          name: 'searchBook',
          components: {
            'childSearch': SearchBook,
          }
        }
      ]
    },
    {
      path: '/psw_reset',
      component: resolve => require(['../components/auth/psw_reset.vue'], resolve)
    },
    {
      path: '/about_us',
      component: resolve => require(['../components/about_us.vue'], resolve)
    },
    {
      path: '/book_list',
      component: resolve => require(['../components/book/book_list.vue'], resolve)
    },
    {
      path: '/book_info',
      component: resolve => require(['../components/book/book_info.vue'], resolve)
    },
    {
      path: '/book_content',
      component: resolve => require(['../components/book/book_content.vue'], resolve)
    },
    {
      path: '/user',
      component: resolve => require(['../components/usercenter/user.vue'], resolve),
      redirect: '/user/info',
      children: [
        {
          path: '/user/info',
          component: resolve => require(['../components/usercenter/user_info.vue'], resolve)
        },
        {
          path: '/user/favorites',
          component: resolve => require(['../components/usercenter/user_favorites.vue'], resolve)
        },
        {
          path: '/user/messages',
          component: resolve => require(['../components/usercenter/user_messages.vue'], resolve)
        },
        {
          path: '/user/resources',
          component: resolve => require(['../components/usercenter/user_resources.vue'], resolve)
        }
      ]
    }
  ]
})

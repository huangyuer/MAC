import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {
  AppHeader,
  AppFooter,
  SearchIndex,
  searchContext,
  SearchNull,
  searchAll,
  searchMedia,
  homePage,
  leftPanel,
  rightPanel,
  NotFound404,
  BookList,
  BookInfo,
  BookContent,
  Selected,
  EngineerList,
  EngineerInfo,
  ProjectList,
  ProjectInfo,
  LiteratureList,
  LiteratureInfo,
  Login,
  Register,
  ResetPassword,
  UserInfo,
  UserFavorites,
  UserMessages,
  UserResources
} from './params'
// 配置路由
export default new Router({
  routes: [
    // 懒加载引入自定义组件
    {
      path: '/lost',
      components: {
        'app-header': AppHeader,
        'app-body': NotFound404,
        'app-footer': AppFooter,
      }
    },
    {
      path: '/',
      components: {
        'app-body': homePage
      }
    },
    {
      path: '/search/result',
      components: {
        'app-header': AppHeader,
        'app-body': SearchIndex,
        'app-footer': AppFooter
      },
      children: [
        {
          path: '/',
          name: 'searchAll',
          components: {
            'leftPanel': leftPanel,
            'middlePanel': searchAll,
            'rightPanel': rightPanel,
          }
        },
        {
          path: 'media',
          name: 'searchMedia',
          components: {
            'leftPanel': leftPanel,
            'middlePanel': searchMedia,
            'rightPanel': rightPanel,
          }
        },
        {
          path: 'context',
          name: 'searchContext',
          components: {
            'leftPanel': leftPanel,
            'middlePanel': searchContext,
            'rightPanel': rightPanel,
          }
        },
        {
          path: 'null',
          name: 'searchNull',
          components: {
            'leftPanel': leftPanel,
            'middlePanel': SearchNull,
            'rightPanel': rightPanel,
          }
        },
      ]
    },

    {
      path: '/about_us',
      component: resolve => require(['../components/about_us.vue'], resolve)
    },
    {
      path: '/auth/login',
      components: {
        'app-body': Login,
      },
    },
    {
      path: '/auth/register',
      components: {
        'app-body': Register,
      },
    },
    {
      path: '/auth/reset/password',
      components: {
        'app-body': ResetPassword,
      },
    },
    {
      path: '/book/list',
      components: {
        'app-header': AppHeader,
        'app-body': BookList,
        'app-footer': AppFooter
      },
    },
    {
      path: '/book/info/:bookId',
      components: {
        'app-header': AppHeader,
        'app-body': BookInfo,
        'app-footer': AppFooter
      },
    },
    {
      path: '/book/content/:bookId/chapter',
      components: {
        'app-header': AppHeader,
        'app-body': BookContent,
        'app-footer': AppFooter
      },
    },
    {
      path: '/selected',
      components: {
        'app-header': AppHeader,
        'app-body': Selected,
        'app-footer': AppFooter
      }
    },
    {
      path: '/engineer/list',
      components: {
        'app-header': AppHeader,
        'app-body': EngineerList,
        'app-footer': AppFooter
      },
    },
    {
      path: '/engineer/info/:engineerId',
      components: {
        'app-header': AppHeader,
        'app-body': EngineerInfo,
        'app-footer': AppFooter
      },
    },
    {
      path: '/project/list',
      components: {
        'app-header': AppHeader,
        'app-body': ProjectList,
        'app-footer': AppFooter
      },
    },
    {
      path: '/project/info/:projectId',
      components: {
        'app-header': AppHeader,
        'app-body': ProjectInfo,
        'app-footer': AppFooter
      },
    },
    {
      path: '/literature/list',
      components: {
        'app-header': AppHeader,
        'app-body': LiteratureList,
        'app-footer': AppFooter
      },
    },
    {
      path: '/literature/info/:literatureId',
      components: {
        'app-header': AppHeader,
        'app-body': LiteratureInfo,
        'app-footer': AppFooter
      },
    },
    {
      path: '/user/info',
      components: {
        'app-header': AppHeader,
        'app-body': UserInfo,
        'app-footer': AppFooter
      },
    },
    {
      path: '/user/favorites',
      components: {
        'app-header': AppHeader,
        'app-body': UserFavorites,
        'app-footer': AppFooter
      },
    },
    {
      path: '/user/messages',
      components: {
        'app-header': AppHeader,
        'app-body': UserMessages,
        'app-footer': AppFooter
      },
    },
    {
      path: '/user/resources',
      components: {
        'app-header': AppHeader,
        'app-body': UserResources,
        'app-footer': AppFooter
      },
    },
  ]
})

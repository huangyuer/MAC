const homePage = resolve => {
  require.ensure(['../components/index.vue'], () => {
    resolve(require('../components/index.vue'))
  })
}

const SearchIndex = resolve => {
  require.ensure(['../components/search/searchIndex.vue'], () => {
    resolve(require('../components/search/searchIndex.vue'))
  })
}

const searchContext = resolve => {
  require.ensure(['../components/search/searchContext.vue'], () => {
    resolve(require('../components/search/searchContext.vue'))
  })
}
const searchMedia = resolve => {
  require.ensure(['../components/search/searchMedia.vue'], () => {
    resolve(require('../components/search/searchMedia.vue'))
  })
}
const searchAll = resolve => {
  require.ensure(['../components/search/searchAll.vue'], () => {
    resolve(require('../components/search/searchAll.vue'))
  })
}
const SearchNull = resolve => {
  require.ensure(['../components/search/searchNull.vue'], () => {
    resolve(require('../components/search/searchNull.vue'))
  })
}
const AppHeader = resolve => {
  require.ensure(['../components/public/AppHeader.vue'], () => {
    resolve(require('../components/public/AppHeader.vue'))
  })
}
const NotFound404 = resolve => {
  require.ensure(['../components/public/NotFound404.vue'], () => {
    resolve(require('../components/public/NotFound404.vue'))
  })
}

const MediaPopup = resolve => {
  require.ensure(['../components/public/MediaPopup.vue'], () => {
    resolve(require('../components/public/MediaPopup.vue'))
  })
}
const AppFooter = resolve => {
  require.ensure(['../components/public/AppFooter.vue'], () => {
    resolve(require('../components/public/AppFooter.vue'))
  })
}
// const paginator = resolve => {
//   require.ensure(['../components/public/paginator.vue'], () => {
//     resolve(require('../components/public/paginator.vue'))
//   })
// }
const leftPanel = resolve => {
  require.ensure(['../components/search/leftPanel.vue'], () => {
    resolve(require('../components/search/leftPanel.vue'))
  })
}
const rightPanel = resolve => {
  require.ensure(['../components/search/rightPanel.vue'], () => {
    resolve(require('../components/search/rightPanel.vue'))
  })
}

const BookList = resolve => {
  require.ensure(['../components/book/book_list.vue'], () => {
    resolve(require('../components/book/book_list.vue'))
  })
}
const BookInfo = resolve => {
  require.ensure(['../components/book/book_info.vue'], () => {
    resolve(require('../components/book/book_info.vue'))
  })
}

const BookContent = resolve => {
  require.ensure(['../components/book/book_content.vue'], () => {
    resolve(require('../components/book/book_content.vue'))
  })
}

const Selected = resolve => {
  require.ensure(['../components/selected.vue'], () => {
    resolve(require('../components/selected.vue'))
  })
}

const EngineerList = resolve => {
  require.ensure(['../components/engineer/engineer_list.vue'], () => {
    resolve(require('../components/engineer/engineer_list.vue'))
  })
}

const EngineerInfo = resolve => {
  require.ensure(['../components/engineer/engineer_info.vue'], () => {
    resolve(require('../components/engineer/engineer_info.vue'))
  })
}

const ProjectList = resolve => {
  require.ensure(['../components/project/project_list.vue'], () => {
    resolve(require('../components/project/project_list.vue'))
  })
}

const ProjectInfo = resolve => {
  require.ensure(['../components/project/project_info.vue'], () => {
    resolve(require('../components/project/project_info.vue'))
  })
}

const LiteratureList = resolve => {
  require.ensure(['../components/literature/literature_list.vue'], () => {
    resolve(require('../components/literature/literature_list.vue'))
  })
}

const LiteratureInfo = resolve => {
  require.ensure(['../components/literature/literature_info.vue'], () => {
    resolve(require('../components/literature/literature_info.vue'))
  })
}

const Login = resolve => {
  require.ensure(['../components/auth/sign_in.vue'], () => {
    resolve(require('../components/auth/sign_in.vue'))
  })
}

const Register = resolve => {
  require.ensure(['../components/auth/sign_up.vue'], () => {
    resolve(require('../components/auth/sign_up.vue'))
  })
}

const ResetPassword = resolve => {
  require.ensure(['../components/auth/password_reset.vue'], () => {
    resolve(require('../components/auth/password_reset.vue'))
  })
}

const ChangePassword = resolve => {
  require.ensure(['../components/usercenter/password_change.vue'], () => {
    resolve(require('../components/usercenter/password_change.vue'))
  })
}

const UserInfo = resolve => {
  require.ensure(['../components/usercenter/user_info.vue'], () => {
    resolve(require('../components/usercenter/user_info.vue'))
  })
}

const UserFavorites = resolve => {
  require.ensure(['../components/usercenter/user_favorites.vue'], () => {
    resolve(require('../components/usercenter/user_favorites.vue'))
  })
}
const UserMessages = resolve => {
  require.ensure(['../components/usercenter/user_messages.vue'], () => {
    resolve(require('../components/usercenter/user_messages.vue'))
  })
}
const UserResources = resolve => {
  require.ensure(['../components/usercenter/user_resources.vue'], () => {
    resolve(require('../components/usercenter/user_resources.vue'))
  })

}

export {
  homePage,
  SearchIndex,
  searchContext,
  AppHeader,
  AppFooter,
  leftPanel,
  rightPanel,
  SearchNull,
  NotFound404,
  searchMedia,
  searchAll,
  BookList,
  BookInfo,
  BookContent,
  MediaPopup,

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
  ChangePassword,
  UserFavorites,
  UserMessages,
  UserResources
  // paginator,
}

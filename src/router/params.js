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
const SearchNull = resolve => {
  require.ensure(['../components/search/searchNull.vue'], () => {
    resolve(require('../components/search/searchNull.vue'))
  })
}
const SearchBook = resolve => {
  require.ensure(['../components/search/searchBook.vue'], () => {
    resolve(require('../components/search/searchBook.vue'))
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
export {
  homePage,
  SearchIndex,
  searchContext,
  SearchBook,
  AppHeader,
  AppFooter,
  leftPanel,
  rightPanel,
  SearchNull,
  NotFound404,
  // paginator,
}

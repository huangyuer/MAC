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

const SearchAll = resolve => {
  require.ensure(['../components/search/searchAll.vue'], () => {
    resolve(require('../components/search/searchAll.vue'))
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
  SearchAll,
  SearchBook,
  AppHeader,
  AppFooter,
  leftPanel,
  rightPanel,
  // paginator,
}

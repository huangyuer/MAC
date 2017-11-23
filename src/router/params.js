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
  require.ensure(['../components/search/SearchAll.vue'], () => {
    resolve(require('../components/search/SearchAll.vue'))
  })
}
const SearchBook = resolve => {
  require.ensure(['../components/search/SearchBook.vue'], () => {
    resolve(require('../components/search/SearchBook.vue'))
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
export {
  homePage,
  SearchIndex,
  SearchAll,
  SearchBook,
  AppHeader,
  AppFooter,
}

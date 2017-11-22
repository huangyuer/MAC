const SearchIndex = resolve => {
  require.ensure(['../components/search/searchResult.vue'], () => {
    resolve(require('../components/search/searchResult.vue'))
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
  SearchIndex,
  SearchAll,
  SearchBook,
  AppHeader,
  AppFooter,
}

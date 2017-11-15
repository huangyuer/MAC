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

export {
  SearchIndex,
  SearchAll,
}

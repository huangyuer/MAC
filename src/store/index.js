import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
// import * as getters from './getters'
import book from './modules/book'
import category from './modules/category'
import bookCatalog from './modules/book_catalog'
import bookChapter from './modules/book_chapter'
import works from './modules/works'
import engineer from './modules/engineer'
import literature from './modules/literature'
import auth from './modules/auth'

import search from './modules/search'
import searchComponent from './modules/searchComponent'
import leftPanel from './modules/leftPanel'
import rightPanel from './modules/rightPanel'
import paginator from './modules/paginator'
import searchMedia from './modules/searchMedia'
import searchContext from './modules/searchContext'

Vue.use(Vuex)

const state = {
  rootUrl: 'http://118.178.238.202:8000/',
  coverUrlPrefix: 'http://118.178.238.202:9988/'
}

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    book,
    bookCatalog,
    bookChapter,
    category,
    search,
    searchComponent,
    leftPanel,
    rightPanel,
    paginator,
    auth,
    searchMedia,
    searchContext,
    works,
    literature,
    engineer
  },
  strict: debug
})

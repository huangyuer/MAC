import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
// import * as getters from './getters'
import book from './modules/book'
import category from './modules/category'

import search from './modules/search'
import searchComponent from './modules/searchComponent'
import leftPanel from './modules/leftPanel'
import rightPanel from './modules/rightPanel'
import paginator from './modules/paginator'

Vue.use(Vuex)

const state = {
  rootUrl: 'http://118.178.238.202:8000/'
}

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    book,
    category,
    search,
    searchComponent,
    leftPanel,
    rightPanel,
    paginator,
  },
  strict: debug
})

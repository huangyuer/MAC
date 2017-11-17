import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
// import * as getters from './getters'
import book from './modules/book'

import search from './modules/search'
import searchBar from './modules/searchBar'
import leftPanel from './modules/leftPanel'

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
    search,
    searchBar,
    leftPanel,
  },
  strict: debug
})

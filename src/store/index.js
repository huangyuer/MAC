import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
// import * as getters from './getters'
import book from './modules/book'

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
    book
  },
  strict: debug
})

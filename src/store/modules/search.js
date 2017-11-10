import api from '../api/search'

const state = {
  searchResult: ''
}

const actions = {
  searchAllResult ({commit}, data) {
    let promise = api.searchAll(data)
    promise.then((response) => {
      if (response.data.state === 1) {
        commit('searchAllResult', response.data)
      }
    }, (response) => {

    })
  }
}

const mutations = {
  searchAllResult (state, data) {
    state.searchResult = data
  }
}

export default {
  state,
  actions,
  mutations
}

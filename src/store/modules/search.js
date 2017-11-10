import api from '../api/search'

const state = {}

const actions = {
  searchAllResult ({commit}, data) {
    let promise = api.searchAll(data)
    promise.then((response) => {

    }, (response) => {

    })
  }
}

const mutations = {}

export default {
  state,
  actions,
  mutations,
}

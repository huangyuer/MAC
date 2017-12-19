const state = {
  rows: 10,
  total: -1,
}

const actions = {}

const mutations = {
  setPaginatorTotal (state, data) {
    state.total = data
  }
}

export default {
  state,
  actions,
  mutations,
}

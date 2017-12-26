const state = {
  rows: 10,
  total: 0,
}

const actions = {}

const mutations = {
  setPaginatorTotal (state, data) {
    state.total = data
  },
  setPaginatorRows (state, data) {
    state.rows = data
  }
}

export default {
  state,
  actions,
  mutations,
}

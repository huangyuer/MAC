const state = {
  rows: 10,
  total: '',
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

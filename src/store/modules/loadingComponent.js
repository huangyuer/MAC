const state = {
  loadingState: false,
  loadingQueue: [],
}
const actions = {}
const mutations = {
  setLoadingState (state, data) {
    if (data) {
      state.loadingQueue.push('a')
    } else {
      state.loadingQueue.pop()
    }
    if (state.loadingQueue.indexOf('a') >= 0) {
      state.loadingState = true
    } else {
      state.loadingState = false
    }
    console.log(state.loadingQueue.indexOf('a'))
  }
}

export default {
  state,
  mutations,
  actions,
}

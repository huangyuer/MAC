const state = {
  popupStatus: false,
  url: '',
  content: '',
  title: '',
}

const actions = {}

const mutations = {
  setMediaPopupStatus (state, data) {
    state.popupStatus = data
  },
  setMediaPopupUrl (state, data) {
    state.url = data
  },
  setMediaPopupContent (state, data) {
    state.content = data
  },
  setMediaPopupTitle (state, data) {
    state.title = data
  }
}

export default {
  state,
  actions,
  mutations
}

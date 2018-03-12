// state
const state = {
  thesisCategoryMenuVisible: true,
  leftThesisMenuVisible: false,
  leftThesisCategory: '所有类别'
}

const getters = {
  thesisCategoryMenuVisible: state => state.thesisCategoryMenuVisible,
  leftThesisMenuVisible: state => state.leftThesisMenuVisible,
  leftThesisCategory: state => state.leftThesisCategory
}

const actions = {

}

const mutations = {
  setThesisCategoryMenuVisible (state, thesisCategoryMenuVisible) {
    state.thesisCategoryMenuVisible = thesisCategoryMenuVisible
  },
  setLeftThesisMenuVisible (state, leftThesisMenuVisible) {
    state.leftThesisMenuVisible = leftThesisMenuVisible
  },
  setLeftThesisCategory (state, leftThesisCategory) {
    state.leftThesisCategory = leftThesisCategory
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

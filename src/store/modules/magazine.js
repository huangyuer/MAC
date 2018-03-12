// state
const state = {
  magazineCategoryMenuVisible: true,
  leftMagazineMenuVisible: false,
  leftMagazineCategory: '所有类别'
}

const getters = {
  magazineCategoryMenuVisible: state => state.magazineCategoryMenuVisible,
  leftMagazineMenuVisible: state => state.leftMagazineMenuVisible,
  leftMagazineCategory: state => state.leftMagazineCategory
}

const actions = {

}

const mutations = {
  setMagazineCategoryMenuVisible (state, magazineCategoryMenuVisible) {
    state.magazineCategoryMenuVisible = magazineCategoryMenuVisible
  },
  setLeftMagazineMenuVisible (state, leftMagazineMenuVisible) {
    state.leftMagazineMenuVisible = leftMagazineMenuVisible
  },
  setLeftMagazineCategory (state, leftMagazineCategory) {
    state.leftMagazineCategory = leftMagazineCategory
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

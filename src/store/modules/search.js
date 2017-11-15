import api from '../api/search'

const state = {
  searchResult: '',
}

const getters = {
  bookObj: state => state.searchResult.bookObj
}
const actions = {
  searchAllResult ({commit}, data) {
    let promise = api.searchAll(data)
    promise.then((response) => {
      if (response.data.state === 1) {
        commit('searchAllResult', response.data)
      } else {
        // alert(response.data.message)
      }
    }, (response) => {

    })
  },
  //根据书的ID列表获取书的详情
  displayBookList ({commit}, data) {
    let promise = api.displayBookList(data)
    promise.then((response) => {

    }, (response) => {

    })
  }
}

const mutations = {
  searchAllResult (state, data) {
    state.searchResult = data
  },
  displayBookList (state, data) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

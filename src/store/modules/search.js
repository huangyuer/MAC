import api from '../api/search'

const state = {
  searchResult: '',
  total: 0,
  searchBookList: [],
  took: '',
  currentPage: 1,
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
      if (response.data.state === '1') {
        commit('displayBookList', response.data)
      }
    }, (response) => {
      alert(response.data.message)
    })
  }
}

const mutations = {
  setCurrentPage (state, data) {
    state.currentPage = data
  },
  searchAllResult (state, data) {
    state.total = data.total
    state.searchResult = data
  },
  displayBookList (state, data) {
    console.log(data)
    state.total = data.total
    state.took = 23
    state.searchBookList = data.data
    state.currentPage = data.page
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

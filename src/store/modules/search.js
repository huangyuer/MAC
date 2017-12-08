import api from '../api/search'
import { bookItem } from '../objectDeclare'

const state = {
  allPageBookList: [],//搜索'全部'的时候图书的列表
}

const getters = {}
const actions = {
  searchAll ({commit}, data) {
    let promise = api.searchAll(data)
    promise.then((response) => {
      if (response.data.state === '1') {
        commit('searchAll', response.data.data)
      }
    }, (response) => {

    })
  }
}

const mutations = {
  searchAll (state, data) {
    console.log(data)
    state.allPageBookList = []
    let a = data.hits
    for (var i = 0; i < a.length; i++) {
      let b = new bookItem()
      let t = a[i].inner_hits.bookchapters.hits.hits//这是一个highlight的数组
      // console.log(t[0].highlight.content)
      let tt = t[0].highlight.content
      var stt = ''
      // for (var i = 0; i < tt.length; i++) {
      //   stt += tt[i]
      // }
      // console.log(stt)
      b.publisher = a[i]._source.publisher
      b.chiefEditor = a[i]._source.chiefEditor
      b.isbn = a[i]._source.isbn
      b.name = a[i]._source.name
      b.keywords = a[i]._source.keywords
      b.publishedAt = a[i]._source.publishedAt
      b.highlight = tt[0].replace('[').replace(']')
      b.cover = a[i]._source.cover
      state.allPageBookList.push(b)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

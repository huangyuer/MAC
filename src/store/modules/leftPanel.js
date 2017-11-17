import { levelOneCategoryItem } from '../objectDeclare'

const state = {
  levelOneCategoryList: []
}

const actions = {}

const mutations = {
  sendLeftPanelFromSearch (state, data) {
    console.log(data.bookObj)
    for (var k in data) {
      if (data[k].hasOwnProperty('name')) {
        var t = new levelOneCategoryItem()
        t.name = data[k].name
        t.count = data[k].count
        t.nickName = data[k].nickName
        state.levelOneCategoryList.push(t)
      }
    }
    console.log(state.levelOneCategoryList)
  }
}

export default {
  state,
  actions,
  mutations,
}

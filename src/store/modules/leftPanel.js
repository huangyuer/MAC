import { levelOneCategoryItem } from '../objectDeclare'

const state = {
  leftPanelItemList: [
    {
      name: '没有找到相关文献',
      children: []
    }
  ],
}

const actions = {}

const mutations = {
  //首页，全部搜索的时候展示的数据
  setAllPageLeftPanel (state, data) {
    state.leftPanelItemList = [
      {
        name: '没有找到相关文献',
        children: []
      }
    ]
    state.leftPanelItemList[0].name = '所有类别'
    state.leftPanelItemList[0].children.push({
      name: '图书',
      count: data.allDataCount,
      active: false,
    })
    state.leftPanelItemList[0].children.push({
      name: '工程',
      count: data.projectDataCount,
      active: false,
    })
    state.leftPanelItemList[0].children.push({
      name: '工程师',
      count: data.engineerDataCount,
      active: false
    })
    state.leftPanelItemList[0].children.push({
      name: '多媒体',
      count: data.mediaDataCount,
      active: false
    })
    state.leftPanelItemList[0].children.push({
      name: '企业需求',
      count: data.requirementDataCount,
      active: false
    })
    state.leftPanelItemList[0].children.push({
      name: '工程文献',
      count: data.literatureDataCount,
      active: false
    })
    state.leftPanelItemList[0].children.push({
      name: '知识产权',
      count: data.expertDataCount,
      active: false
    })
  },
  setActiveLevel2Category (state, data) {
    let d = state.leftPanelItemList[data.parentIndex]
    for (var i = 0; i < d.children.length; i++) {
      d.children[i].active = false
    }
    d.children[data.childIndex].active = true
  }
}

export default {
  state,
  actions,
  mutations,
}

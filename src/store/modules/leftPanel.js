import { levelOneCategoryItem } from '../objectDeclare'

const state = {
  leftPanelItemList: [
    {
      name: '没有找到相关文献',
      type: '',          //代表每个categoryItem的类型、
      children: []
    }
  ],
}

const actions = {}

const mutations = {
  //如果搜索数据为空的话可以调用这个
  setLeftPanelNoData (state, data) {
    state.leftPanelItemList = [
      {
        name: '没有找到相关文献',
        type: '',          //代表每个categoryItem的类型、
        children: []
      }
    ]
  },
  //清除所有侧边栏数据集
  clearLeftPanelData (state, data) {
    for (var i = 0; i < state.leftPanelItemList.length; i++) {
      state.leftPanelItemList[i].name = ''
      state.leftPanelItemList[i].type = ''
      state.leftPanelItemList[i].children = []
    }
  },
  //首页，全部搜索的时候展示的数据
  setAllPageLeftPanel (state, data) {
    state.leftPanelItemList = [
      {
        name: '没有找到相关文献',
        children: []
      }
    ]
    state.leftPanelItemList[0].name = '所有类别'
    state.leftPanelItemList[0].type = 'searchAll'
    state.leftPanelItemList[0].children.push({
      name: '图书',
      count: data.bookDataCount,
      active: false,
    })
    state.leftPanelItemList[0].children.push({
      name: '图书章节',
      count: data.bookChapterDataCount,
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
      count: data.expertPatentDataCount,
      active: false
    })
  },
  setActiveLevel2Category (state, data) {
    let d = state.leftPanelItemList[data.parentIndex]
    for (var i = 0; i < d.children.length; i++) {
      d.children[i].active = false
    }
    d.children[data.childIndex].active = true
  },
  //搜索图书的时候展示的数据
  setLeftPanelClickBookCategory (state, data) {
    state.leftPanelItemList = []
    let a = data[0].data
    let b = data[1].data
    let c = data[2].data
    let d = data[3].data
    state.leftPanelItemList.push(
      {
        name: '',
        type: '',
        children: []
      }
    )
    state.leftPanelItemList.push(
      {
        name: '',
        type: '',
        children: []
      }
    )
    state.leftPanelItemList.push(
      {
        name: '',
        type: '',
        children: []
      }
    )
    state.leftPanelItemList[0].name = '中图分类'
    state.leftPanelItemList[0].type = 'bookCategory'
    state.leftPanelItemList[1].name = '子库分类'
    state.leftPanelItemList[1].type = 'bookCategory'
    state.leftPanelItemList[2].name = '内容类别'
    state.leftPanelItemList[2].type = 'bookCategory'
    for (var i = 0; i < a.length; i++) {
      state.leftPanelItemList[0].children.push({
        name: a[i].key,
        count: a[i].doc_count,
        active: false
      })
    }
    for (var i = 0; i < b.length; i++) {
      state.leftPanelItemList[1].children.push({
        name: b[i].key,
        count: b[i].doc_count,
        active: false
      })
    }
    state.leftPanelItemList[2].children.push({
      name: '书籍',
      count: d.total,
      active: false
    })
    state.leftPanelItemList[2].children.push({
      name: '书籍章节',
      count: c.total,
      active: false
    })
  },
  setLeftPanelClickProject (state, data) {
    state.leftPanelItemList = []
    let a = data[0].data
    let b = data[1].data
    if (a.length > 0 || b.length > 0) {

      state.leftPanelItemList.push({
        name: '',
        type: '',
        children: []
      })
      state.leftPanelItemList.push({
        name: '',
        type: '',
        children: []
      })
      state.leftPanelItemList[0].name = '年代'
      state.leftPanelItemList[0].type = 'projectSecond'
      state.leftPanelItemList[1].name = '地区'
      state.leftPanelItemList[1].type = 'projectSecond'
      for (var i = 0; i < a.length; i++) {
        state.leftPanelItemList[0].children.push({
          name: a[i].key,
          count: a[i].doc_count,
          active: false
        })
      }
      for (var i = 0; i < b.length; i++) {
        if (b[i].key) {
          state.leftPanelItemList[1].children.push({
            name: b[i].key,
            count: b[i].doc_count,
            active: false
          })
        }
      }
    } else {
      state.leftPanelItemList = [
        {
          name: '没有找到相关文献',
          type: '',          //代表每个categoryItem的类型、
          children: []
        }
      ]
    }
  }
}

export default {
  state,
  actions,
  mutations,
}

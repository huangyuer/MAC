const state = {
  searchContent: '',
  levelOneCategoryList: [
    {
      name: '全部',
      active: true,
      nickName: 'all'
    },
    {
      name: '图书',
      active: false,
      nickName: 'book'
    },
    {
      name: '图片',
      active: false,
      nickName: 'pic'
    },
    {
      name: '公式',
      active: false,
      nickName: 'formula'
    },
    {
      name: '图表',
      active: false,
      nickName: 'charts'
    },
    {
      name: '视频',
      active: false,
      nickName: 'video'
    }
  ],
  currentLevelOneCategory: '',
}

const actions = {}

const mutations = {
  setSearchContent (state, data) {
    state.searchContent = data
  },
  setActiveLevelOneCategory (state, data) {
    for (var i = 0; i < state.levelOneCategoryList.length; i++) {
      state.levelOneCategoryList[i].active = false
    }
    state.levelOneCategoryList[data].active = true
    state.currentLevelOneCategory = state.levelOneCategoryList[data]
  }
}

export default {
  state,
  actions,
  mutations,
}

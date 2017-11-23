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
      name: '工程',
      acive: false,
      nickName: 'project'
    },
    {
      name: '工程师',
      active: false,
      nickName: 'engineer'
    },
    {
      name: '多媒体',
      active: false,
      nickName: 'pic'
    },
    {
      name: '企业需求',
      active: false,
      nickName: 'requirement'
    },

    {
      name: '工程文献',
      active: false,
      nickName: 'anli',
    },
    {
      name: '知识产权',
      active: false,
      nickName: 'knowledge'
    },

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
  },
}

export default {
  state,
  actions,
  mutations,
}

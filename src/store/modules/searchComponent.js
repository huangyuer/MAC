const state = {
  searchContent: '工程',
  levelOneCategoryList: [
    {
      name: '全部',
      active: true,
      nickName: 'all',
      type: 'all',
    },
    {
      name: '图书',
      active: false,
      nickName: 'book',
      type: 'text',
      children:['ISBN','作者','出版社']
    },
    {
      name: '工程',
      active: false,
      nickName: 'project',
      type: 'image',
      children:['']
    },
    {
      name: '工程师',
      active: false,
      nickName: 'engineer',
      type: 'image',
    },
    {
      name: '多媒体',
      active: false,
      nickName: 'pic',
      type: 'image',
    },
    {
      name: '企业需求',
      active: false,
      nickName: 'requirement',
      type: 'text',
    },

    {
      name: '工程文献',
      active: false,
      nickName: 'anli',
      type: 'text',
    },
    {
      name: '知识产权',
      active: false,
      nickName: 'knowledge',
      type: 'text',
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

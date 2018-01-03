const state = {
  searchContent: '工程',
  levelOneCategoryList: [
    {
      name: '全部',
      active: true,
      nickName: 'all',
      type: 'all',
      children: [],
    },
    {
      name: '图书',
      active: false,
      nickName: 'book',
      type: 'text',
      children: [
        {
          name: 'ISBN',
          active: false,
          keyword: 'isbn',
        },
        {
          name: '作者',
          active: false,
          keyword: 'chiefEditor',
        },
        {
          name: '书名',
          active: false,
          keyword: 'name',
        },
        {
          name: '类别',
          active: false,
          keyword: 'series',
        },
        {
          name: '关键字',
          active: false,
          keyword: 'keywords',
        },
        {
          name: '简介',
          active: false,
          keyword: 'summary'
        },
      ],
    },
    {
      name: '工程',
      active: false,
      nickName: 'project',
      type: 'image',
      children: [
        {
          name: '标题',
          active: false,
        },
        {
          name: '简介',
          active: false,
        },
        {
          name: '内容',
          active: false,
        },
        {
          name: '分类',
          active: false,
        }
      ]
    },
    {
      name: '工程师',
      active: false,
      nickName: 'engineer',
      type: 'image',
      children: [
        {
          name: '姓名',
          active: false,
        },
        {
          name: '学校',
          active: false,
        },
        {
          name: '简介',
          active: false,
        },
        {
          name: '内容',
          active: false,
        },
        {
          name: '行业',
          active: false,
        }
      ]
    },
    {
      name: '多媒体',
      active: false,
      nickName: 'pic',
      type: 'image',
      children: [],
    },
    {
      name: '企业需求',
      active: false,
      nickName: 'requirement',
      type: 'text',
      children: [
        {
          name: '名称',
          active: false
        },
        {
          name: '内容',
          active: false,
        },
        {
          name: '途径',
          active: false,
        },
        {
          name: '类别',
          active: false,
        }
      ]
    },

    {
      name: '工程文献',
      active: false,
      nickName: 'anli',
      type: 'text',
      children: [
        {
          name: '名称',
          active: false,
        },
        {
          name: '简介',
          active: false,
        },
        {
          name: '内容',
          active: false,
        },
        {
          name: '类别',
          active: false,
        }
      ]
    },
    {
      name: '知识产权',
      active: false,
      nickName: 'knowledge',
      type: 'text',
      children: []
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
  setLevelOneCategoryChildStatus (state, data) {
    for (var i = 0; i < state.levelOneCategoryList.length; i++) {
      if (state.levelOneCategoryList[i].name === data.name) {
        state.levelOneCategoryList[i].children[data.index].active = !state.levelOneCategoryList[i].children[data.index].active
      }
    }
  }
}

export default {
  state,
  actions,
  mutations,
}

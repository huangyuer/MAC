import api from '../api/search'
import {
  knowledgeItem,
  bookItem,
  projectItem,
  engineerItem,
  mediaItem,
  requirementItem,
  literatureItem
} from '../objectDeclare'

const state = {
  allPageBookList: [],//搜索'全部'的时候图书的列表
  allPageProjectList: [
    {
      children: []
    },
    {
      children: []
    },
    {
      children: []
    }
  ],//搜索'全部'的时候工程的列表
  allPageEngineerList: [
    {
      children: []
    },
    {
      children: []
    },
    {
      children: []
    }
  ],//搜索'全部'的时候工程师的列表
  allPageMediaList: [
    {
      children: []
    },
    {
      children: []
    },
    {
      children: []
    }
  ],//搜索'全部'的时候多媒体的列表
  allPageRequirementList: [],//搜索'全部'的时候企业需求的列表
  allPageLiteratureList: [],//搜索'全部'的时候文献的列表
  allPageKnowledgeList: [],//搜索'全部'的时候文献的列表
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
    let a = data.allData
    for (var i = 0; i < a.length; i++) {
      let b = new bookItem()
      let t = a[i].inner_hits.bookchapters.hits.hits//这是一个highlight的数组
      let tt = t[0].highlight.content
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
    let b = data.projectData
    var temp = []
    for (var i = 0; i < b.length; i++) {
      var project = new projectItem()
      project.title = b[i]._source.title
      project.summary = b[i]._source.summary
      project.cover = b[i]._source.cover
      project.highlight = b[i].highlight.content[0]
      temp.push(project)
    }
    for (var i = 0; i < state.allPageProjectList.length; i++) {
      state.allPageProjectList[i].children = temp.slice(3 * i, 3 * (i + 1))
    }
    let c = data.engineerData
    var temp = []
    for (var i = 0; i < c.length; i++) {
      var engineer = new engineerItem()
      engineer.name = c[i]._source.name
      engineer.avatar = c[i]._source.avagtar
      engineer.summary = c[i]._source.summary
      temp.push(engineer)
    }
    for (var i = 0; i < state.allPageEngineerList.length; i++) {
      state.allPageEngineerList[i].children = temp.slice(3 * i, 3 * (i + 1))
    }
    let d = data.mediaData
    var temp = []
    for (var i = 0; i < d.length; i++) {
      var media = new mediaItem()
      media.url = d[i]._source.url
      media.description = d[i]._source.description
      media.title = d[i]._source.title
      temp.push(media)
    }
    for (var i = 0; i < state.allPageMediaList.length; i++) {
      state.allPageMediaList[i].children = temp.slice(3 * i, 3 * (i + 1))
    }

    let e = data.requirementData
    state.allPageRequirementList = []
    for (var i = 0; i < e.length; i++) {
      var requirement = new requirementItem()
      requirement.name = e[i]._source.name
      requirement.province = e[i]._source.province
      requirement.city = e[i]._source.city
      requirement.requirement = e[i]._source.requirement
      requirement.content = e[i]._source.content
      requirement.createdAt = e[i]._source.createdAt
      requirement.keywords = e[i]._source.categories
      state.allPageRequirementList.push(requirement)
    }
    let f = data.literatureData
    state.allPageLiteratureList = []
    for (var i = 0; i < f.length; i++) {
      var literature = new literatureItem()
      literature.name = f[i]._source.name
      literature.cover = f[i]._source.cover
      literature.summary = f[i]._source.summary
      literature.createdAt = f[i]._source.createdAt
      state.allPageLiteratureList.push(literature)
    }
    let g = data.expertData
    let h = data.patentData
    state.allPageKnowledgeList = []
    for (var i = 0; i < g.length; i++) {
      var knowledge = new knowledgeItem()
      knowledge.name = g[i]._source.name
      knowledge.cover = g[i]._source.avatar
      knowledge.summary = g[i]._source.experience
      knowledge.createdAt = g[i]._source.createdAt
      state.allPageKnowledgeList.push(knowledge)
    }
    for (var i = 0; i < h.length; i++) {
      var knowledge = new knowledgeItem()
      knowledge.name = h[i]._source.name
      knowledge.cover = ''
      knowledge.summary = h[i]._source.summary
      knowledge.createdAt = h[i]._source.createdAt
      state.allPageKnowledgeList.push(knowledge)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

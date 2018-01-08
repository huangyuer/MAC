import api from '../api/search'
import router from '../../router/index'
import {
  knowledgeItem,
  bookItem,
  projectItem,
  engineerItem,
  mediaItem,
  contextItem,
  requirementItem,
  literatureItem,
  bookChapterItem,
} from '../objectDeclare'

const state = {
  serverPic: 'http://118.178.238.202:9988/',
  allPageBookList: [],//搜索'全部'的时候图书的列表
  allChapterList: [],//搜索'全部'的时候图书章节的列表
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

  bookList: [],//搜索图书列表
  literatureList: [],
  bookTotal: '',
}

const getters = {}
const actions = {
  searchAll ({commit}, data) {
    let promise = api.searchAll(data)
    promise.then((response) => {
      if (response.data.state === '1') {
        router.push('/search/result')
        commit('searchAll', response.data.data)
        //发送到leftPanel.js中去
        commit('setAllPageLeftPanel', response.data.data)
      }
    }, (response) => {
      console.log('error')
    })
  },
  searchBook ({commit}, data) {
    let promise = api.searchBook(data)
    promise.then((response) => {
      commit('searchBook', response.data)
      let d = response.data.hits
      commit('setPaginatorTotal', response.data.total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        context.chiefEditor = d[i]._source.chiefEditor
        context.type = '图书'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = 'http://118.178.238.202:9988/' + d[i]._source.cover
        context.keywords = d[i]._source.keywords
        context.highlight = d[i]._source.summary
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchProject ({commit}, data) {
    let promise = api.searchProject(data)
    promise.then((response) => {
      commit('searchProject', response.data)
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.cover
        media.description = d[i]._source.summary
        media.title = d[i]._source.title
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setSearchMediaTotal', response.data.total)
    }, (response) => {

    })
  },
  searchEngineer ({commit}, data) {
    let promise = api.searchEngineer(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.avagtar
        media.description = d[i]._source.summary
        media.title = d[i]._source.name
        media.id = d[i]._id
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setSearchMediaTotal', response.data.total)
    }, (response) => {

    })
  },
  searchMedia ({commit}, data) {
    let promise = api.searchMedia(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.url = 'http://118.178.238.202:9988/' + d[i]._source.url
        media.description = d[i]._source.description
        media.title = d[i]._source.title
        media.id = d[i]._id
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setSearchMediaTotal', response.data.total)
    }, (response) => {

    })
  },
  searchRequirement ({commit}, data) {
    let promise = api.searchRequirement(data)
    promise.then((response) => {
      // TODO:  企业需求现在没有数据
      let d = response.data.hits
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        context.type = '企业需求'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.createdAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      let total = response.data.total
      commit('setPaginatorTotal', total)
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchLiteriture ({commit}, data) {
    let promise = api.searchLiteriture(data)
    promise.then((response) => {
      commit('searchLiteriture', response.data)
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.chiefEditor = ''
        context.type = '工程文献'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.createdAt
        context.cover = d[i]._source.cover
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.summary
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchExpertPatent ({commit}, data) {
    let promise = api.searchExpertPatent(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.chiefEditor = ''
        if (d[i]._type === 'experts') {
          context.type = '专家'
        } else {
          context.type = '专利'
        }
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.createdAt
        context.cover = d[i]._source.avatar
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.intro
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchBookLeftPanel ({commit}, data) {
    let p = {
      searchContent: data.searchContent,
      keywords: data.keywords
    }
    let promise1 = api.searchBookClcs(p)
    let promise2 = api.searchBookSublibs(p)
    let promise3 = api.searchBookChapter(p)
    let promise4 = api.searchBook(p)
    Promise.all([promise1, promise2, promise3, promise4]).then(function (resp) {
      commit('setLeftPanelClickBookCategory', resp)
    })
  },
  searchProjectLeftPanel ({commit}, data) {
    let promise1 = api.searchProjectEra(data)
    let promise2 = api.searchProjectArea(data)
    Promise.all([promise1, promise2]).then(function (resp) {
      commit('setLeftPanelClickProject', resp)
    })
  },
  searchBookClcsDataList ({commit}, data) {
    let promise = api.searchBookClcsDataList(data)
    promise.then((response) => {
      let d = response.data.hits.hits
      let total = response.data.hits.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        context.chiefEditor = d[i]._source.chiefEditor
        context.type = '图书'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = 'http://118.178.238.202:9988/' + d[i]._source.cover
        context.keywords = d[i]._source.keywords
        context.highlight = d[i]._source.summary
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchBookChapterDataList ({commit}, data) {
    let promise = api.searchBookChapter(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        context.type = '图书章节'
        context.name = d[i]._source.name
        for (var jj = 0; jj < d[i].highlight.content.length; jj++) {
          context.highlight += d[i].highlight.content[jj]
        }
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchBookSublibsDataList ({commit}, data) {
    let promise = api.searchBookSublibsDataList(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      commit('setPaginatorTotal', total)
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        context.chiefEditor = d[i]._source.chiefEditor
        context.type = '图书'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = 'http://118.178.238.202:9988/' + d[i]._source.cover
        context.keywords = d[i]._source.keywords
        context.keywords = d[i]._source.keywords
        temp.push(context)
      }
      commit('setSearchContextData', temp)
    }, (response) => {

    })
  },
  searchEngineerLeftPanel ({commit}, data) {
    let promise1 = api.searchEngineerEraDataList(data)
    promise1.then((response) => {
    }, (response) => {

    })
    let promise2 = api.searchEngineerTradesDataList(data)
    promise2.then((response) => {

    }, (response) => {

    })
    Promise.all([promise1, promise2]).then(function (resp) {
      commit('setLeftPanelClickEngineerCategory', resp)
    })
  },
  searchRequirementLeftPanel ({commit}, data) {
    let promise1 = api.searchRequirementProvinceDataList(data)
    let promise2 = api.searchRequirementWayDataList(data)
    Promise.all([promise1, promise2]).then(function (resp) {
      commit('setLeftPanelClickRequirementCategory', resp)
    })
  },
  searchMediaLeftPanel ({commit}, data) {
    let promise = api.searchMediaDataList(data)
    promise.then((response) => {
      commit('setLeftPanelClickMediaCategorys', response.data)
    }, (response) => {

    })
  },
  searchLiteratureLeftPanel ({commit}, data) {
    let promise1 = api.searchLiteratureEraDataList(data)
    let promise2 = api.searchLiteratureCategoryDataList(data)
    Promise.all([promise1, promise2]).then(function (resp) {
      commit('setLeftPanelClickLiterature', resp)
    })
  },
  searchKnowledgeLeftPanel ({commit}, data) {
    let promise = api.searchKnowledgeCategoryDataList(data)
    promise.then((response) => {
      commit('setLeftPanelClickKnowledgeCategorys', response.data)
    }, (response) => {

    })
  },
  searchProjectEraChild ({commit}, data) {
    let promise = api.searchProjectEraChild(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.cover
        media.title = d[i]._source.title
        media.description = d[i]._source.summary
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchProjectAreaChild ({commit}, data) {
    let promise = api.searchProjectAreaChild(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.cover
        media.title = d[i]._source.title
        media.description = d[i]._source.summary
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {
    })
  },
  searchEngineerEraChild ({commit}, data) {
    let promise = api.searchEngineerEraChild(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.avagtar
        media.title = d[i]._source.name
        media.description = d[i]._source.summary
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchEngineerTradeChild ({commit}, data) {
    let promise = api.searchEngineerTradeChild(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = d[i]._source.avagtar
        media.title = d[i]._source.name
        media.description = d[i]._source.summary
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchBookchart ({commit}, data) {
    let promise = api.searchBookchart(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = 'http://118.178.238.202:9988/' + d[i]._source.url
        media.title = d[i]._source.title
        media.description = d[i]._source.description
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchBookformula ({commit}, data) {
    let promise = api.searchBookformula(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = 'http://118.178.238.202:9988/' + d[i]._source.url
        media.title = d[i]._source.title
        media.description = d[i]._source.description
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchBookimage ({commit}, data) {
    let promise = api.searchBookimage(data)
    promise.then((response) => {
      let d = response.data.hits
      let total = response.data.total
      let temp = []
      for (var i = 0; i < d.length; i++) {
        var media = new mediaItem()
        media.id = d[i]._id
        media.url = 'http://118.178.238.202:9988/' + d[i]._source.url
        media.title = d[i]._source.title
        media.description = d[i]._source.description
        temp.push(media)
      }
      commit('setSearchMediaData', temp)
      commit('setPaginatorTotal', total)
    }, (response) => {

    })
  },
  searchRequirementProvinceChild ({commit}, data) {
    let promise = api.searchRequirementProvinceChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '企业需求'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },
  searchRequirementWayChild ({commit}, data) {
    let promise = api.searchRequirementWayChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '企业需求'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },
  searchLiteratureEraChild ({commit}, data) {
    let promise = api.searchLiteratureEraChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '工程文献'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },
  searchLiteratureCategoryChild ({commit}, data) {
    let promise = api.searchLiteratureCategoryChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '工程文献'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },
  searchExpertChild ({commit}, data) {
    let promise = api.searchExpertChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '专家'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = d[i]._source.avatar
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.intro
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },
  searchPatentChild ({commit}, data) {
    let promise = api.searchPatentChild(data)
    promise.then((response) => {
      let d = response.data.hits
      var temp = []
      for (var i = 0; i < d.length; i++) {
        var context = new contextItem()
        context.id = d[i]._id
        // context.chiefEditor = d[i]._source.chiefEditor
        context.type = '专利'
        context.name = d[i]._source.name
        context.publishedAt = d[i]._source.publishedAt
        context.cover = ''
        context.keywords = d[i]._source.categories
        context.highlight = d[i]._source.content
        temp.push(context)
      }
      commit('setSearchContextData', temp)
      commit('setPaginatorTotal', response.data.total)
    }, (response) => {

    })
  },

}

const mutations = {
  searchAll (state, data) {
    console.log(data)
    state.allPageBookList = []
    let a = data.bookData
    for (var i = 0; i < a.length; i++) {
      let b = new bookItem()
      b.publisher = a[i]._source.publisher
      b.chiefEditor = a[i]._source.chiefEditor
      b.isbn = a[i]._source.isbn
      b.name = a[i]._source.name
      b.id = a[i]._id
      b.keywords = a[i]._source.keywords
      b.publishedAt = a[i]._source.publishedAt
      b.highlight = a[i]._source.summary
      b.cover = a[i]._source.cover
      state.allPageBookList.push(b)
    }
    let tts = data.bookChapterData
    for (var i = 0; i < tts.length; i++) {
      var chapter = new bookChapterItem()
      chapter.title = tts[i]._source.title
      chapter.id = tts[i]._id
      let dd_ = tts[i].highlight.content
      var sst = ''
      for (var j = 0; j < dd_.length; j++) {
        sst += dd_[j]
      }
      chapter.content = sst
      state.allChapterList.push(chapter)
    }
    let b = data.projectData
    var temp = []
    for (var i = 0; i < b.length; i++) {
      var project = new projectItem()
      project.title = b[i]._source.title
      project.summary = b[i]._source.summary
      project.cover = b[i]._source.cover
      project.highlight = b[i].highlight.content[0]
      project.id = b[i]._id
      temp.push(project)
    }
    for (var i = 0; i < state.allPageProjectList.length; i++) {
      state.allPageProjectList[i].children = temp.slice(3 * i, 3 * (i + 1))
    }
    let c = data.engineerData
    var temp = []
    for (var i = 0; i < c.length; i++) {
      var engineer = new engineerItem()
      engineer.id = c[i]._id
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
      literature.id = f[i]._id
      literature.name = f[i]._source.name
      literature.cover = f[i]._source.cover
      literature.summary = f[i]._source.summary
      literature.createdAt = f[i]._source.createdAt
      state.allPageLiteratureList.push(literature)
    }
    let g = data.expertPatentData
    state.allPageKnowledgeList = []
    for (var i = 0; i < g.length; i++) {
      var knowledge = new knowledgeItem()
      if (g[i]._type === 'experts') {
        knowledge.type = '专家'
      } else {
        knowledge.type = '专利'
      }
      knowledge.name = g[i]._source.name
      knowledge.cover = g[i]._source.avatar
      knowledge.summary = g[i]._source.experience
      knowledge.createdAt = g[i]._source.createdAt
      state.allPageKnowledgeList.push(knowledge)
    }
  },
  searchBook (state, data) {
    let d = data.hits
    state.bookTotal = data.hits.total
    for (var i = 0; i < d.length; i++) {
      var book = new bookItem()
      book.name = d[i]._source.name
      book.id = d[i]._id
      book.chiefEditor = d[i]._source.chiefEditor
      book.cover = d[i]._source.cover
      book.publishedAt = d[i]._source.publishedAt
      book.keywords = d[i]._source.keywords
      book.highlight = d[i]._source.summary
      state.bookList.push(book)
    }
  },
  searchProject (state, data) {

  },
  searchEngineer (state, data) {},
  searchMedia (state, data) {},
  searchRequirement (state, data) {},
  searchLiteriture (state, data) {

  },
  searchExpert (state, data) {},
  searchPatent (state, data) {},
}

export default {
  state,
  getters,
  actions,
  mutations
}

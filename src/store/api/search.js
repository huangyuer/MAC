import axios from 'axios'
import config from '../config'

export default {
  searchAll (data) {
    let apiUrl = `${config.API_HOST}/search/all`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchBook (data) {
    let apiUrl = `${config.API_HOST}/search/book`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchBookChapter (data) {
    let apiUrl = `${config.API_HOST}/search/bookchapter`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchProject (data) {
    let apiUrl = `${config.API_HOST}/search/project`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchEngineer (data) {
    let apiUrl = `${config.API_HOST}/search/engineer`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchMedia (data) {
    let apiUrl = `${config.API_HOST}/search/media`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchRequirement (data) {
    let apiUrl = `${config.API_HOST}/search/requirement`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchLiteriture (data) {
    let apiUrl = `${config.API_HOST}/search/literature`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchExpertPatent (data) {
    let apiUrl = `${config.API_HOST}/search/expertpatent`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //搜索图书时，侧边栏展示clcs分类
  searchBookClcs (data) {
    let apiUrl = `${config.API_HOST}/search/book/clcs`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //搜索图书时，侧边栏展示sublibs分类
  searchBookSublibs (data) {
    let apiUrl = `${config.API_HOST}/search/book/sublibs`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //通过clcs字段搜索图书
  searchBookClcsDataList (data) {
    let apiUrl = `${config.API_HOST}/search/clcs`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //通过sublibs搜索图书
  searchBookSublibsDataList (data) {
    let apiUrl = `${config.API_HOST}/search/sublibs`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //搜索工程时，侧边栏展示年代
  searchProjectEra (data) {
    let apiUrl = `${config.API_HOST}/search/project/era`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //搜索工程时，侧边栏展示地区
  searchProjectArea (data) {
    let apiUrl = `${config.API_HOST}/search/project/area`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //点击搜索上方的'工程师'或则searchAll界面上的'工程师'时
  searchEngineerEraDataList (data) {
    let apiUrl = `${config.API_HOST}/search/engineer/category/era`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //点击搜索上方的'工程师'或则searchAll界面上的'工程师'时
  searchEngineerTradesDataList (data) {
    let apiUrl = `${config.API_HOST}/search/engineer/category/trades`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //点击搜索上方的'企业需求'或则searchAll界面上的'需求'时
  searchRequirementProvinceDataList (data) {
    let apiUrl = `${config.API_HOST}/search/requirement/category/province`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //点击搜索上方的'企业需求'或则searchAll界面上的'需求'时
  searchRequirementWayDataList (data) {
    let apiUrl = `${config.API_HOST}/search/requirement/category/way`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //点击搜索上方的'企业需求'或则searchAll界面上的'工程师'时
  searchMediaDataList (data) {
    let apiUrl = `${config.API_HOST}/search/media/category`
    let promise = axios.post(apiUrl, data)
    return promise
  }
}

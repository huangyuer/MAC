import Vue from 'vue'
import config from '../config'

export default {
  getPaperDetails (paperId) {
    let apiUrl = `${config.API_HOST}/papers?${paperId}/details`
    return Vue.http.get(apiUrl)
  },
  getLatestPapers (limit, page) {
    // category = encodeURI(category)
    let apiUrl = `${config.API_HOST}/papers?&limit=${limit}&page=${page}&orderBy=latest`
    return Vue.http.get(apiUrl)
  },
}

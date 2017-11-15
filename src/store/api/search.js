import axios from 'axios'
import config from '../config'

export default {
  searchAll (data) {
    let apiUrl = `${config.API_HOST}/search/all`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  //根据书的ID列表获取书的详情
  displayBookList (data) {
    let apiUrl = `${config.API_HOST}/search/book`
    let promise = axios.post(apiUrl, data)
    return promise
  }
}

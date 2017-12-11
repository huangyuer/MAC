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
  searchExpert (data) {
    let apiUrl = `${config.API_HOST}/search/expert`
    let promise = axios.post(apiUrl, data)
    return promise
  },
  searchPatent (data) {
    let apiUrl = `${config.API_HOST}/search/patent`
    let promise = axios.post(apiUrl, data)
    return promise
  },
}

import Vue from 'vue'
import {API_ROOT} from '../../assets/js/config'

export default{
  getLatest (category, limit, page) {
  },
  getHottest (category, limit, page) {
  },
  getBookDetail (bookId) {
    let apiUrl = `${API_ROOT}/v1/books/${bookId}/details`
    let promise = Vue.http.get(apiUrl)
    return promise
  }
  // postBook (book) {
  //   let apiUrl = `${API_ROOT}/v1/books`;
  //   let promise = Vue.http.post(apiUrl, book);
  //   return promise;
  // },
  // postBookCategory (bookId, category) {
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}/category`;
  //   let promise = Vue.http.post(apiUrl, category);
  //   return promise;
  // },
  // putBookCategory (bookId, category) {
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}/category`;
  //   let promise = Vue.http.put(apiUrl, category);
  //   return promise;
  // },
  // moveToBookCategory (bookId, category, moveToId) {
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}/category/${moveToId}`;
  //   let promise = Vue.http.put(apiUrl, category);
  //   return promise;
  // },
  // deleteBookCategory (bookId, categoryId) {
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}/category/${categoryId}`;
  //   let promise = Vue.http.delete(apiUrl);
  //   return promise;
  // },
  // putBook (book) {
  //   let bookId = book._id || '';
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}`;
  //   delete book.id;
  //   let promise = Vue.http.put(apiUrl, book);
  //   return promise;
  // },
  // deleteBook (bookId) {
  //   let apiUrl = `${API_ROOT}/v1/books/${bookId}`;
  //   let promise = Vue.http.delete(apiUrl);
  //   return promise;
  // },
  // search(keywords, limit, page) {
  //   keywords = encodeURI(keywords);
  //   let apiUrl = `${API_ROOT}/v1/books/search?keywords=${keywords}&limit=${limit}&page=${page}`;
  //   let promise = Vue.http.get(apiUrl);
  //   return promise;
  // },
}

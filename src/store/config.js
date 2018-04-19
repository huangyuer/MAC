/**
 * Created by tolerious on 2017/10/25.
 */
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
  var config = {
    //  API_HOST: 'http://118.178.238.202:9988/v1'
    API_HOST: 'http://101.132.93.53/v1',
    rootUrl: 'http://118.178.238.202:8000/',
    coverUrlPrefix: 'http://47.100.38.51:8244/',
    BOOKS_PDF_SERVER_PREFIX: 'http://47.100.38.51:8080/pc/index.html?docuri=http://127.0.0.1:9090/books/', // 图书pdf服务地址前缀
    MAGAZINES_PDF_SERVER_PREFIX: 'http://47.100.38.51:8080/pc/index.html?docuri=http://127.0.0.1:9090/magzines/', // 期刊pdf服务地址前缀
    IMAGE_SERVER_PREFIX: 'http://47.100.38.51:8244/' // 图片服务地址前缀
  }
} else {
  var config = {
    API_HOST: 'http://101.132.93.53/v1',
    rootUrl: 'http://118.178.238.202:8000/',
    coverUrlPrefix: 'http://47.100.38.51:8244/',
    BOOKS_PDF_SERVER_PREFIX: 'http://47.100.38.51:8080/pc/index.html?docuri=http://127.0.0.1:9090/books/', // 图书pdf服务地址前缀
    MAGAZINES_PDF_SERVER_PREFIX: 'http://47.100.38.51:8080/pc/index.html?docuri=http://127.0.0.1:9090/magzines/', // 期刊pdf服务地址前缀
    IMAGE_SERVER_PREFIX: 'http://47.100.38.51:8244/' // 图片服务地址前缀
    // API_HOST: 'http://47.100.38.51:7878/v1'
    // API_HOST: 'http://118.178.238.202:9988/v1'
  }
}

export default config

/**
 * Created by tolerious on 2017/10/25.
 */
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
  var config = {
    //  API_HOST: 'http://118.178.238.202:9988/v1'
    API_HOST: 'http://101.132.93.53/v1',
  }
} else {
  var config = {
    API_HOST: 'http://101.132.93.53/v1'
    // API_HOST: 'http://47.100.38.51:7878/v1'
    // API_HOST: 'http://118.178.238.202:9988/v1'
  }
}

export default config

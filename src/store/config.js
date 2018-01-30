/**
 * Created by tolerious on 2017/10/25.
 */
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
  var config = { 
    API_HOST: 'http://118.178.238.202:9988/v1'
    // API_HOST: 'http://localhost:9988/v1'
  }
} else {
  var config = {
    API_HOST: 'http://118.178.238.202:9988/v1'
  }
}

export default config

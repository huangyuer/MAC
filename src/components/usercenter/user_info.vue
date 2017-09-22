<template>
  <div class="grzx_right">
    <div class="grzx_right1">
      <p>基本信息</p>
    </div>
    <div class="grzx_right2">
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>手机号</p>
          <b>*</b>
        </div>
        <div class="grzx_right21r">
          <select name="" id="" class="select_1">
            <option value="">+86</option>
            <option value="">+86</option>
          </select>
          <input type="text" value="17743012346" class="input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>用户名</p>
          <b>*</b>
        </div>
        <div class="grzx_right21r">
          <input type="text" value="用户名12345678" class="input_2 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>密码</p>
          <b>*</b>
        </div>
        <div class="grzx_right21r">
          <input type="password" value="用户名12345678" class="input_2 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>确认密码</p>
          <b>*</b>
        </div>
        <div class="grzx_right21r">
          <input type="password" value="用户名12345678" class="input_2 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>所在地</p>
        </div>
        <div class="grzx_right21r">
          <select name="" id="" class="select_2">
            <option value="">请选择省份</option>
            <option value="">内蒙古</option>
          </select>
          <select name="" id="" class="select_2 select_21">
            <option value="">请选择城市</option>
            <option value="">呼和浩特</option>
            <option value="">包头</option>
            <option value="">乌兰浩特</option>
          </select>
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>专业</p>
        </div>
        <div class="grzx_right21r">
          <input type="password" value="" class="input_3 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>公司</p>
          <b>*</b>
        </div>
        <div class="grzx_right21r">
          <input type="text" value="同济大学建筑学院" class="input_3 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>学历</p>
        </div>
        <div class="grzx_right21r">
          <input type="password" value="" class="input_3 input_1">
        </div>
      </div>
      <div class="grzx_right21">
        <div class="grzx_right21l">
          <p>邮箱</p>
        </div>
        <div class="grzx_right21r grzx_right21r">
          <input type="password" value="" class="input_3 input_1">
        </div>
      </div>
      <div class="grzx_right21 grzx_right22">
        <div class="grzx_right21l">
          <p>个人简介</p>
        </div>
        <div class="grzx_right21r grzx_right21r2">
          <textarea name="" id="" cols="30" rows="10" class="input_4">不超过四十字</textarea>
        </div>
      </div>
      <div class="grzx_a">
        <a href="">更新个人信息</a>
      </div>
    </div>
  </div>
</template>

<script>
  // import API_ROOT from '../../assets/js/config'
  // import {getCookie} from '../../assets/js/cookie'
  export default {
    name: 'user_info',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      // 初始化请求数据
      initData: function () {
//        var id = window.localStorage.id
//        this.$axios.get(API_ROOT + 'users/' + id + '/details', {headers: {Authorization: 'Bearer ' + getCookie('sessionToken')}})
//          .then(responseData => {
//            this.user = responseData.data
//          })
//          .catch(error => {
//            if (error.response) {
//              // 捕获非2xx异常
//              alert('Error:获取个人信息失败！')
//            } else {
//              // 网络错误触发
//              alert('Error:' + error.message)
//            }
//          })
      }
    },
    mounted () {
      this.initData()
    }
  }
</script>

<style src="../../assets/css/style.css">
</style>

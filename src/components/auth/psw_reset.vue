<template>
  <div class="zhmm">
    <div class="zhmm1">
      <p>找回密码</p>
    </div>
    <div class="zhmm2">
      <input type="text" placeholder="请输入手机号" v-model="phone">
    </div>
    <div class="zhmm3">
      <input type="text" placeholder="验证码" v-model="vercode">
      <a href="javascript:void(0);" @click="checkUser()">获取验证码</a>
    </div>
    <div class="zhmm2">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="zhmm2">
      <input type="password" placeholder="请再次输入密码" v-model="repassword">
    </div>
    <div class="zhmm4">
      <a href="javascript:void(0);" @click="pswReset()">确认</a>
    </div>
  </div>
</template>

<script>
  import {API_ROOT} from '../../assets/js/config'
  import {errorHandle} from '../../assets/js/common'
  import {checkLoginCookie} from '../../assets/js/cookie'
  export default {
    name: 'psw_reset',
    data () {
      return {
        phone: '',
        password: '',
        repassword: '',
        vercode: ''
      }
    },
    methods: {
      // 检查手机是否注册过
      checkUser: function () {
        this.$axios.get(API_ROOT + 'users/exists/mobile/' + this.phone)
          .then(responseData => {
            // 如果存在则请求发送验证码 否则提示尚未注册
            if (responseData.data.data) {
              this.resetMsg()
            } else {
              alert('该手机尚未注册，请先注册！')
            }
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 发送验证码
      resetMsg: function () {
        this.$axios.get(API_ROOT + 'sms/sendcode/' + this.phone + '?kind=PASSWORD')
          .then(responseData => {
            console.log(responseData)
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 找回密码
      pswReset: function () {
        this.$axios.put(API_ROOT + 'users/reset/password/by/mobile',
          {
            'mobile': this.phone,
            'vercode': this.vercode,
            'password': this.password,
            'rePassword': this.repassword,
            'username': this.phone,
            'nickname': this.phone
          })
          .then(responseData => {
            // 找回成功则回到首页
            alert('找回密码成功！将返回重新登录！')
            this.$router.push({path: '/sign_in'})
          })
          .catch(error => {
            if (error.response) {
              // 捕获非2xx异常
              alert('Error:' + error.response.data.error)
            } else {
              // 网络错误触发
              alert('Error:' + error.message)
            }
          })
      },
      // 检查是否登录或token是否失效
      checkToken: function () {
        if (checkLoginCookie()) {
          // 若未失效则跳转到首页
          alert('您已登录！将转至首页！')
          this.$router.push({path: '/'})
        }
      }
    },
    mounted () {
      this.checkToken()
    }
  }
</script>

<style>
</style>

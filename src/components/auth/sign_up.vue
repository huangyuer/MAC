<template>
  <div class="reg">
    <p>账号注册</p>
    <div class="zhmm2">
      <input type="text" placeholder="请输入手机号" class="input_111" v-model="phone">
    </div>
    <div class="zhmm3">
      <input type="text" placeholder="验证码" v-model="vercode">
      <a href="javascript:void(0);" @click="regMsg()">获取验证码</a>
    </div>
    <div class="clear"></div>
    <div class="zhmm2">
      <input type="password" placeholder="请输入密码" class="input_333" v-model="password">
    </div>
    <div class="zhmm2">
      <input type="password" placeholder="请再一次输入密码" class="input_444" v-model="repassword">
    </div>
    <small>注册代表您已经阅读并同意<a href="javascript:void(0);"><b>《xxxxx交易平台用户协议》</b></a></small>
    <em><a href="javascript:void(0);" @click="signUp()">注 册</a></em>
    <strong>已有账号？
       去<router-link to="/sign_in"><a href="javascript:void(0);">登录</a></router-link>
    </strong>
  </div>
</template>

<script>
  import {setCookie, checkLoginCookie} from '../../assets/js/cookie'
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'sign_up',
    data () {
      return {
        phone: '',
        password: '',
        repassword: '',
        vercode: ''
      }
    },
    watch: {
    },
    methods: {
      // 发送验证码
      regMsg: function () {
        this.$axios.get('sms/sendcode/' + this.phone + '?kind=REGISTER')
          .then(responseData => {
            console.log(responseData)
          })
          .catch(responseData => {
            console.log(responseData)
          })
      },
      // 注册
      signUp: function () {
        this.$axios.post('users/register/by/mobile',
          {
            'mobile': this.phone,
            'vercode': this.vercode,
            'password': this.password,
            'repassword': this.repassword,
            'username': this.phone,
            'nickname': this.phone
          })
          .then(responseData => {
            console.log(responseData)
            // 注册成功自动登录
            alert('注册成功！')
            this.signIn()
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 登录
      signIn: function () {
        this.$axios.post('users/login',
          {
            'username': this.phone,
            'password': this.password
          })
          .then(responseData => {
            // 保存到document.cookie并回到首页
            let token = responseData.data.sessionToken
            window.localStorage.id = responseData.data.userId
            setCookie('sessionToken', token)
            this.$router.push({path: '/'})
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 检查是否登录或token是否失效
      checkToken: function () {
        if (checkLoginCookie()) {
          // 若未失效则跳转到首页
          alert('您已登录！请先退出再重新注册！')
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

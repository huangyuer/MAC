<template>
  <div class="log">
    <p>欢迎回来</p>
    <div class="zhmm2">
      <input type="text" placeholder="手机号" v-model="phone">
    </div>
    <div class="zhmm2">
      <input type="password" placeholder="密码" v-model="password">
    </div>
    <div class="zhmm2">
      <input type="checkbox" class="input_555" v-model="isRemembered">
      <span>记住我</span>
      <router-link to="/psw_reset">
        <em><a href="javascript:void(0);">找回密码</a></em>
      </router-link>
    </div>
    <div class="clear"></div>
    <small><a href="javascript:void(0);" @click="signIn()">登录</a></small>
    <strong>还没有账号？
      <router-link to="/sign_up"><a href="javascript:void(0);">注册</a></router-link>
    </strong>
  </div>
</template>

<script>
  import {setCookie, updateCookie, checkLoginCookie} from '../../assets/js/cookie'
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'sign_in',
    data () {
      return {
        phone: '',
        password: '',
        isRemembered: false
      }
    },
    methods: {
      // 登录
      signIn: function () {
        this.$axios.post('v1/users/login',
          {
            'username': this.phone,
            'password': this.password
          })
          .then(responseData => {
            // 保存到document.cookie, 保存id到localStorage并回到首页
            let token = responseData.data.sessionToken
            window.localStorage.id = responseData.data.userId
            if (this.isRemembered) {
              updateCookie('sessionToken', token, '7')
            } else {
              setCookie('sessionToken', token)
            }
            alert('登录成功！将转至首页！')
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

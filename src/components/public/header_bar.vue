<template>
  <div class="top_bg">
    <div class="top">
      <div class="top_login" v-show="!isSignedIn">
        <router-link to="/sign_in">
          <a href="javascript:void(0);" class="login_btn">登录</a>
        </router-link>
        <router-link to="/sign_up">
          <a href="javascript:void(0);" class="reg_btn">注册</a>
        </router-link>
      </div>
      <div class="top_login1" v-show="isSignedIn">
        <router-link to="/user/info">
          <a href="javascript:void(0);" class="login_btn">个人中心</a>
        </router-link>
        <a href="javascript:void(0);" class="reg_btn" @click="signOut()">退出登录</a>
      </div>
      <div class="home">
        <a href="javascript:void(0);">首页</a>|
        <a href="javascript:void(0);">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {checkLoginCookie, deleteCookie} from '../../assets/js/cookie'
  export default {
    name: 'header_bar',
    data () {
      return {
        isSignedIn: false
      }
    },
    methods: {
      // 检查token是否失效
      checkToken: function () {
        if (checkLoginCookie()) {
          // 若未失效则登录注册切换显示个人中心
          this.isSignedIn = true
        }
      },
      // 退出登录
      signOut: function () {
        // 删除cookie检查状态成功则退出
        deleteCookie('sessionToken')
        if (!checkLoginCookie()) {
          alert('退出成功！')
          this.isSignedIn = false
        }
      }
    },
    mounted () {
      this.checkToken()
    }
  }
</script>

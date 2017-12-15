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
      <router-link to="/auth/reset/password">
        <em><a href="javascript:void(0);">找回密码</a></em>
      </router-link>
    </div>
    <div class="clear"></div>
    <small><a href="javascript:void(0);" @click="login()">登录</a></small>
    <strong>还没有账号？
      <router-link to="/auth/register"><a href="javascript:void(0);">注册</a></router-link>
    </strong>
  </div>
</template>

<script>
  import {setCookie, updateCookie, checkLoginCookie} from '../../assets/js/cookie'
  import Vue from 'vue'
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
    computed: {
      loginError () {
        return this.$store.getters.loginError;
      },
      loggedIn () {
        return this.$store.getters.loggedIn;
      }
    },
    watch: {
      loggedIn: {
        handler: function (val, oldVal) {
          console.log('loggedIn');
          if(val){
            this.$router.push({path: '/'});
          }
        }
      }
    },
    methods: {
      checkLoginValidation: function () {
        let msg = "";
        if (this.phone === '' || this.password === '') {
          msg = "用户名或密码不能为空";
        }
        return msg;
      },
      // 登录
      login: function() {
        let msg = this.checkLoginValidation();
        if (msg !== '') {
            alert(msg);
            return;
        }
        this.$store.dispatch('login', {'username': this.phone, 'password': this.password});
      },
      // 检查是否已登录
      checkLoginStatus: function () {
        if (this.loggedIn) {
          // 若未失效则跳转到首页
          alert('您已登录！将转至首页！')
          this.$router.push({path: '/'})
        }
      }
    },
    mounted () {
      //this.checkLoginStatus()
    }
  }
</script>

<style>
</style>

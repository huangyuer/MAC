<template>
  <div class="app-header">
    <div class="inner">

      <div class="logo-container">
        <a href="/"><img src="../../assets/images/header-logo.png" alt=""></a>
      </div>
<<<<<<< HEAD

=======
    
>>>>>>> dev
      <div v-show="!loggedIn" class="login-container">
        <div @click="login" class="btn btn-login">
          <span>登 录</span>
        </div>
        <div @click="register" class="btn btn-register">
          <span>注 册</span>
        </div>
      </div>
      <div v-show="loggedIn" class="grzx_grzx">
<<<<<<< HEAD
        <router-link to="/user/info">
          <a href="javascript:void(0);">
            <img src="../../assets/images/grzx_ico1.png" alt="">
          </a>
        </router-link>
        <router-link to="">
          <a href="javascript:void(0);" @click="logout()">
            <p>退出登录</p>
          </a>
        </router-link>
      </div>

      <div class="z_home home ">
        <router-link to="/"><a href="javascript:void(0);">首页</a></router-link>
        |
        <router-link to="/about_us"><a href="javascript:void(0);">关于我们</a></router-link>
      </div>
=======
          <router-link to="/user/info">
            <a href="javascript:void(0);">
              <img src="../../assets/images/grzx_ico1.png" alt="">
            </a>
          </router-link>
          <router-link to="">
            <a href="javascript:void(0);" @click="logout()">
              <p>退出登录</p>
            </a>
          </router-link>
        </div>

        <div class="z_home home ">
          <router-link to="/"><a href="javascript:void(0);">首页</a></router-link>
          |
          <router-link to="/about_us"><a href="javascript:void(0);">关于我们</a></router-link>
        </div>
>>>>>>> dev
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/public/appHeader.scss";
</style>
<script>
<<<<<<< HEAD
  import { getCookie, setCookie, deleteCookie } from '../../utils/cookie'

=======
  import {getCookie, setCookie, deleteCookie} from '../../utils/cookie';
>>>>>>> dev
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {
<<<<<<< HEAD
      login: function () {
        this.$rotuer.push('/auth/login')
      },
      register: function () {
        this.$rotuer.push('/auth/register')
=======
      login: function(){
        this.$rotuer.push('/auth/login');
      },
      register: function(){
        this.$rotuer.push('/auth/register');
>>>>>>> dev
      },
      // 退出登录
      logout: function () {
        deleteCookie('sessionToken')
<<<<<<< HEAD
        this.$store.commit('setLoggedOut')
        this.$router.push({path: '/'})
=======
        this.$store.commit('setLoggedOut'); 
        this.$router.push({path: '/'});
>>>>>>> dev
      },
    },
    computed: {
      loggedIn () {
<<<<<<< HEAD
        let logged = this.$store.getters.loggedIn
        if (logged) {
          return true
        }
        let userInfo = getCookie('userInfo')
        if (userInfo) {
          let user = JSON.parse(userInfo)
          return user
        } else {
          return this.$store.getters.userInfo
        }
      },

=======
        let logged =  this.$store.getters.loggedIn; 
        if(logged){
          return true;
        }
        let userInfo = getCookie('userInfo');
        if (userInfo) {
          let user = JSON.parse(userInfo);
          return user;
        } else { 
          return this.$store.getters.userInfo; 
        }
      },
      
>>>>>>> dev
    },
    filters: {}

  }
</script>

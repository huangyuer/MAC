<template>
  <div class="app-header">
    <div class="inner">

      <div class="logo-container">
        <a href="/"><img src="../../assets/images/header-logo.png" alt=""></a>
      </div>

      <div v-show="!loggedIn" class="login-container">
        <div @click="login" class="btn btn-login">
          <span>登 录</span>
        </div>
        <div @click="register" class="btn btn-register">
          <span>注 册</span>
        </div>
      </div>
      <div v-show="loggedIn" class="grzx_grzx">
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
        <!-- <router-link to="/#/selected"><a href="/#/selected" class="menu_item link">工程与工程师</a></router-link>|
          <router-link to="http://trade.tjdesignx.com/#/"><a href="http://trade.tjdesignx.com/#/" class="menu_item link">版权贸易</a></router-link>|
           <router-link to="http://bbs.tjdesignx.com/#/"><a href="http://bbs.tjdesignx.com/#/" class="menu_item link">工程技术论坛</a></router-link>|
           <router-link to="http://x.tjdesignx.com/#/"><a href="http://x.tjdesignx.com/#/" class="menu_item link">同济设计在线</a></router-link>|
           <router-link to="http://bim.tjdesignx.com/#/"><a href="http://bim.tjdesignx.com/#/" class="menu_item link">BIM培训中心</a></router-link>| -->
        <router-link to="/about/us"><a href="javascript:void(0);">关于我们</a></router-link>
      </div>


      <!--</div>-->

      <!--<div class="z_home home ">-->
      <!--<router-link to="/"><a href="javascript:void(0);">首页</a></router-link>-->
      <!--|-->
      <!--<router-link to="/about_us"><a href="javascript:void(0);">关于我们</a></router-link>-->
      <!--</div>-->

    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/public/appHeader.scss";
</style>
<script>

  import { getCookie, setCookie, deleteCookie } from '../../utils/cookie'

  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {

      login: function () {
        this.$rotuer.push('/auth/login')
      },
      register: function () {
        this.$rotuer.push('/auth/register')

      },
      // 退出登录
      logout: function () {
        deleteCookie('sessionToken')
        deleteCookie('userInfo')
        this.$store.commit('setLoggedOut')
        this.$router.push({path: '/'})

      },
    },
    computed: {
      loggedIn () {
        try {
          let logged = this.$store.getters.loggedIn
          if (logged) {
            return true
          }
          let userInfo = getCookie('userInfo')
          if (userInfo) {
            try {
              let user = JSON.parse(userInfo)
              return user
            } catch (e) {
              return this.$store.getters.userInfo
            }
          } else {
            return this.$store.getters.userInfo
          }
        } catch (e) {

        }

      },
    },
    filters: {}

  }
</script>

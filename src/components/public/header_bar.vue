<template>
  <div class="top_bg">

    <div class="top">
      <div class="top_menu">
        <a href="http://home.tjdesignx.com/#/" class="menu_item">首页</a>
        <a href="http://trade.tjdesignx.com/#/" class="menu_item">版权贸易</a>
        <a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a>
        <a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a>
        <a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a>
        <a href="http://trade.tjdesignx.com/#/about_us" class="menu_item">关于我们</a>
      </div>

      <div class="top_wap_menu">
        <div class="btn_menu" @click="toggleMenu()"><img src="../../assets/images/menu.png" alt=""></div>
        <div class="menu_nav" v-show="isMenuClicked">
          <ul>
            <li><a href="http://home.tjdesignx.com/#/" class="menu_item link active">首页</a></li>
            <li><a href="http://trade.tjdesignx.com/#/" class="menu_item link">版权贸易</a></li>
            <li><a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a></li>
            <li><a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a></li>
            <li><a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a></li>
            <li style="border-bottom:none;"><a href="http://trade.tjdesignx.com/#/about_us" class="menu_item">关于我们</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="top_login1" v-show="isSignedIn">
        <router-link to="/user/info">
          <a href="javascript:void(0);" class="login_btn">个人中心</a>
        </router-link>
        <a href="javascript:void(0);" class="reg_btn" @click="signOut()">退出登录</a>
      </div>
      <div class="top_login1" v-show="!isSignedIn">
        <router-link to="/auth/login">
          <a href="javascript:void(0);" class="login_btn">登录</a>
        </router-link>
        <router-link to="/auth/register">
          <a href="javascript:void(0);" class="reg_btn">注册</a>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  import { checkLoginCookie, deleteCookie } from '../../assets/js/cookie'

  export default {
    name: 'header_bar',
    data () {
      return {
        isSignedIn: false,
        isMenuClicked: false
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
      },
      // 移动端menu切换显示
      toggleMenu: function (event) {
        this.isMenuClicked = !this.isMenuClicked
      }
    },
    mounted () {
      this.checkToken()
    }
  }
</script>

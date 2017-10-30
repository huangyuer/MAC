<template>
  <div class="index_bg">
    <div class="top" >
      <div class="top_menu">
        <a href="javascript:void(0);" class="menu_item link active">首页</a>
        <a href="http://116.62.203.205:8300/#/" class="menu_item link">版权贸易</a>
        <a href="http://118.178.238.202:8608/" class="menu_item">工程技术论坛</a>
        <a href="javascript:void(0);" class="menu_item">同济设计在线</a>
        <a href="javascript:void(0);" class="menu_item">BIM培训中心</a>
        <a href="http://116.62.203.205:8300/#/about_us" class="menu_item">关于我们</a>
      </div>

      <div class="top_wap_menu">
        <div class="btn_menu" @click="toggleMenu()"><img src="../assets/images/menu.png" alt=""></div>
        <div class="menu_nav" v-show="isMenuClicked" >
          <ul>
            <li><a href="javascript:void(0);" class="menu_item link active">首页</a></li>
            <li><a href="http://116.62.203.205:8300/#/" class="menu_item link">版权贸易</a></li>
            <li><a href="http://118.178.238.202:8608/" class="menu_item">工程技术论坛</a></li>
            <li><a href="javascript:void(0);" class="menu_item">同济设计在线</a></li>
            <li><a href="javascript:void(0);" class="menu_item">BIM培训中心</a></li>
            <li style="border-bottom:none;"><a href="http://116.62.203.205:8300/#/about_us" class="menu_item">关于我们</a></li>
          </ul>
        </div>
      </div>

      <div class="top_login1" v-show="isSignedIn">
        <router-link to="/user/info">
          <a href="javascript:void(0);" class="login_btn1">个人中心</a>
        </router-link>
        <a href="javascript:void(0);" class="reg_btn1" @click="signOut()">退出登录</a>
      </div>
      <div class="top_login1" v-show="!isSignedIn">
        <router-link to="/sign_in">
          <a href="javascript:void(0);" class="login_btn1">登录</a>
        </router-link>
        <router-link to="/sign_up">
          <a href="javascript:void(0);" class="reg_btn1">注册</a>
        </router-link>
      </div>
    </div>
    <div class="clear"></div>
    <div class="search_logo">
      <img src="../assets/images/logo1.png" alt="">
      <p>同济工程数据库</p>
    </div>
    <div class="serach_l">
      <div class="search_ul">
        <ul>
          <li><a href="">全部 </a></li>
          <li class="ul_cur"><a href="">图书 </a></li>
          <li><a href="">工程师 </a></li>
          <li><a href="">工程师图片 </a></li>
          <li><a href="">公式 </a></li>
          <li><a href="">上海建筑规范 </a></li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="slist">
        <form action="">
          <input type="text" class="s_in" placeholder="请输入关键字" style="outline: none">
          <input type="submit" class="s_btn" value="搜索" style="outline: none">
        </form>
      </div>
    </div>
    <div class="bot">
      <p>Copyright @2017 Tongjl.All Rights Reserved.<br>
        同济大学出版祉版权所有 上海市杨浦区赤峰路2号 021-0000000</p>
    </div>
  </div>
</template>

<script>
import {checkLoginCookie, deleteCookie} from '../assets/js/cookie'
export default {
  name: 'index',
  data () {
    return {
      isSignedIn: false,
      isMenuClicked: false
    }
  },
  components: {
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

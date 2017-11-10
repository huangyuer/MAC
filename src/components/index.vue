<template>
  <div class="index_bg">
    <div class="top">
      <div class="top_menu"> 
        <a href="/" class="menu_item active">首页</a>
        <a href="/" class="menu_item">工程数据库</a>
        <a href="http://home.tjdesignx.com/#/" class="menu_item">工程与工程师</a>
        <a href="http://trade.tjdesignx.com/#/" class="menu_item">版权贸易</a>
        <a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a>
        <a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a>
        <a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a> 
      </div>

      <div class="top_wap_menu">
        <div class="btn_menu" @click="toggleMenu()"><img src="../assets/images/menu.png" alt=""></div>
        <div class="menu_nav" v-show="isMenuClicked">
          <ul> 
            <li><a href="/" class="menu_item active">首页</a><li>
            <li><a href="/" class="menu_item">工程数据库</a></li>
            <li><a href="http://home.tjdesignx.com/#/" class="menu_item">工程与工程师</a></li>
            <li><a href="http://trade.tjdesignx.com/#/" class="menu_item">版权贸易</a></li>
            <li><a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a></li>
            <li><a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a></li>
            <li style="border: none"><a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a></li> 
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
      <p>中国工程与工程师史文化应用交互平台</p>
    </div>
    <div class="serach_l">
      <div class="search_ul">
        <ul> 
          <li :class="{'ul_cur':i.active}" v-for="i in levelOneCategoryList"><a href="">{{i.name}}</a></li> 
        </ul>
      </div>
      <div class="clear"></div>
      <div class="slist">
        <form action=""> 
 
          <input v-model="searchContent" type="text" class="s_in" placeholder="请输入关键字" style="outline: none">
          <input @click="clickSearch" type="submit" class="s_btn" value="搜索" style="outline: none">
 
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
  import { checkLoginCookie, deleteCookie, setCookie } from '../assets/js/cookie'

  export default {
    name: 'index',
    data () {
      return {
        isSignedIn: false,
        isMenuClicked: false,
        searchContent: '',
        levelOneCategoryList: [
          {
            name: '全部',
            active: true
          },
          {
            name: '图书',
            active: false
          },
          {
            name: '图片',
            active: false
          },
          {
            name: '公式',
            active: false
          },
          {
            name: '图标',
            active: false
          },
          {
            name: '视频',
            active: false
          }
        ]
      }
    },
    components: {},
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
      },
      clickSearch: function () {
        this.$router.push('/search/result')
        var p = {
          rows: 1,
          page: 1,
          searchContent: this.searchContent,
          levelOneCategory: this.levelOneCategory,
          levelTwoCategoryList: this.levelTwoCategoryList
        }
        this.$axios.post('search', p).then(function (resp) {
          console.log(resp)
        })
      }
    },
    mounted () {
      this.checkToken()
    },
    watch: {
      searchContent: function (val) {
        setCookie('searchContent', val)
        console.log(val)
      }
    }
  }
</script>

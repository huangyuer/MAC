<template>
  <div id="particles-js">
    <div class="top">

      <div class="top_menu">
        <ul class="nav">
          <li><a href="/" class="menu_item active">首页</a><li>
          <li class="drop-down"><a class="menu_item">工程数据库</a>
            <div class="triangle-up"></div>
            <ul class="drop-down-content">
              <li v-for="lib in libList"><a class="menu_item" :href="lib.url" v-text="lib.title"></a>
              </li>
            </ul>
          </li>
          <li><a href="http://home.tjdesignx.com/#/" class="menu_item">工程与工程师</a></li>
          <li><a href="http://trade.tjdesignx.com/#/" class="menu_item">版权贸易</a></li>
          <li><a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a></li>
          <li><a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a></li>
          <li><a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a></li>
        </ul>
      </div>

      <div class="top_wap_menu">
        <div class="btn_menu" @click="toggleMenu()"><img src="../assets/images/menu.png" alt=""></div>
        <div class="menu_nav" v-show="isMenuClicked">
          <ul>
            <li><a href="/" class="menu_item active">首页</a><li>
            <li><a class="menu_item" href="javascript:;" @click="isLibListShow = !isLibListShow">工程数据库</a>
              <ul v-show="isLibListShow">
                <li v-for="lib in libList"><a :href="lib.url" v-text="lib.title"></a>
                </li>
              </ul>
            </li>
            <li><a href="http://home.tjdesignx.com/#/" class="menu_item">工程与工程师</a></li>
            <li><a href="http://trade.tjdesignx.com/#/" class="menu_item">版权贸易</a></li>
            <li><a href="http://bbs.tjdesignx.com/#/" class="menu_item">工程技术论坛</a></li>
            <li><a href="http://x.tjdesignx.com/#/" class="menu_item">同济设计在线</a></li>
            <li><a href="http://bim.tjdesignx.com/#/" class="menu_item">BIM培训中心</a></li>
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
          <li style="cursor: pointer;" @click="setActiveLevelOneCategory(index)" :class="{'ul_cur':i.active}"
              v-for="i,index in levelOneCategoryList">
            <span style="font-size: 14px;" class="item-normal" :class="{'item-active':i.active}">{{i.name}}</span></li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="slist">
        <form action="">

          <input v-model="searchContent" type="text" class="s_in" placeholder="请输入关键字" style="outline: none">
          <input @click="clickSearch" class="s_btn" readonly value="搜索" style="cursor: pointer;outline: none">

        </form>
      </div>
    </div>
    <div class="bot">
      <p>Copyright @2017 Tongjl.All Rights Reserved.<br>
        同济大学出版祉版权所有 上海市杨浦区赤峰路2号 021-0000000</p>
    </div>
  </div>
</template>
<style scoped>
  .item-normal {
    color: #ffffff;
  }

  .item-active {
    color: #458adf;
  }
  #particles-js{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(80, 174, 201, 0.51);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
<script>
  import particlesJS from 'particles.js'
  import { checkLoginCookie, deleteCookie, setCookie } from '../assets/js/cookie'

  export default {
    name: 'index',
    data () {
      return {
        isSignedIn: false,
        isMenuClicked: false,
        searchContent: '',
        libList: [
          {
            title: '1111数据库',
            url: '/'
          },
          {
            title: '2222数据库',
            url: '/'
          }
        ],
        isLibListShow: false,
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
        this.$store.commit('setSearchContent', this.searchContent)
        this.$router.push('/search/result')
      },
      setActiveLevelOneCategory (ind) {
        this.$store.commit('setActiveLevelOneCategory', ind)
      }
    },
    computed: {
      levelOneCategoryList: function () {
        return this.$store.state.searchBar.levelOneCategoryList
      }
    },
    mounted () {
      this.$store.commit('setActiveLevelOneCategory', 0)
      this.checkToken()
//      particlesJS.load('particles-js', require('../assets/css/particles.json'), function() {
//        console.log('callback - particles.js config loaded')
//      })
    },
    watch: {
      searchContent: function (val) {
        setCookie('searchContent', val)
        console.log(val)
      }
    }
  }
</script>

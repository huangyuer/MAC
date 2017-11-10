<template>
  <div class="index_bg">
    <div class="top">

      <div class="top_menu">
        <ul class="nav">
          <li><a href="/" class="menu_item active">首页</a><li>
          <li class="drop-down"><a class="menu_item">工程数据库</a>
            <div class="triangle-up"></div>
            <ul class="drop-down-content">
              <li v-for="(lib, $index) in libList" @mouseover="libCur = $index"><a class="menu_item" v-text="lib.title"></a>
                <ul class="drop-right-content" v-show="$index === libCur">
                  <li v-for="item in lib.children"><a :href="item.url" class="menu_item" v-text="item.title"></a></li>
                </ul>
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
        <div class="menu_nav" v-show="isMenuClicked" >
          <ul>
            <li><a href="/" class="menu_item active">首页</a><li>
            <li><a class="menu_item" @click="isLibListShow = !isLibListShow">工程数据库</a>
              <ul v-show="isLibListShow">
                <li v-for="(lib, $index) in libList" @click="libCur = $index"><a v-text="lib.title"></a>
                  <ul v-show="$index === libCur">
                    <li v-for="item in lib.children"><a :href="item.url" v-text="item.title"></a></li>
                  </ul>
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
      <p>同济工程数据库</p>
    </div>
    <div class="serach_l">
      <div class="search_ul">
        <ul>
          <li v-for="(item, $index) in searchList" :class="{ 'ul_cur': $index === isSearchListCur }" @click="isSearchListCur = $index"><a href="javascript:;" v-text="item"></a></li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="slist">
        <form action="">
          <input type="text" class="s_in" placeholder="请输入关键字" style="outline: none">
          <button class="s_btn" style="outline: none">搜索</button>
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
      libList: [
        {
          title: '1111数据库',
          children: [
            {
              title: '22222数据库',
              url: '/'
            },
            {
              title: '22222数据库',
              url: '/'
            },
            {
              title: '22222数据库',
              url: '/'
            }
          ]
        },
        {
          title: '1122数据库',
          children: [
            {
              title: '2222数据库',
              url: '/'
            },
            {
              title: '2222数据库',
              url: '/'
            },
            {
              title: '1222数据库',
              url: '/'
            }
          ]
        }
      ],
      libCur: 0,
      isLibListShow: false,
      searchList: ['全部', '图书', '期刊', '图片', '公式', '图表', '视频'],
      isSearchListCur: 0,
      isSignedIn: false,
      isMenuClicked: false,
      isRightContentShow: false
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

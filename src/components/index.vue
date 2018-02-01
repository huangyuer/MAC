<template>
  <div class="index_bg">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      class="particles">
    </vue-particles>
    <div class="top">

      <div class="top_menu">
        <ul class="nav">
          <li><a href="/" class="menu_item link active">首页</a>
          <li>
          <li class="drop-down"><a @click="listBooks" class="menu_item link">工程数据库</a>
            <div class="triangle-up"></div>
            <ul class="drop-down-content">
              <li v-for="lib in sublibs"><a @click="listBooksByLib(lib.name)" class="menu_item link" href="javascript:;"
                                            v-text="lib.name"></a>
              </li>
            </ul>
          </li>
          <li><a href="/#/selected" class="menu_item link">工程师史</a></li>
          <li><a href="http://trade.tjdesignx.com/#/" class="menu_item link">版权贸易</a></li>
          <li><a href="http://bbs.tjdesignx.com/#/" class="menu_item link">工程技术论坛</a></li>
          <li><a href="http://x.tjdesignx.com/#/" class="menu_item link">同济设计在线</a></li>
          <li><a href="http://bim.tjdesignx.com/#/" class="menu_item link">BIM培训中心</a></li>
        </ul>
      </div>

      <div class="top_wap_menu">
        <div class="btn_menu" @click="toggleMenu()"><img src="../assets/images/menu.png" alt=""></div>
        <div class="menu_nav" v-show="isMenuClicked">
          <ul>
            <li><a href="/" class="menu_item active">首页</a>
            <li>
            <li><a class="menu_item" href="javascript:;" @click="isLibListShow = !isLibListShow">工程数据库</a>
              <ul v-show="isLibListShow">
                <li v-for="lib in sublibs"><a href="javascript:;" @click="listBooksByLib(lib.name)"
                                              v-text="lib.name"></a>
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
        <a href="javascript:void(0);" class="reg_btn1" @click="logout()">退出登录</a>
      </div>
      <div class="top_login1" v-show="!isSignedIn">
        <router-link to="/auth/login">
          <a href="javascript:void(0);" class="login_btn1">登录</a>
        </router-link>
        <router-link to="/auth/register">
          <a href="javascript:void(0);" class="reg_btn1">注册</a>
        </router-link>
      </div>
    </div>
    <div class="clear"></div>
    <div class="search_logo_img">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="search_logo_p">
      <p>中国工程与工程师史文化应用交互平台</p>
    </div>
    <div class="search_l">
      <div class="search_ul">
        <ul>
          <li style="cursor: pointer;font-weight: bold" @click="setActiveLevelOneCategory(index)"
              :class="{'ul_cur':i.active}"
              v-for="i,index in levelOneCategoryList">
            <span style="font-size: 14px;" class="item-normal" :class="{'item-active':i.active}">{{i.name}}</span></li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="slist">
        <form action="">

          <input @keydown.enter="clickSearch" v-model="searchContent" :placeholder="placeholder" type="text"
                 class="s_in"
                 style="outline: none">
          <input @click="clickSearch" class="s_btn" readonly value="搜索" style="cursor: pointer;outline: none">

        </form>
      </div>
    </div>
    <div class="bot">
      <div>Copyright @2017 Tongjl.All Rights Reserved.<br>
        同济大学出版社版权所有 上海市杨浦区赤峰路2号 021-0000000
      </div>
    </div>
  </div>
</template>
<script>
  import VueParticles from 'vue-particles/src/vue-particles/vue-particles.vue'
  import { checkLoginCookie, deleteCookie, setCookie } from '../assets/js/cookie'

  export default {
    name: 'index',
    data () {
      return {
        isSignedIn: false,
        isMenuClicked: false,
        isLibListShow: false,
        searchContent_: '',
        placeholder: '全文检索',
      }
    },
    components: {
      VueParticles
    },
    methods: {

      listBooks: function () {
        this.$router.push('/book/list')
      },
      listBooksByLib: function (lib) {
        this.$router.push('/book/list?lib=' + encodeURI(lib))
      },
      // 检查token是否失效
      checkToken: function () {
        if (checkLoginCookie()) {
          // 若未失效则登录注册切换显示个人中心
          this.isSignedIn = true
        }
      },
      // 退出登录
      logout: function () {
        // 删除cookie检查状态成功则退出
        deleteCookie('sessionToken')
        this.$store.commit('setLoggedOut')
        window.history.go(0)
        this.$router.push('/')

      },
      // 移动端menu切换显示
      toggleMenu: function (event) {
        this.isMenuClicked = !this.isMenuClicked
      },
      clickSearch: function () {
        switch (this.currentLevelOneCategory.nickName) {
          case 'all':
            var p = {
              searchContent: this.searchContent
            }
            this.$store.dispatch('searchAll', p)
            break
          case 'book':
            var pp = this.levelOneCategoryList[1].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            let p1 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
              keywords: keywords
            }
            this.$store.dispatch('searchBook', p1)
            this.$store.dispatch('searchBookLeftPanel', p1)
            this.$router.push('/search/result/context')
            break
          case 'project':
            var pp = this.levelOneCategoryList[3].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            let p2 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
              keywords: keywords,
            }

            this.$store.dispatch('searchProject', p2)
            this.$store.dispatch('searchProjectLeftPanel', p2)
            this.$router.push('/search/result/media')
            break
          case 'engineer':
            var pp = this.levelOneCategoryList[5].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            let p3 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
              keywords: keywords
            }
            this.$store.dispatch('searchEngineer', p3)
            this.$store.dispatch('searchEngineerLeftPanel', p3)
            this.$router.push('/search/result/media')
            break
          case 'pic':
            let p4 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchMedia', p4)
            this.$store.dispatch('searchMediaLeftPanel', p4)
            this.$router.push('/search/result/media')
            break
          case 'requirement':
            var pp = this.levelOneCategoryList[7].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            let p5 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
              keywords: keywords,
            }
            this.$store.dispatch('searchRequirement', p5)
            this.$store.dispatch('searchRequirementLeftPanel', p5)
            this.$router.push('/search/result/context')
            break
          case 'anli':
            var pp = this.levelOneCategoryList[8].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            let p6 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
              keywords: keywords,
            }
            this.$store.dispatch('searchLiterature', p6)
            this.$store.dispatch('searchLiteratureLeftPanel', p6)
            this.$router.push('/search/result/context')
            break
          case 'knowledge':
            let p7 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchExpertPatent', p7)
            this.$router.push('/search/result/context')
            this.$store.dispatch('searchKnowledgeLeftPanel', p7)
            break
          default:
            break
        }
      },
      setActiveLevelOneCategory (ind) {
        this.$store.commit('setActiveLevelOneCategory', ind)
      }
    },
    computed: {
      sublibs () {
        return this.$store.getters.sublibs
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchComponent.currentLevelOneCategory
      },
      searchContent: {
        get: function () {
          return this.$store.state.searchComponent.searchContent
        },
        set: function (val) {
          setCookie('searchContent', val)
          this.$store.commit('setSearchContent', val)
          console.log(val)
          this.searchContent_ = val
        }
      }
    },
    mounted () {
      this.$store.commit('setActiveLevelOneCategory', 0)
      this.checkToken()
      this.$store.dispatch('listSublibs', {})
    },
    watch: {
      searchContent: function (val) {

      },
      searchContent_: function (val) {
        this.$store.commit('setSearchContent', val)
      }
    }
  }
</script>

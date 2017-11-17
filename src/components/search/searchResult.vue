<template>
  <div class="bg">
    <header-bar></header-bar>
    <div class="clear"></div>
    <search-bar></search-bar>
    <div class="clear"></div>
    <div class="list_main">
      <div class="main_left">
        <left-panel></left-panel>
        <div class="list_cent">
          <router-view name="childSearch"></router-view>
        </div>

      </div>
      <div class="list_right">
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
      </div>
    </div>
    <div class="clear"></div>
    <footer-bar></footer-bar>
  </div>
</template>
<style>

</style>

<script>
  import headerBar from '../public/header_bar.vue'
  import footerBar from '../public/footer_bar.vue'
  import searchBar from '../public/search_bar.vue'
  import leftPanel from './leftPanel.vue'
  import { getCookie, checkLoginCookie, deleteCookie } from '../../assets/js/cookie'
  //    import { errorHandle } from '../../assets/js/common'

  export default {
    mounted: function () {
      console.log(this.searchContent)
      this.$store.commit('setCurrentPage', 1)
      this.$store.commit('setActiveLevelOneCategory', 0)
      if (this.searchContent) {
        let p = {
          rows: this.rows,
          page: 1,
          searchContent: this.searchContent,
          levelOneCategory: this.currentLevelOneCategory,
          leelTwoCateoryList: [],
        }
        this.$store.dispatch('searchAllResult', p)
      }
    },
    name: 'searchResult',
    data () {
      return {
        books: [],
        total: 0,
        preFix: 'http://118.178.238.202:9988/',
        rows: 8,
      }
    },
    props: {},
    components: {
      headerBar,
      footerBar,
      searchBar,
      leftPanel,
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
      handlePageClick: function (p) {
        console.log(p)
        this.currentPage = p.clickPage
        let pp = {
          rows: this.rows,
          page: this.currentPage,
          searchContent: this.searchContent,
          levelOneCategory: this.currentLevelOneCategory.nickName,
          levelTwoCategoryList: []
        }
        this.$store.dispatch('searchAllResult', pp)
      },
      handleClickPrevPage: function (p) {
        let pp = {
          rows: this.rows,
          page: this.currentPage + 1,
          searchContent: this.searchContent,
          levelTwoCategoryList: []
        }
        this.$store.dispatch('searchAllResult', pp)
      },
      handleClickNextPage: function (p) {
        let pp = {
          rows: this.rows,
          page: this.currentPage - 1,
          searchContent: this.searchContent,
          levelTwoCategoryList: []
        }
        this.$store.dispatch('searchAllResult', pp)
      },
      categorySearch: function (i) {
//        let pp = {
//          rows: this.rows,
//          page: 1,
//          searchContent: this.searchContent,
//          levelOneCategory: i.nickName,
//          levelTwoCategoryList: [],
//        }
//        this.$store.dispatch('searchAllResult', pp)
        switch (i.nickName) {
          case 'book':
            console.log(this.$store.getters.bookObj)
            let k = this.$store.getters.bookObj.data
            let kk = []
            for (var i = 0; i < k.length; i++) {
              kk.push(k[i].key)
            }
            console.log(kk)
            let pp = {
              rows: this.rows,
              page: 1,
              bookIdList: kk
            }
            this.$store.dispatch('displayBookList', pp)
            this.$router.push({name: 'searchBook'})
            break
          default:
            break
        }
      }
    },
    computed: {
      resultList: function () {
        let a = []
        if (this.searchResult) {
          return a.concat(this.searchResult.bookObj).concat(this.searchResult.achievementObj).concat(this.searchResult.bookChartsObj).concat(this.searchResult.bookFormulaObj).concat(this.searchResult.bookImageObj).concat(this.searchResult.engineerObj).concat(this.searchResult.expertObj).concat(this.searchResult.patentObj).concat(this.searchResult.requirementObj).concat(this.searchResult.standardObj)
        }
      },
      searchResult: function () {
        if (this.$store.state.search.searchResult.total) {
          this.total = this.$store.state.search.searchResult.total
        }
        return this.$store.state.search.searchResult
      },
    },
    created () {
      this.checkToken()
    }
  }
</script>


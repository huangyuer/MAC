<template>
  <div class="bg">
    <header-bar></header-bar>
    <div class="clear"></div>
    <search-bar></search-bar>
    <div class="clear"></div>
    <div class="list_main">
      <div class="main_left">
        <div class="list_left">
          <div class="class_title"><span>所有类别</span></div>
          <div class="list_class" v-for="i in resultList" v-if="resultList.length>0">
            <div class="list_title">
              <p>{{i.name}}</p>
              <!--<span><img src="../../assets/images/jian.png" alt=""></span>-->
              <span style="">{{i.count}}</span>

            </div>
            <!--<ul v-for="child in category.children">-->
            <!--<li><em>213</em><a v-text="child.name"></a></li>-->
            <!--</ul>-->
          </div>
          <!--<div class="list_class">-->
          <!--<div class="list_title">-->
          <!--<p>分类三</p>-->
          <!--<span><img src="../../assets/images/jia.png" alt=""></span>-->
          <!--</div>-->
          <!--<ul class="dn">-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--</ul>-->
          <!--</div>-->
        </div>
        <div class="list_cent">
          <div class="list_list">
            <div class="list_cout">已为您 找到"<font color="#4a91e3">中文</font>"相关结果约{{searchResult.total}}个，用时{{searchResult.took}}秒
            </div>
            <div class="list_li">
              <dl v-for="i in listResult">
                <dt>
                  <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='bookchapters'"
                       class="list_li_img"></img>
                  <img alt="" :src="preFix+i._source.cover" v-if="i._type=='achievimgents'" class="list_li_img"></img>
                  <img alt="" :src="preFix+i._source.cover" v-if="i._type=='books'" class="list_li_img"></img>
                  <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='bookcatalogs'"
                       class="list_li_img"></img>
                  <img alt="" :src="i._source.url" v-if="i._type=='bookcharts'" class="list_li_img"></img>
                  <img alt="" :src="i._source.url" v-if="i._type=='bookformulas'" class="list_li_img"></img>
                  <img alt="" :src="preFix+i._source.url" v-if="i._type=='bookimages'" class="list_li_img"></img>
                  <img alt="" :src="i._source.avatar" v-if="i._type=='engineers'" class="list_li_img"></img>
                  <img alt="" :src="i._source.avatar" v-if="i._type=='experts'" class="list_li_img"></img>
                  <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='patents'" class="list_li_img"></img>
                  <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='requirimgents'"
                       class="list_li_img"></img>
                  <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='standards'" class="list_li_img"></img>
                  <!--<img src="../../assets/images/img.jpg" alt="" class="list_li_img">-->
                </dt>
                <dd>
                  <em v-if="i._type=='bookchapters'">章节</em>
                  <em v-if="i._type=='achievements'">成就</em>
                  <em v-if="i._type=='books'">图书</em>
                  <em v-if="i._type=='bookcatalogs'">目录</em>
                  <em v-if="i._type=='bookcharts'">图表</em>
                  <em v-if="i._type=='bookformulas'">公式</em>
                  <em v-if="i._type=='bookimages'">图片</em>
                  <em v-if="i._type=='engineers'">工程师</em>
                  <em v-if="i._type=='experts'">专家</em>
                  <em v-if="i._type=='patents'">专利</em>
                  <em v-if="i._type=='requirements'">必须</em>
                  <em v-if="i._type=='standards'">规范</em>
                  <p>
                    <router-link to="/book_info">
                      <a v-if="i._type=='bookchapters'">{{i._source.chapterId}}</a>
                      <a v-if="i._type=='achievaents'">{{i._source.name}}</a>
                      <a v-if="i._type=='books'">{{i._source.name}}</a>
                      <a v-if="i._type=='bookcatalogs'">{{i._source.name}}</a>
                      <a v-if="i._type=='bookcharts'">{{i._source.title}}</a>
                      <a v-if="i._type=='bookformulas'">{{i._source.title}}</a>
                      <a v-if="i._type=='bookimages'">{{i._source.title}}</a>
                      <a v-if="i._type=='engineers'">{{i._source.name}}</a>
                      <a v-if="i._type=='experts'">{{i._source.name}}</a>
                      <a v-if="i._type=='patents'">{{i._source.name}}</a>
                      <a v-if="i._type=='requiraents'">{{i._source.name}}</a>
                      <a v-if="i._type=='standards'">{{i._source.name}}</a>
                    </router-link>
                  </p>
                  <div class="clear"></div>
                  <span v-text="">
                    <div class="fucking">
                       <template v-for="kk,va in i.highlight">
                      <template v-for="ii in kk">
                        <span class="quora" v-html="ii"></span>
                      </template>
                    </template>
                    </div>

                  </span>
                  <a class="fav" @click="addToFav()">
                    <small></small>
                    <span>加入收藏夹</span></a>
                  <a class="fav" @click="removeFromFav()">
                    <small></small>
                    <span>已加入收藏夹</span></a>
                </dd>
              </dl>
            </div>
            <div class="clear"></div>

            <pagination :total="total" @pageClick="handlePageClick" @clickPrevPage="handleClickPrevPage"
                        @clickNextPage="handleClickNextPage" :currentPage=currentPage :row=rows></pagination>
            <!--<div class="list_page">-->
            <!--<a href="" class="page_cur">1</a>-->
            <!--<a href="">2</a>-->
            <!--<a href="">3</a>-->
            <!--<a href="">4</a>-->
            <!--<a href="">5</a>-->
            <!--<a href="">></a>-->
            <!--</div>-->
          </div>

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
  import pagination from '../public/paginaton.vue'
  import { getCookie, checkLoginCookie, deleteCookie } from '../../assets/js/cookie'
  //    import { errorHandle } from '../../assets/js/common'

  export default {
    mounted: function () {
      console.log(this.searchContent)
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
        currentPage: 1,
      }
    },
    props: {},
    components: {
      headerBar,
      footerBar,
      searchBar,
      pagination
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
    },
    computed: {
      searchResult: function () {
        if (this.$store.state.search.searchResult.total) {
          this.total = this.$store.state.search.searchResult.total
        }
        return this.$store.state.search.searchResult
      },
      resultList: function () {
        let a = []
        if (this.searchResult) {
          return a.concat(this.searchResult.bookObj).concat(this.searchResult.achievementObj).concat(this.searchResult.bookChartsObj).concat(this.searchResult.bookFormulaObj).concat(this.searchResult.bookImageObj).concat(this.searchResult.engineerObj).concat(this.searchResult.expertObj).concat(this.searchResult.patentObj).concat(this.searchResult.requirementObj).concat(this.searchResult.standardObj)
        }
      },
      listResult: function () {
        return this.searchResult.data
      },
      searchContent: function () {
        return this.$store.state.searchBar.searchContent
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchBar.currentLevelOneCategory
      }
    },
    created () {
      this.checkToken()
    }
  }
</script>


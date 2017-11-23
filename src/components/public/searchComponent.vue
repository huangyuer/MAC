<template>
  <div class="header">
    <div class="logo"><a href=""><img src="../../assets/images/logo.jpg" alt=""></a><span>
  </span></div>
    <div class="search">
      <div class="search_tag">
        <ul>
          <li @click="setActiveLevelOneCategory(index)" v-for="i,index in levelOneCategoryList"
              :class="{'tag_cur':i.active}"><a
            href="javascript:void(0);">{{i.name}}</a></li>
        </ul>
      </div>
      <div class="search_list">
        <form action="">

          <input @keydown.enter="clickSearch" type="text" class="search_in" placeholder="请输入搜索内容"
                 v-model="searchContent">
          <input readonly value="搜索" style="cursor: pointer;text-align:    center" class="search_btn"
                 @click="clickSearch">
        </form>
      </div>
      <div class="clear"></div>
      <div class="search_select">
        <input type="checkbox"><span>分类一</span>
        <input type="checkbox"><span>分类二</span>
        <input type="checkbox"><span>分类三</span>
        <input type="checkbox"><span>分类四</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { setCookie, getCookie } from '../../assets/js/cookie'

  export default {
    name: 'search_bar',
    mounted: function () {
      console.log(this.$route.name)
    },
    data () {
      return {
        levelTwoCategory: [],
      }
    },
    methods: {
      clickSearch: function () {
        let routerName = this.$route.name
        if (routerName === 'searchAll') {

        } else {
          this.$router.push({name: 'searchAll'})
        }
        let p = {
          rows: 8,
          page: 1,
          searchContent: this.searchContent_,
          levelOneCategory: this.currentLevelOneCategory.nickName,
          levelTwoCategoryList: []
        }
        setCookie('searchContent', this.searchContent)
        this.$store.dispatch('searchAllResult', p)
      },
      setActiveLevelOneCategory: function (ind) {
        this.$store.commit('setActiveLevelOneCategory', ind)
        let p = {
          rows: 8,
          page: 1,
          searchContent: this.searchContent_,
          levelOneCategory: this.currentLevelOneCategory.nickName,
          levelTwoCategoryList: [],
        }
        setCookie('searchContent', this.searchContent)
        this.$store.dispatch('searchAllResult', p)
      }
    },
    computed: {
      searchContent: {
        set: function (val) {
          this.searchContent_ = val
          this.$store.commit('setSearchContent', val)
        },
        get: function () {
          let content = this.$store.state.searchComponent.searchContent
          if (content) {
            return content
          } else {
            this.searchContent_ = getCookie('searchContent')
            this.$store.commit('setSearchContent', this.searchContent_)
            return getCookie('searchContent')
          }
        }
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchComponent.currentLevelOneCategory
      }
    },
    watch: {
      searchContent: function (val) {
        this.$store.commit('setSearchContent', val)
      }
    }
  }
</script>

<style>
</style>

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

          <input type="text" class="search_in" placeholder="请输入搜索内容" v-model="searchContent">
          <input style="cursor: pointer;" class="search_btn" @click="clickSearch">
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
    },
    data () {
      return {
        levelTwoCategory: [],
      }
    },
    methods: {
      clickSearch: function () {
        let p = {
          rows: 8,
          page: 1,
          searchContent: this.searchContent,
          levelOneCategory: this.levelOneCategory.nickName,
          levelTwoCategoryList: []
        }
        setCookie('searchContent', this.searchContent)
        this.$store.dispatch('searchAllResult', p)
      },
      setActiveLevelOneCategory: function (ind) {
        this.$store.commit('setActiveLevelOneCategory', ind)
      }
    },
    computed: {
      searchContent: function () {
        return this.$store.state.searchBar.searchContent
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchBar.levelOneCategoryList
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchBar.currentLevelCategory
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

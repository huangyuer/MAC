<template>
  <div class="header">
    <div class="logo"><a href=""><img src="../../assets/images/logo.jpg" alt=""></a><span>
</span></div>
    <div class="search">
      <div class="search_tag">
        <ul>
          <li v-for="i in levelOneCategoryList" :class="{'tag_cur':i.active}"><a
            href="javascript:void(0);">{{i.name}}</a></li>
        </ul>
      </div>
      <div class="search_list">
        <form action="">
          <input type="text" class="search_in" placeholder="请输入搜索内容" v-model="searchContent">
          <input type="submit" class="search_btn" @click="clickSearch">
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
  import { getCookie } from '../../assets/js/cookie'

  export default {
    name: 'search_bar',
    mounted: function () {
      this.searchContent = getCookie('searchContent')
    },
    data () {
      return {
        searchContent: '',
        levelOneCategoryList: [
          {
            name: '全部',
            active: true,
            nickName: 'all'
          },
          {
            name: '图书',
            active: false,
            nickName: 'book'
          },
          {
            name: '图片',
            active: false,
            nickName: 'pic'
          },
          {
            name: '公式',
            active: false,
            nickName: 'formula'
          },
          {
            name: '图标',
            active: false,
            nickName: 'icon'
          },
          {
            name: '视频',
            active: false,
            nickName: 'video'
          }
        ]
      }
    },
    methods: {
      clickSearch: function () {
        var p = {
          rows: 10,
          page: 1,
          searchContent: this.searchContent,
          levelOneCategory: this.levelOneCategory.nickName,
          levelTwoCategoryList: []
        }
        this.$axios.post('/search/all', p).then(function (resp) {

        })
      }
    },
    computed: {
      levelOneCategory: function () {
        for (var i = 0; i < this.levelOneCategoryList.length; i++) {
          if (this.levelOneCategoryList[i].active === true) {
            return this.levelOneCategoryList[i]
          }
        }
      }
    }
  }
</script>

<style>
</style>

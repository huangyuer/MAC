<template>
  <div class="header">
    <div class="logo"><a href=""><img src="../../assets/images/logo.jpg" alt=""></a><span>同济工程技术数据库</span></div>
    <div class="search">
      <div class="search_tag">
        <ul>
          <li><a href="javascript:void(0);">全部</a></li>
          <li class="tag_cur"><a href="javascript:void(0);">图书</a></li>
          <li><a href="javascript:void(0);">期刊</a></li>
          <li><a href="javascript:void(0);">图片</a></li>
          <li><a href="javascript:void(0);">公式</a></li>
          <li><a href="javascript:void(0);">图表</a></li>
          <li><a href="javascript:void(0);">视频</a></li>
        </ul>
      </div>
      <div class="search_list">
        <form action="">
          <input type="text" v-model="searchContent" class="search_in" placeholder="中文">
          <input type="submit" class="search_btn" @click="search()">
        </form>
      </div>
      <div class="clear"></div>
      <div class="search_select">
        <input type="checkbox" ><span>分类一</span>
        <input type="checkbox" ><span>分类二</span>
        <input type="checkbox" ><span>分类三</span>
        <input type="checkbox" ><span>分类四</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'search_bar',
    data () {
      return {
        levelOneCategory: '',
        levelTwoCategory: [],
        searchContent: ''
//        searchData: []
      }
    },
    props: {
//      searchData: {
//        type: Array
//      }
    },
    methods: {
      // search 查询
      search: function () {
        this.$axios.post('v1/search/',
          {
            'levelOneCategory': this.levelOneCategory,
            'levelTwoCategory': this.levelTwoCategory,
            'searchContent': this.searchContent,
            'row': 10,
            'page': 1
          })
          .then(responseData => {
            // this.searchData = responseData.data
            alert('111')
          })
          .catch(error => {
            errorHandle(error)
          })
      }
    }
  }
</script>

<style>
</style>

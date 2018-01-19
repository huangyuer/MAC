<template>
  <div class="bg">
    <search-component></search-component>
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/book/list" secondNav="图书列表" :thirdUrl="'/book/info/' + bookId" :thirdNav="bookDetail.name"></nav-bar>
    <div class="list_main">

      <category-left></category-left>

      <div class="main_left">
        <div class="list_cent">
          <div class="book_li">
            <h3>{{bookDetail.name}}</h3>
            <dl >
              <dd style="float: left; width: 240px">
                <div class="dl_img" style="width:200px;"><img :src="coverUrlPrefix + bookDetail.cover" alt="" style="width:200px;">
                </div>
              </dd>
              <dd style="float: left; width: 380px">
                <p>英文书名：<span>{{bookDetail.enName}}</span></p>
                <p>作者：<a href="javascript:;">{{bookDetail.chiefEditor}}</a></p>
                <p>出版社：<span>{{bookDetail.publisher}}</span></p>
                <p>出版日期：<span>{{bookDetail.publishedAt}}</span></p>
                <p>印张数：<span>{{bookDetail.sheets}}</span></p>
                <p>定价：<span>{{bookDetail.price}}</span></p>
                <div class="btn-container">
                  <div class="btn" @click="readPdf(bookDetail)">PDF阅读</div> <div @click="readHtml(bookDetail)" class="btn">HTML阅读</div>
                </div>
              </dd>
            </dl>
          </div>
          <div class="clear"></div>
          <div class="book_bt"><span>内容介绍</span></div>
          <div class="book_info">
            <p v-if="bookDetail.summary" v-html="bookDetail.summary"></p>

            <p v-else>无</p>

          </div>
          <div class="book_bt"><span>作者介绍</span></div>
          <div class="book_info">
            <p v-if="bookDetail.authorInfo"> {{bookDetail.authorInfo}}</p>
            <p v-else>无</p>
          </div>
        </div>
      </div>

      <similar-right></similar-right>

    </div>
    <div class="clear"></div>

  </div>
</template>
<style>
  .btn-container{margin-top: 15px;margin-bottom: 12px;}
  .btn-container .btn{
    height: 20px;
    width: 65px;
    color: #E37423;
    border: 1px solid #E37423;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    font-size: 11px;
    line-height: 20px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 3px;
    margin-right: 10px;
  }
</style>
<script>
  import searchComponent from '../public/searchComponent.vue'
  import navBar from '../public/nav_bar.vue'
  import categoryLeft from '../book/category_left.vue'
  import similarRight from '../book/similar_right.vue'
  import {DataTree} from '../../utils/data_tree'

  export default {
    name: 'book_info',
    data () {
      return {
        defaultProps: {
          children: 'children',
          label: 'name'
        },
      }
    },
    components: {
      navBar,
      searchComponent,
      similarRight,
      categoryLeft
    },
    mounted:function(){
       this.init();
    },
    computed:{
      bookId(){
        return this.$route.params.bookId || '0';
      },
      bookDetail(){
        return this.$store.getters.bookDetail;
      },
      coverUrlPrefix(){
        return this.$store.getters.coverUrlPrefix;
      }
    },
    methods: {
      init: function(){
        this.$store.dispatch('getBookDetail', {'bookId': this.bookId});
      },
      readPdf: function(bookDetail){
        let pdfUrl = 'http://47.98.32.49/pdfviewer/pc?pdf=' + bookDetail.pdf
        console.log(pdfUrl)
        window.location.href = pdfUrl
      },
      readHtml: function(bookDetail){
        let htmlUrl = '/book/content/' + bookDetail._id + '/chapter?src=Text%2Fchapter1.html'
        console.log(htmlUrl)
        this.$router.push(htmlUrl)
      },
      handleNodeClick(data, node) {
        //
      },
    }
  }
</script>

<style>
</style>

<template>
  <div class="bg">
    <div class="clear"></div>
     <search-component></search-component>
    <div class="clear"></div>
    <div class="list_main">
      <div class="main_left">

        <list-left></list-left>

        <div class="list_cent">
          <div class="list_list">
            <div class="list_cout">找到&nbsp;<font color="#E37423">{{booksTotal}}</font>&nbsp;条结果</div>
            <div class="list_li">
              <dl v-for="book in books">
                <dt><img :src="url + book.cover" alt="" class="list_li_img"></dt>
                <dd>
                  <em v-text="book.bindingFormat">图书</em>
                  <p>
                    <router-link to="/book/info">
                      <a v-text="book.name"></a>
                    </router-link>
                  </p>
                  <div class="clear"></div>
                  <span v-text="book.bindingFormat.length < 90 ? book.bindingFormat : book.bindingFormat.substring(0, 90) + '...'"></span>
                  <a class="fav" v-show="!book.isFav" @click="addToFav()"><small></small><span>加入收藏夹</span></a>
                  <a class="fav" v-show="book.isFav" @click="removeFromFav()"><small></small><span>已加入收藏夹</span></a>
                </dd>
              </dl>
            </div>
            <div class="clear"></div>

            <!--<pagination :total=total :limit=limit v-on:getList="initBookList"></pagination>-->
            <!--<pagination :total=total :limit=limit v-on:initList="initBookList"></pagination>-->

          </div>

        </div>

      </div>
      <div class="list_right">
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
      </div>
    </div>
    <div class="clear"></div>

  </div>
</template>

<script>
  import searchComponent from '../public/searchComponent.vue'
  import listLeft from '../book/list_left.vue'
//  import searchBar from '../public/searchComponent.vue'
  import pagination from '../public/pagination.vue'
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'book_list',
    data () {
      return {
        total: 0,
        limit: 10,
        url: 'http://118.178.238.202:9988/'
      }
    },
    props: {
    },
    components: {
      searchComponent,
//      searchBar,
      pagination,
      listLeft
    },
    mounted: function() {
      this.getLatestBooks(this.currentCategory,this.currentClc, this.currentLib,this.pageSize, this.currentPage);
    },
    watch:{
      currentCategory: {
        handler: function (val, oldVal) {
          this.getLatestBooks(val, this.currentClc, this.currentLib, this.pageSize, this.currentPage);
        }
      },
      currentClc: {
        handler: function (val, oldVal) {
          this.getLatestBooks(this.currentCategory, val, this.currentLib, this.pageSize, this.currentPage);
        }
      },
      currentLib: {
        handler: function (val, oldVal) {
          this.getLatestBooks(this.currentCategory, this.currentClc, val, this.pageSize, this.currentPage);
        }
      },
    },
    computed: {
      books () {
        return this.$store.getters.books;
      },
      isSearchResult () {
        return this.$store.getters.books.isSearchResult;
      },
      booksTotal(){
        return this.$store.getters.booksTotal;
      },
      currentCategory(){
        let category = this.$route.query.category || '';
        return category;
      },
      currentLib(){
        let lib = this.$route.query.lib || '';
        return lib;
      },
      currentClc(){
        let clc = this.$route.query.clc || '';
        return clc;
      },
      pageSize(){
        let pageSize = this.$route.query.limit || 20;
        return parseInt(pageSize);
      },
      currentPage(){
        let currentPage = this.$route.query.page || 1;
        return parseInt(currentPage);
      }
    },
    methods: {
      createBook: function(){
        this.$router.push('/book/create');
      },
      uploadBook: function(){
        this.$router.push('/book/uploader');
      },
      getLatestBooks: function(category,clc, lib, limit,page){
        this.$store.dispatch('getLatestBooks', {'category': category, 'clc': clc, 'lib': lib,'limit': limit, 'page': page});
      },
      handleCurrentChange(val) {
        if(this.isSearchResult){
          this.search(this.pageSize, val);
        }else{
          this.getLatestBooks(this.currentCategory, this.currentClc, this.currentLib, this.pageSize, val);
        }
      },
      search: function(limit, page){
        let keywords = this.searchForm.keywords;
        this.$store.dispatch('searchBooks', {'keywords': keywords, 'limit': limit, 'page': page});
      },
      // 加入收藏夹
      addToFav: function () {
        //
      },
      // 移除收藏夹
      removeFromFav: function () {
        //
      }
    }
  }
</script>


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

          <div class="list_class" v-for="category in categories">
            <div class="list_title">
              <p v-text="category.name"></p>
              <span><img src="../../assets/images/jian.png" alt=""></span>
            </div>
            <ul v-for="child in category.children">
              <li><em>213</em><a v-text="child.name"></a></li>
            </ul>
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
            <div class="list_cout">已为您 找到"<font color="#4a91e3">中文</font>"相关结果约100，000，000个，用时0.030秒</div>
            <div class="list_li">
              <dl v-for="book in books">
                <dt><img :src="url + book.cover" alt="" class="list_li_img"></dt>
                <dd>
                  <em v-text="book.bindingFormat">图书</em>
                  <p>
                    <router-link to="/book_info">
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
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import headerBar from '../public/header_bar.vue'
  import footerBar from '../public/footer_bar.vue'
  import searchBar from '../public/searchComponent.vue'
  import pagination from '../public/pagination.vue'
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'book_list',
    data () {
      return {
        books: [],
        categories: [],
        total: 0,
        limit: 10,
        url: 'http://118.178.238.202:9988/'
      }
    },
    props: {
    },
    components: {
      headerBar,
      footerBar,
      searchBar,
      pagination
    },
    methods: {
      // 初始化图书列表
      initBookList: function (limit, page) {
//        console.log(limit, page)
        this.$axios.get('v1/books', {
          params: {
//            'category': '%e4%bd%a0%e5%a5%',
            'limit': limit,
            'page': page
          }
        })
          .then(responseData => {
            this.total = responseData.data.total
//            console.log(this.total)
            this.books = responseData.data.data
            console.log(this.books)
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 初始化图书分类
      initCategories: function () {
        this.$axios.get('v1/categories')
          .then(responseData => {
            this.categories = responseData.data.data
            console.log(this.categories)
          })
          .catch(error => {
            errorHandle(error)
          })
      },
      // 加入收藏夹
      addToFav: function () {
        //
      },
      // 移除收藏夹
      removeFromFav: function () {
        //
      }
    },
    created () {
      this.initBookList(this.limit, 1)
      this.initCategories()
    }
  }
</script>


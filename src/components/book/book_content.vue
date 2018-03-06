<template>
  <div class="book_content">
    <search-component></search-component>
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/book/list" secondNav="图书列表" :thirdUrl="'/book/info/' + bookId"
             :thirdNav="bookDetail.name" :fourthUrl="this.$route.fullPath" fourthNav="当前章节"></nav-bar>
    <book-category-bar></book-category-bar>

    <div class="book_list_main">

      <category-left></category-left>

      <div class="main_left">
        <div class="list_cent">
          <div class="book_li">
            <p v-html="bookChapterDetail.contentRaw"></p>
          </div>
        </div>
      </div>

     <!--  <similar-right></similar-right> -->
      <list-right></list-right>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/book/bookContent";
</style>

<script>
  import navBar from '../public/nav_bar.vue'
  import searchComponent from '../public/searchComponent.vue'
  import categoryLeft from '../book/category_left.vue'
  import bookCategoryBar from '../book/book_category_bar.vue'
  import similarRight from '../book/similar_right.vue'
  import { DataTree } from '../../utils/data_tree'
  import listRight from '../book/list_right.vue'

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
      categoryLeft,
      bookCategoryBar,
      similarRight,
      listRight
    },
    mounted: function () {
      this.init()
    },
    computed: {
      bookId () {
        return this.$route.params.bookId || '0'
      },
      bookDetail () {
        return this.$store.getters.bookDetail
      },
      src () {
        let src = this.$route.query.src || ''
        return decodeURI(src)
      },
      bookChapterDetail () {
        return this.$store.getters.bookChapterDetail
      },
      bookChapterDetailReady () {
        return this.$store.getters.bookChapterDetailReady
      },
    },
    watch: {
      bookChapterDetailReady: {
        handler: function (val, oldVal) {
          if (val) {

          }
        }
      },
      '$route': 'init'
    },
    methods: {
      init: function () {
        this.$store.dispatch('getBookDetail', {'bookId': this.bookId})
        this.$store.dispatch('getBookChapterBySrc', {'bookId': this.bookId, 'src': this.src})
        // this.$store.dispatch('getBookChapterDetail', {'bookChapterId': '59e85e59f18d06f0ddc17900' });
      },
      handleNodeClick (data, node) {
        //
      }
    }
  }
</script>


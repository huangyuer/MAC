<template>
  <div class="bg">
    <search-component></search-component>
    <div class="list_main">

      <category-left></category-left>

      <div class="main_left">
        <div class="list_cent">
           <div class="book_li">
             <p v-html="bookChapterDetail.contentRaw" style="font-size: 14px;"></p>
           </div>
        </div>
      </div>

      <similar-right></similar-right>

    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import searchComponent from '../public/searchComponent.vue'
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
      searchComponent,
      categoryLeft,
      similarRight
    },
    mounted:function(){
       this.init();

    },
    computed:{
      bookId(){
        return this.$route.params.bookId || '0';
      },
      src(){
        let src = this.$route.query.src || '';
        return decodeURI(src);
      },
      bookChapterDetail(){
        return this.$store.getters.bookChapterDetail;
      },
      bookChapterDetailReady(){
        return this.$store.getters.bookChapterDetailReady;
      },
    },
    watch:{
      '$route': 'init'
    },
    methods: {
      init: function(){
        this.$store.dispatch('getBookChapterBySrc', {'bookId': this.bookId, 'src': this.src});
        // this.$store.dispatch('getBookChapterDetail', {'bookChapterId': '59e85e59f18d06f0ddc17900' });
      },
      handleNodeClick(data, node) {
        //
      }
    }
  }
</script>

<style>
</style>

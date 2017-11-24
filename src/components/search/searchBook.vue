<template>
  <div class="">
    <div class="list_list">
      <div class="list_cout">已为您 找到"<font color="#4a91e3">中文</font>"相关结果约{{total}}个，用时{{took}}秒
      </div>
      <div class="list_li">
        <dl v-for="i in searchBookList">
          <dt>
            <img :src="preFix+i.cover" alt="" class="list_li_img">
          </dt>
          <dd>
            <em>图书</em>
            <p>
              <a>{{i.name}}</a>
            </p>
            <div class="clear"></div>
            <span v-text="">
                    {{i.isbn}}
              {{i.keywords}}
                  </span>
            <a class="fav">
              <small></small>
              <span>加入收藏夹</span></a>
            <!--<a class="fav">-->
            <!--<small></small>-->
            <!--<span>已加入收藏夹</span></a>-->
          </dd>
        </dl>
      </div>
      <div class="clear"></div>
      <pagination :total="total"
                  :currentPage=currentPage
                  :row=rows @clickPage="handleClickPage"></pagination>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
  import pagination from '../public/pagination.vue'

  export default {
    name: 'searchBookChild',
    mounted: function () {

    },
    components: {
      pagination,
    },
    data () {
      return {
        rows: 8,
        preFix: 'http://118.178.238.202:9988/',
      }
    },
    methods: {
      handleClickPage: function (p) {
        let clickPage = p.clickPage
        let k = this.$store.getters.bookObj.data
        let kk = []
        for (var i = 0; i < k.length; i++) {
          kk.push(k[i].key)
        }
        let pp = {
          rows: this.rows,
          page: clickPage,
          bookIdList: kk
        }
        this.$store.dispatch('displayBookList', pp)
      },
    },
    computed: {
      searchBookList: function () {
        return this.$store.state.search.searchBookList
      },
      total: function () {
        return this.$store.state.search.total
      },
      took: function () {
        return this.$store.state.search.took / 1000
      },
      currentPage: function () {
        return this.$store.state.search.currentPage
      }
    },
    filters: {}

  }
</script>

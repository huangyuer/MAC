<template>
  <div class="search-all">
    <div class="list_list">
      <div class="list_cout">已为您 找到"<font color="#4a91e3">中文</font>"相关结果约{{searchResult.total}}个，用时{{searchResult.took}}秒
      </div>
      <div class="list_li">
        <dl v-for="i in listResult">
          <dt>
            <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='bookchapters'"
                 class="list_li_img"></img>
            <img alt="" :src="preFix+i._source.cover" v-if="i._type=='achievimgents'" class="list_li_img"></img>
            <img alt="" :src="preFix+i._source.cover" v-if="i._type=='books'" class="list_li_img"></img>
            <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='bookcatalogs'"
                 class="list_li_img"></img>
            <img alt="" :src="i._source.url" v-if="i._type=='bookcharts'" class="list_li_img"></img>
            <img alt="" :src="i._source.url" v-if="i._type=='bookformulas'" class="list_li_img"></img>
            <img alt="" :src="preFix+i._source.url" v-if="i._type=='bookimages'" class="list_li_img"></img>
            <img alt="" :src="i._source.avatar" v-if="i._type=='engineers'" class="list_li_img"></img>
            <img alt="" :src="i._source.avatar" v-if="i._type=='experts'" class="list_li_img"></img>
            <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='patents'" class="list_li_img"></img>
            <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='requirimgents'"
                 class="list_li_img"></img>
            <img alt="" src="../../assets/images/img.jpg" v-if="i._type=='standards'" class="list_li_img"></img>
            <!--<img src="../../assets/images/img.jpg" alt="" class="list_li_img">-->
          </dt>
          <dd>
            <em v-if="i._type=='bookchapters'">章节</em>
            <em v-if="i._type=='achievements'">成就</em>
            <em v-if="i._type=='books'">图书</em>
            <em v-if="i._type=='bookcatalogs'">目录</em>
            <em v-if="i._type=='bookcharts'">图表</em>
            <em v-if="i._type=='bookformulas'">公式</em>
            <em v-if="i._type=='bookimages'">图片</em>
            <em v-if="i._type=='engineers'">工程师</em>
            <em v-if="i._type=='experts'">专家</em>
            <em v-if="i._type=='patents'">专利</em>
            <em v-if="i._type=='requirements'">企业需求</em>
            <em v-if="i._type=='standards'">规范</em>
            <p>
              <router-link to="/book_info">
                <a v-if="i._type=='bookchapters'">{{i._source.chapterId}}</a>
                <a v-if="i._type=='achievaents'">{{i._source.name}}</a>
                <a v-if="i._type=='books'">{{i._source.name}}</a>
                <a v-if="i._type=='bookcatalogs'">{{i._source.name}}</a>
                <a v-if="i._type=='bookcharts'">{{i._source.title}}</a>
                <a v-if="i._type=='bookformulas'">{{i._source.title}}</a>
                <a v-if="i._type=='bookimages'">{{i._source.title}}</a>
                <a v-if="i._type=='engineers'">{{i._source.name}}</a>
                <a v-if="i._type=='experts'">{{i._source.name}}</a>
                <a v-if="i._type=='patents'">{{i._source.name}}</a>
                <a v-if="i._type=='requiraents'">{{i._source.name}}</a>
                <a v-if="i._type=='standards'">{{i._source.name}}</a>
              </router-link>
            </p>
            <div class="clear"></div>
            <span v-text="">
                    <div class="fucking">
                       <template v-for="kk,va in i.highlight">
                      <template v-for="ii in kk">
                        <span class="quora" v-html="ii"></span>
                      </template>
                    </template>
                    </div>

                  </span>
            <a class="fav" @click="addToFav()">
              <small></small>
              <span>加入收藏夹</span></a>
            <a class="fav" @click="removeFromFav()">
              <small></small>
              <span>已加入收藏夹</span></a>
          </dd>
        </dl>
      </div>
      <div class="clear"></div>

      <pagination :total="total" :row="rows" :currentPage="currentPage"></pagination>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
  import pagination from '../public/pagination.vue'

  export default {
    mounted: function () {

    },
    components: {
      pagination
    },
    data () {
      return {
        books: [],
        preFix: 'http://118.178.238.202:9988/',
        rows: 8,
      }
    },
    methods: {},
    computed: {
      searchResult: function () {
        return this.$store.state.search.searchResult
      },

      listResult: function () {
        return this.searchResult.data
      },
      searchContent: function () {
        return this.$store.state.searchBar.searchContent
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchBar.currentLevelOneCategory
      },
      total: function () {
        return this.$store.state.search.total
      },
      currentPage: function () {
        return this.$store.state.search.currentPage
      }
    },
    filters: {}
  }
</script>

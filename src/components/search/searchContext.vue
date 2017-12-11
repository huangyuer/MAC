<template>
  <div class="search-all">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <image-text-item type="图 书" :author="i.chiefEditor" :name="i.name" :year="i.publishedAt" :cover="i.cover"
                       :keywords="i.keywords" v-for="i in bookList" :content="i.highlight" :key="i.id"></image-text-item>
    </div>
    <patinator @click="pageClick" :total="bookTotal"></patinator>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchContext.scss';
</style>
<script>
  import toolBar from './toolBar.vue'
  import imageTextItem from './imageTextItem.vue'
  import patinator from '../public/paginator.vue'

  export default {
    mounted: function () {
    },
    watch: {},
    components: {
      toolBar,
      imageTextItem,
      patinator,
    },
    data () {
      return {}
    },
    methods: {
      pageClick: function (p) {

      }
    },
    computed: {
      bookList: function () {
        return this.$store.state.search.bookList
      },
      bookTotal: function () {
        return parseInt(this.$store.state.search.bookTotal)
      }
    },
    filters: {}
  }
</script>

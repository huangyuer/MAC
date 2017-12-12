<template>
  <div class="search-media">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <div class="row" v-for="i in searchMediaData" :key="i.id">
        <image-item :cover="j.url" :title="j.title" :summary="j.description" v-for="j in i.children"
                    :key="i.id"></image-item>
      </div>
    </div>
    <paginator @click="pageClick" :total="total"></paginator>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchMedia.scss';
</style>
<script>
  import toolBar from './toolBar.vue'
  import paginator from '../public/paginator.vue'
  import imageItem from './imageItem.vue'

  export default {
    mounted: function () {

    },
    components: {
      toolBar,
      paginator,
      imageItem,
    },
    data () {
      return {}
    },
    methods: {
      pageClick: function (p) {

      }
    },
    computed: {
      total: function () {
        return this.$store.state.searchMedia.total
      },
      searchMediaData: function () {
        return this.$store.state.searchMedia.searchMediaData
      }
    },
    filters: {}

  }
</script>

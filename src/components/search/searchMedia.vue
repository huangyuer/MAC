<template>
  <div class="search-media">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <div class="row" v-for="i in 3" :key="i.id">
        <image-item v-for="i in 3" :key="i.id"></image-item>
      </div>
    </div>
    <paginator @click="pageClick" :total="133"></paginator>
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
    computed: {},
    filters: {}

  }
</script>

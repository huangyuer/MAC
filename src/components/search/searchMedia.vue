<template>
  <div class="search-media">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <image-item></image-item>
    </div>
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
    methods: {},
    computed: {},
    filters: {}

  }
</script>

<template>
  <div class="search-all">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <image-text-item></image-text-item>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchAll.scss';
</style>
<script>
  import toolBar from './toolBar.vue'
  import imageTextItem from './imageTextItem.vue'
  export default {
    name: 'searchAll',
    mounted: function () {
    },
    watch: {},
    components: {
      toolBar,
      imageTextItem,
    },
    data () {
      return {}
    },
    methods: {},
    computed: {},
    filters: {}
  }
</script>

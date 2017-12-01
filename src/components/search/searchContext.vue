<template>
  <div class="search-all">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span>77,123,211</span>条结果</span>
      </div>
      <image-text-item v-for="i in 10" :key="i.id"></image-text-item>
    </div>
    <patinator @click="pageClick" :total="133"></patinator>
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
    computed: {},
    filters: {}
  }
</script>

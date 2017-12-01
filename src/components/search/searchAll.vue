<template>
  <div class="search-all">
    <div class="title">
      <span>找到<span>77,638,132</span>条结果</span>
    </div>
    <div class="subtitle">
      <div class="inner">
        <span>相关图书</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <image-text-item v-for="i in 3" :key="i.id"></image-text-item>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>相关工程</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchAll.scss';
</style>
<script>
  import imageTextItem from './imageTextItem.vue'

  export default {
    mounted: function () {

    },
    components: {
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

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
    <div class="inners">
      <image-text-item :author="i.chiefEditor" :name="i.name" :year="i.publishedAt" :content="i.highlight" :keywords="i.keywords" v-for="i in allPageBookList" :key="i.id"></image-text-item>
    </div>
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
    <div class="row" v-for="i in 3" :key="i.id">
      <image-item v-for="i in 3" :key="i.id"></image-item>
    </div>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>相关工程师</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="row" v-for="i in 3" :key="i.id">
      <image-item v-for="i in 3" :key="i.id"></image-item>
    </div>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>相关多媒体</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="row" v-for="i in 3" :key="i.id">
      <image-item v-for="i in 3" :key="i.id"></image-item>
    </div>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>企业需求</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item v-for="i in 3" :key="i.id"></image-text-item>
    </div>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>工程文献</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item v-for="i in 3" :key="i.id"></image-text-item>
    </div>
    <div class="subtitle" style="margin-top: 21px;">
      <div class="inner">
        <span>知识产权</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item v-for="i in 3" :key="i.id"></image-text-item>
    </div>
    <div style="margin-bottom: 80px;"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchAll.scss';
</style>
<script>
  import imageTextItem from './imageTextItem.vue'
  import imageItem from './imageItem.vue'

  export default {
    mounted: function () {
      let p = {
        searchContent: this.searchContent
      }
      this.$store.dispatch('searchAll', p)
    },
    components: {
      imageTextItem,
      imageItem,
    },
    data () {
      return {}
    },
    methods: {},
    computed: {
      allPageBookList: function () {
        return this.$store.state.search.allPageBookList
      },
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      }
    },
    filters: {}

  }
</script>

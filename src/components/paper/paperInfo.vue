<template>
  <div class="paper-info">
    <search-component></search-component>
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/paper/list" secondNav="论文列表"
             :thirdUrl="'/paper/info/' + paperId" :thirdNav="paper.title"></nav-bar>
    <div class="paper-info-wrapper">

      <div class="paper-info-left">
        <paper-info-left></paper-info-left>
      </div>

      <div class="paper-info-center">
        <div class="paper-info-header">
          <div class="paper-info-title" v-text="paper.title">
            基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
          </div>
          <div class="paper-info-subtitle">
            <span>作者</span>
            <span v-text="paper.authorInfo">齐成龙</span>
            <!--<span>贾留锁</span>-->
            <!--<span>王永</span>-->
            <span class="paper-info-btn">PDF阅读</span>
          </div>
          <!--内容-->
          <div class="paper-info-content" v-text="paper.content"></div>
        </div>

        <div class="paper-info-next">
          <span>下一篇：</span>
          <span>基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</span>
        </div>
      </div>
      <div class="paper-info-right">
        <div class="paper-info-magazine-bar">所属期刊</div>
        <div class="paper-info-magazine-wrapper">
          <magazine-item :magazine="magazine"></magazine-item>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/paper/paperInfo";
</style>

<script>
  import magazineItem from '../magazine/magazineItem'
  import searchComponent from '../public/searchComponent'
  import paperInfoLeft from './paperInfoLeft'
  import navBar from '../public/navBar'
  export default {
    components: {
      magazineItem,
      searchComponent,
      paperInfoLeft,
      navBar
    },
    computed: {
      paperId () {
        return this.$route.params.paperId || '0'
      },
      paper () {
        return this.$store.getters.paper
      },
      magazine () {
        return this.$store.getters.magazine
      }
    },
    methods: {
      // 加入收藏夹
      addToFav () {
        //
      },
      // 在线阅读
      toPaperContent (paperId) {
        this.$router.push({path: '/paper/content/' + paperId})
      }
    },
    mounted () {
      this.$store.dispatch('getPaperDetails', {'paperId': this.paperId})
      this.$store.dispatch('getMagazineDetails', {'magazineId': this.magazineId})
    }
  }
</script>


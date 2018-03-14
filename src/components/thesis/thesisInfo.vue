<template>
  <div class="thesis-info">
    <search-component></search-component>
    <!--:thirdUrl="'/book/info/' + thesisId" :thirdNav="thesis.name"-->
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/thesis/list" secondNav="论文列表"></nav-bar>
    <div class="thesis-info-wrapper">

      <div class="thesis-info-left">
        <thesis-info-left></thesis-info-left>
      </div>

      <div class="thesis-info-center">
        <div class="thesis-info-header">
          <div class="thesis-info-title">
            基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
          </div>
          <div class="thesis-info-subtitle">
            <span>作者</span>
            <span>齐成龙</span>
            <span>贾留锁</span>
            <span>王永</span>
            <span class="thesis-info-btn">PDF阅读</span>
          </div>
          <!--内容-->
          <!--<div class="thesis-info-content" v-html=""></div>-->
          <div class="thesis-info-content">
            摘要： 为了探索BIM技术在钢结构设计中的应用，依托达索软件钢结构模块，采用“骨架模板”的建 模思想，建立某独塔双索面钢箱混凝土混合梁斜拉桥的 BIM模型。在建模过程中充分应用达索内嵌EKL语言和 Action 功能，并使用钢结构模块的”SFDSDD”设计流程，完成建模以后，还从完善设计精度 和用钢量统计两方面探索了 BIM模型的实际应用价值。得出如下结论:达索软件钢结构模块能以符合 一般工程人员设计习惯的方式提高钢桥的 BIM设计效率，与传统二维设计相比具有的优势。
          </div>
          <div class="thesis-info-content">
            摘要： 为了探索BIM技术在钢结构设计中的应用，依托达索软件钢结构模块，采用“骨架模板”的建 模思想，建立某独塔双索面钢箱混凝土混合梁斜拉桥的 BIM模型。在建模过程中充分应用达索内嵌EKL语言和 Action 功能，并使用钢结构模块的”SFDSDD”设计流程，完成建模以后，还从完善设计精度 和用钢量统计两方面探索了 BIM模型的实际应用价值。得出如下结论:达索软件钢结构模块能以符合 一般工程人员设计习惯的方式提高钢桥的 BIM设计效率，与传统二维设计相比具有的优势。
          </div>
        </div>

        <div class="thesis-info-next">
          <span>下一篇：</span>
          <span>基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</span>
        </div>
      </div>
      <div class="thesis-info-right">
        <div class="thesis-info-magazine-bar">所属期刊</div>
        <div class="thesis-info-magazine-wrapper">
          <magazine-item></magazine-item>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/thesis/thesisInfo";
</style>

<script>
  import magazineItem from '../magazine/magazineItem'
  import searchComponent from '../public/searchComponent'
  import thesisInfoLeft from './thesisInfoLeft'
  import navBar from '../public/navBar'
  export default {
    components: {
      magazineItem,
      searchComponent,
      thesisInfoLeft,
      navBar
    },
    methods: {
      // 加入收藏夹
      addToFav () {
        //
      },
      // 在线阅读
      toThesisContent (thesisId) {
        this.$router.push({path: '/thesis/content/' + thesisId})
      }
    }
  }
</script>


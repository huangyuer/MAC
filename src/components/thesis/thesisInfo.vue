<template>
  <div class="thesis-info">
    <search-component></search-component>
    <!--:thirdUrl="'/book/info/' + thesisId" :thirdNav="thesis.name"-->
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/thesis/list" secondNav="论文列表"></nav-bar>
    <div class="thesis-info-wrapper">
      <div class="thesis-info-left">
        <div class="thesis-info-header">
          <div class="thesis-info-title">
            结构工程师
          </div>
          <img src="../../assets/images/img.jpg" />
          <div class="thesis-info-detail">
            <p>
              <span>主办单位：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>
            <p>
              <span>主编：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>
            <p>
              <span>语种：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>
            <p>
              <span>国际刊号：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>
            <p>
              <span>国内刊号：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>
            <p>
              <span>出版周期：</span>
              <span>
                轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </p>

            <div class="thesis-info-brief">
              <span>期刊简介：</span>
              <span>本刊是涉及重、轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              轻、稀、贵金属地质、采矿、选矿、冶炼、加工、材料、环保、设备和过程控制的综合性科学技术刊物，国内外公开发行。发行和交换28个国家和地区，是全国中文核心期刊。
              </span>
            </div>

            <div class="thesis-info-btn-group">
              <span @click="toThesisContent(1)">在线阅读</span>
              <span @click="addToFav">加入收藏</span>
            </div>
          </div>
        </div>
        <div class="thesis-info-menu-bar">目录</div>
        <ul>
          <li>
            <div class="thesis-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
              基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
            </div>
            <div class="thesis-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>

          <li>
            <div class="thesis-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</div>
            <div class="thesis-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>

          <li>
            <div class="thesis-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</div>
            <div class="thesis-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>
        </ul>
      </div>
      <div class="thesis-info-right">
        <div class="thesis-info-similar-bar">相关期刊</div>
        <ul>
          <li>
            <div class="thesis-info-similar-item">
              <img src="../../assets/images/img.jpg" />
              <span>2018年02期</span>
            </div>
          </li>

          <li>
            <div class="thesis-info-similar-item">
              <img src="../../assets/images/img.jpg" />
              <span>2018年02期</span>
            </div>
          </li>

          <li>
            <div class="thesis-info-similar-item">
              <img src="../../assets/images/img.jpg" />
              <span>2018年02期</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/thesis/thesisInfo";
</style>

<script>
  import searchComponent from '../public/searchComponent'
  import navBar from '../public/navBar'
  export default {
    components: {
      searchComponent,
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


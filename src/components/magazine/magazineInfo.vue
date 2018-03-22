<template>
  <div class="magazine-info">
    <search-component></search-component>
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/magazine/list" secondNav="期刊列表"
             :thirdUrl="'/magazine/info/' + magazineId" :thirdNav="magazine.name"></nav-bar>
    <div class="magazine-info-wrapper">
      <div class="magazine-info-left">
        <div class="magazine-info-header">
          <div class="magazine-info-title" v-text="magazine.name"></div>
          <img src="../../assets/images/img.jpg" v-if="magazine.cover === ''"/>
          <img :src="magazine.cover" v-else />
          <div class="magazine-info-detail">
            <p>
              <span>主办单位：</span>
              <span v-text="magazine.organizer"></span>
            </p>
            <p>
              <span>主编：</span>
              <span v-text="magazine.chiefEditor">
              </span>
            </p>
            <p>
              <span>语种：</span>
              <span v-text="magazine.language"></span>
            </p>
            <p>
              <span>国际刊号：</span>
              <span v-text="magazine.issn"></span>
            </p>
            <p>
              <span>国内刊号：</span>
              <span v-text="magazine.cn"></span>
            </p>
            <p>
              <span>出版周期：</span>
              <span v-text="magazine.period"></span>
            </p>

            <div class="magazine-info-brief">
              <span>期刊简介：</span>
              <span v-text="magazine.intro"></span>
            </div>

            <div class="magazine-info-btn-group">
              <span @click="toMagazineContent(1)">在线阅读</span>
              <span @click="addToFav">加入收藏</span>
            </div>
          </div>
        </div>
        <div class="magazine-info-menu-bar">目录</div>
        <ul>
          <li>
            <div class="magazine-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
              基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计基于达索3D体验平台的铁路混合梁斜拉桥BIM设计
            </div>
            <div class="magazine-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>

          <li>
            <div class="magazine-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</div>
            <div class="magazine-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>

          <li>
            <div class="magazine-info-menu-title">基于达索3D体验平台的铁路混合梁斜拉桥BIM设计</div>
            <div class="magazine-info-menu-info">
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
              摘要以培养测绘工程专业创新型和应用型人才为目标,基于构思、设计、实施和运行(简称CDIO)模式进行.
            </div>
          </li>
        </ul>
      </div>
      <div class="magazine-info-right">
        <div class="magazine-info-similar-bar">相关期刊</div>
        <ul>
          <li>
            <div class="magazine-info-similar-item">
              <img src="../../assets/images/img.jpg" />
              <span>2018年02期</span>
            </div>
          </li>

          <li>
            <div class="magazine-info-similar-item">
              <img src="../../assets/images/img.jpg" />
              <span>2018年02期</span>
            </div>
          </li>

          <li>
            <div class="magazine-info-similar-item">
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
  @import "../../assets/css/magazine/magazineInfo";
</style>

<script>
  import searchComponent from '../public/searchComponent'
  import navBar from '../public/navBar'
  export default {
    components: {
      searchComponent,
      navBar
    },
    mounted () {
      this.$store.dispatch('getMagazineDetails', {'magazineId': this.magazineId})
    },
    computed: {
      magazineId () {
        return this.$route.params.magazineId || '0'
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
      toMagazineContent (magazineId) {
        this.$router.push({path: '/magazine/content/' + magazineId})
      }
    }
  }
</script>


<template>
  <div class="media-detail">
    <div class="header-bar">
      <div class="inner">
        <span @click="goBack">< &nbsp;返回</span>
      </div>
    </div>
    <div class="container">
      <div class="left-panel">
        <div class="inner">
          <div class="title">
            附表：上岛咖啡鉴定色
          </div>
          <div class="img-container">
            <img src="../../../src/assets/images/bg.8096c88.jpg">
          </div>
          <div class="content">
            <span>CAD的教学方法是什么呢？</span>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="inner">
          <div class="subtitle">
            <span></span>
            <span>所属类别</span>
          </div>
          <div class="category">
            <span>建筑、桥梁</span>
          </div>
          <div class="underline">

          </div>
          <div class="subtitle">
            <span></span>
            <span>其它</span>
          </div>
          <div class="category">
            <span>12次查看 </span>
          </div>
          <div class="underline">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../../src/assets/css/search/mediaDetail.scss';
</style>
<script>
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {
      goBack: function () {
        this.$router.go(-1)
      }
    },
    computed: {},
    filters: {}

  }
</script>

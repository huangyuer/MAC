<template>
  <div class="image-text-item">
    <div class="content">
      <div class="title">
        <span>建筑工程给排水设计概要</span>
      </div>
      <div class="subtitle">
        <div class="category">
          <span>图书</span>
        </div>
        <span>刘凤祥</span>-<span>《古文字化》</span>-<span>2017年</span>
      </div>
      <div class="content">
        <span>
          这是这本书的详细摘要哦哦哦哦哦哦哦你说呢？今天晚上你吃饱了么？吃饱了以后
          你想干嘛呢？有什么好的想法吗？
        </span>
      </div>
      <div class="keywords">
        <span>关键词:</span>
        <span v-for="i in 3" :key="i.id">关键词{{i}}</span>
      </div>
      <div class="btn-container">
        <div class="btn">在线阅读</div>
        <div class="btn">加入收藏</div>
      </div>
    </div>
    <div class="img-container">
      <div class="img-real-container">
        <img src="../../assets/images/img.jpg">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/search/imageTextItem.scss";
</style>
<script>
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {},
    computed: {},
    filters: {}

  }
</script>

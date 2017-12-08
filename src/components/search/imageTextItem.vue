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
        <span>{{author}}</span>-<span>{{name}}</span>-<span>{{year_}}年</span>
      </div>
      <div class="content">
        <span v-html="content">
        </span>
      </div>
      <div class="keywords">
        <span>关键词:</span>
        <span></span>
      </div>
      <div class="btn-container">
        <div class="btn">在线阅读</div>
        <div class="btn">加入收藏</div>
      </div>
    </div>
    <div class="img-container">
      <div class="img-real-container">
        <img :src="cover">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/css/search/imageTextItem.scss";
</style>
<script>
  export default {
    props: ['author', 'name', 'year', 'content', 'keywords', 'cover'],
    mounted: function () {
      let t = document.getElementsByTagName('em')
//      for (var i = 0; i < t.length; i++) {
//        t[i].style.color = 'red'
//      }
    },
    components: {},
    data () {
      return {}
    },
    methods: {},
    computed: {
      year_: function () {
        if (this.year) {
          return this.year.split('-')[0]
        }
      }
    },
    filters: {}

  }
</script>

<template>
  <div class="image-text-item">
    <div class="content">
      <div class="title">
        <span @click="redirectDetail">{{name}}</span>
      </div>
      <div class="subtitle">
        <div class="category">
          <span>{{type}}</span>
        </div>
        <span>{{author}}</span>-<span>{{name}}</span>-<span>{{year_}}年</span>
      </div>
      <div class="content">
        <span v-html="content">
        </span>
      </div>
      <div class="keywords">
        <span>关键词:</span>
        <span v-if="keywords">{{keywords}}</span>
        <span v-else>无</span>
      </div>
      <div class="btn-container">
        <div class="btn">在线阅读</div>
        <div class="btn" v-show="type=='图书'">加入收藏</div>
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
    props: ['idd','type', 'author', 'name', 'year', 'content', 'keywords', 'cover'],
    mounted: function () {
      let t = document.getElementsByTagName('em')
//      for (var i = 0; i < t.length; i++) {
//        t[i].style.color = 'red'
//      }
    },
    components: {},
    data () {
      return {
        preFix: 'http://118.178.238.202:9988/'
      }
    },
    methods: {
      redirectDetail: function () {
        if (this.type === '图书') {
          console.log('/book/info/' + this.idd)
          this.$router.push('/book/info/' + this.idd)
        }
      }
    },
    computed: {
      year_: function () {
        if (this.year) {
          return this.year.split('-')[0]
        }
      },
      cover_: function () {
        return this.preFix + this.cover
      }
    },
    filters: {}

  }
</script>

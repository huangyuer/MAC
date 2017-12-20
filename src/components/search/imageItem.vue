<template>
  <div class="image-item">
    <div class="img-container" @click="redirectDetail">
      <img :src="cover">
    </div>
    <div class="content">
      <div class="inner">
        <div class="title">
          <span>{{title}}</span>
        </div>
        <div class="text">
          <span>{{summary}}</span>
        </div>
        <div class="underline">

        </div>
        <div class="tool-bar">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tupian"></use>
          </svg>
          <span>查看原图</span>
          <svg style="margin-left: 12px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanjing"></use>
          </svg>
          <span>12次查看</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/search/imageItem.scss";
</style>
<script>
  export default {
    props: ['idd', 'cover', 'title', 'summary', 'type'],
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {
      redirectDetail: function () {
        switch (this.type) {
          case '工程':
            this.$router.push('/project/info/' + this.idd)
            break
          default:
            break
        }
      }
    },
    computed: {},
    filters: {}

  }
</script>

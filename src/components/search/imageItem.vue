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
          <span @click="seeOrign">查看原图</span>
          <svg style="margin-left: 12px;" class="icon" aria-hidden="true">
            <use xlink:href="#icon-yanjing"></use>
          </svg>
          <span>{{clicks}}次查看</span>
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
    props: ['clicks', 'idd', 'cover', 'title', 'summary', 'type'],
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
          case '工程师':
            this.$router.push('/engineer/info/' + this.idd)
          default:
            break
        }
      },
      seeOrign: function () {
        this.$store.commit('setMediaPopupUrl', this.cover)
        this.$store.commit('setMediaPopupStatus', true)
        this.$store.commit('setMediaPopupContent', this.summary)
        this.$store.commit('setMediaPopupTitle', this.title)
      }
    },
    computed: {},
    filters: {}

  }
</script>

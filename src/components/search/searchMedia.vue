<template>
  <div class="search-media">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span style="width: 30px;text-align: center;display: inline-block;">{{total}}</span>条结果</span>
      </div>
      <div class="row" v-for="i in searchMediaData" :key="i.id">
        <image-item :type="typess" :idd="j.id" :cover="j.url" :title="j.title" :summary="j.description"
                    v-for="j in i.children"
                    :key="i.id"></image-item>
      </div>
    </div>
    <paginator @pageClick="pageClick" :total="total"></paginator>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchMedia.scss';
</style>
<script>
  import toolBar from './toolBar.vue'
  import paginator from '../public/paginator.vue'
  import imageItem from './imageItem.vue'

  export default {
    mounted: function () {
      console.log('searchMedia mounted...')
    },
    components: {
      toolBar,
      paginator,
      imageItem,
    },
    data () {
      return {}
    },
    methods: {
      pageClick: function (p) {
        console.log(this.currentLevelOneCategory.nickName)
        switch (this.currentLevelOneCategory.nickName) {
          case 'project':
            var pp = this.levelOneCategoryList[2].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            var ppt = {
              rows: 9,
              page: p.clickPage,
              searchContent: this.searchContent,
              keywords: keywords
            }
            this.$store.commit('setPaginatorRows', 9)
            this.$store.dispatch('searchProject', ppt)
            this.$store.dispatch('searchProjectLeftPanel', ppt)
            break
          case 'engineer':
            var pp = this.levelOneCategoryList[3].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            var ppt = {
              rows: 9,
              page: p.clickPage,
              searchContent: this.searchContent,
              keywords: keywords
            }
            this.$store.commit('setPaginatorRows', 9)
            this.$store.dispatch('searchEngineer', ppt)
            this.$store.dispatch('searchEngineerLeftPanel', ppt)
            break
          case 'pic':
            this.$store.commit('setPaginatorRows', 9)
            this.$store.dispatch('searchMedia', ppt)
            this.$store.dispatch('searchMediaLeftPanel', ppt)
            break
          default:
            break
        }
      }
    },
    computed: {
      total: function () {
        return this.$store.state.paginator.total
      },
      searchMediaData: function () {
        return this.$store.state.searchMedia.searchMediaData
      },
      typess: function () {
        let currentLevelOneCategory = this.$store.state.searchComponent.currentLevelOneCategory
        switch (currentLevelOneCategory.nickName) {
          case 'project':
            return '工程'
            break
          case 'engineer':
            return '工程师'
            break
          default:
            break
        }
      },
      categoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchComponent.currentLevelOneCategory
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
    },
    filters: {},
  }
</script>

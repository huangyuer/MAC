<template>
  <div class="search-all">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span style="width: 37px;text-align: center;display: inline-block;">{{total}}</span>条结果</span>
      </div>
      <image-text-item :idd="i.id" :type="i.type" :author="i.chiefEditor" :name="i.name" :year="i.publishedAt"
                       :cover="i.cover"
                       :keywords="i.keywords" v-for="i in searchContextData" :content="i.highlight"
                       :key="i.id"></image-text-item>
    </div>
    <patinator @pageClick="pageClick"></patinator>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchContext.scss';
</style>
<script>
  import toolBar from './toolBar.vue'
  import imageTextItem from './imageTextItem.vue'
  import patinator from '../public/paginator.vue'

  export default {
    mounted: function () {
      console.log('searchContext mounted...')
    },
    watch: {},
    components: {
      toolBar,
      imageTextItem,
      patinator,
    },
    data () {
      return {}
    },
    methods: {
      pageClick: function (p) {
        console.log(p)
        console.log(this.currentLevelOneCategory.nickName)
        switch (this.currentLevelOneCategory.nickName) {
          case 'book':
            var pp = this.levelOneCategoryList[1].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            var ppt = {
              searchContent: this.searchContent,
              rows: 10,
              page: p.clickPage,
              keywords: keywords,
            }
            this.$store.dispatch('searchBook', ppt)
            this.$store.dispatch('searchBookLeftPanel', ppt)
            break
          case 'anli':
            var pp = this.levelOneCategoryList[6].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            var ppt = {
              searchContent: this.searchContent,
              rows: 10,
              page: p.clickPage,
              keywords: keywords,
            }
            this.$store.dispatch('searchLiteriture', ppt)
            this.$store.dispatch('searchLiteratureLeftPanel', ppt)
            break
          case 'requirement':
            var pp = this.levelOneCategoryList[5].children
            var keywords = []
            for (var i = 0; i < pp.length; i++) {
              if (pp[i].active === true) {
                keywords.push(pp[i].keyword)
              }
            }
            var ppt = {
              searchContent: this.searchContent,
              rows: 10,
              page: p.clickPage,
              keywords: keywords,
            }
            this.$store.dispatch('searchRequirement', ppt)
            this.$store.dispatch('searchRequirementLeftPanel', ppt)
            break
          case 'knowledge':
            var ppt = {
              searchContent: this.searchContent,
              rows: 10,
              page: p.clickPage,
            }
            this.$store.dispatch('searchExpertPatent', ppt)
            this.$store.dispatch('searchKnowledgeLeftPanel', ppt)
            break
          default:
            break
        }
      }
    },
    computed: {
      bookList: function () {
        return this.$store.state.search.bookList
      },
      total: function () {
        return this.$store.state.paginator.total
      },
      searchContextData: function () {
        return this.$store.state.searchContext.searchContextData
      },
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      },
      currentLevelOneCategory: function () {
        let d = this.$store.state.searchComponent.levelOneCategoryList
        for (var i = 0; i < d.length; i++) {
          if (d[i].active === true) {
            return d[i]
          }
        }
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      }
    },
    filters: {},
  }
</script>

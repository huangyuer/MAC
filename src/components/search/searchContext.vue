<template>
  <div class="search-all">
    <tool-bar></tool-bar>
    <div class="inner">
      <div class="result">
        <span>找到<span style="width: 30px;text-align: center;display: inline-block;">{{total}}</span>条结果</span>
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
        var ppt = {
          searchContent: this.searchContent,
          rows: 10,
          page: p.clickPage
        }
        switch (this.currentLevelOneCategory.nickName) {
          case 'book':
            this.$store.dispatch('searchBook', ppt)
            this.$store.dispatch('searchBookLeftPanel', this.searchContent)
            break
          case 'anli':
            this.$store.dispatch('searchLiteriture', ppt)
            this.$store.dispatch('searchLiteratureLeftPanel', ppt)
            break
          case 'requirement':
            this.$store.dispatch('searchRequirement', ppt)
            this.$store.dispatch('searchRequirementLeftPanel', ppt)
            break
          case 'knowledge':
            this.$store.dispatch('searchExpertPatent', p7)
            this.$store.dispatch('searchKnowledgeLeftPanel', p7)
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
      }
    },
    filters: {},
  }
</script>

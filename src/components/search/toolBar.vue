<template>
  <div class="tool-bar">
    <div class="inner">
      <div class="item">
        <span>排序 :</span>
        <div class="d-select">
          <span>{{sort}}</span>
          <select @change="clickSort" v-model="sort">
            <option v-for="i in options">{{i.name}}</option>
          </select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down"></use>
          </svg>
        </div>
      </div>
      <!--<div class="item">-->
      <!--<span>显示 :</span>-->
      <!--<div class="d-select">-->
      <!--<span>10条</span>-->
      <!--<select>-->
      <!--<option>10条</option>-->
      <!--<option>20条</option>-->
      <!--<option>30条</option>-->
      <!--</select>-->
      <!--<svg class="icon" aria-hidden="true">-->
      <!--<use xlink:href="#icon-down"></use>-->
      <!--</svg>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/search/toolBar.scss";
</style>
<script>
  export default {
    name: 'toolBar',
    mounted: function () {

    },
    components: {},
    data () {
      return {
        sort: '相关性',
      }
    },
    methods: {
      clickSort: function (obj) {
        console.log(this.currentLevelOneCategory.nickName)
        if (this.sort === '相关性') {
          this.$store.commit('setSearchState', false)
          switch (this.currentLevelOneCategory.nickName) {
            case 'book':
              var pp = this.levelOneCategoryList[1].children
              var keywords = []
              for (var i = 0; i < pp.length; i++) {
                if (pp[i].active === true) {
                  keywords.push(pp[i].keyword)
                }
              }
              var p = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
                keywords: keywords,
                sort: false
              }
              this.$store.dispatch('searchBook', p)
              this.$store.dispatch('searchBookLeftPanel', p)
              break
            case 'project':
              var pp = this.levelOneCategoryList[2].children
              var keywords = []
              for (var i = 0; i < pp.length; i++) {
                if (pp[i].active === true) {
                  keywords.push(pp[i].keyword)
                }
              }
              var p = {
                searchContent: this.searchContent ? this.searchContent : this.searchContent_,
                rows: 9,
                page: 1,
                keywords: keywords
              }
              this.$store.dispatch('searchProject', p)
              break
            default:
              break
          }
        }
        if (this.sort === '发布时间') {
          this.$store.commit('setSearchState', true)
          switch (this.currentLevelOneCategory.nickName) {
            case 'book':
              var pp = this.levelOneCategoryList[1].children
              var keywords = []
              for (var i = 0; i < pp.length; i++) {
                if (pp[i].active === true) {
                  keywords.push(pp[i].keyword)
                }
              }
              var p = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
                keywords: keywords,
                sort: true
              }
              this.$store.dispatch('searchBook', p)
//              this.$store.dispatch('searchBookLeftPanel', p)
            case 'project':
              var pp = this.levelOneCategoryList[2].children
              var keywords = []
              for (var i = 0; i < pp.length; i++) {
                if (pp[i].active === true) {
                  keywords.push(pp[i].keyword)
                }
              }
              var p = {
                searchContent: this.searchContent ? this.searchContent : this.searchContent_,
                rows: 9,
                page: 1,
                keywords: keywords,
                sort:true
              }
              this.$store.dispatch('searchProject', p)
            default:
              break
          }
        }
      }
    },
    computed: {
      currentLevelOneCategory: function () {
        return this.$store.state.searchComponent.currentLevelOneCategory
      },
      levelOneCategoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      },
      options: function () {
        return this.$store.state.toolBar.options
      }
    },
    filters: {}

  }
</script>

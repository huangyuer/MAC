<template>
  <div class="search-component">
    <img class="img-bg" src="../../assets/images/search-background.png">
    <div class="inner">
      <div class="left">
        <img class="left-img" src="../../assets/images/search-word.png">
      </div>
      <div class="right">
        <div class="category">
          <span @click="setActiveLevelOneCategory(index)" :class="{'category-active': i.active}"
                v-for="i,index in categoryList">{{i.name}}</span>
        </div>
        <div class="search-content">
          <input v-model="searchContent" class="search-input" placeholder="请输入关键字">
          <div class="search-btn" @click="clickSearch">
            <span>搜索</span>
          </div>
        </div>
        <div class="level-two-category">
          <div class="item" v-for="i,index in 5">
            <input type="checkbox">
            <label>分类{{index}}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/public/searchComponent.scss";
</style>
<script>
  import { setCookie, getCookie } from '../../assets/js/cookie'

  export default {
    mounted: function () {
      //this.setActiveLevelOneCategory(0)
    },
    data () {
      return {
        searchContent_: '',
      }
    },
    methods: {
      setActiveLevelOneCategory: function (index) {
        this.$store.commit('setActiveLevelOneCategory', index)
        console.log(this.currentLevelOneCategory.type)
        switch (this.currentLevelOneCategory.nickName) {
          case 'all':
            this.$router.push('/search/result')
            break
          case 'book':
            let p1 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchBook', p1)
            this.$router.push('/search/result/context')
            break
          case 'project':
            let p2 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchProject', p2)
            this.$router.push('/search/result/media')
            break
          case 'engineer':
            let p3 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchEngineer', p3)
            this.$router.push('/search/result/media')
            break
          case 'pic':
            let p4 = {
              rows: 9,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchMedia', p4)
            this.$router.push('/search/result/media')
            break
          case 'requirement':
            let p5 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchRequirement', p5)
            this.$router.push('/search/result/context')
            break
          case 'anli':
            let p6 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchLiteriture', p6)
            this.$router.push('/search/result/context')
            break
          case 'knowledge':
            let p7 = {
              rows: 10,
              searchContent: this.searchContent,
              page: 1,
            }
            this.$store.dispatch('searchExpertPatent', p7)
            this.$router.push('/search/result/context')
            break
          default:
            break
        }
      },
      clickSearch: function () {
        switch (this.currentLevelOneCategory.nickName) {
          case 'all':
            var p = {
              searchContent: this.searchContent ? this.searchContent : this.searchContent_,
            }
            this.$store.dispatch('searchAll', p)
            break
          case 'book':
            var p = {
              searchContent: this.searchContent ? this.searchContent : this.searchContent_,
              rows: 10,
              page: 1
            }
            this.$store.dispatch('searchBook', p)
          default:
            break
        }
      }
    },
    computed: {
      categoryList: function () {
        return this.$store.state.searchComponent.levelOneCategoryList
      },
      searchContent: {
        get: function () {
          return this.$store.state.searchComponent.searchContent
        },
        set: function (val) {
          this.searchContent_ = val
        }

      },
      currentLevelOneCategory: function () {
        return this.$store.state.searchComponent.currentLevelOneCategory
      }
    },
    watch: {
      searchContent_: function (val) {
        this.$store.commit('setSearchContent', val)
      }
    }
  }
</script>

<style>
</style>

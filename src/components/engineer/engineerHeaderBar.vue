<template>
  <div class="engineer_header_wrapper">
    <div class="engineer_header_bar">
      <ul>
        <li v-for="title in engineerTitles">
          <a href="javascript:;" @click="search(title.type)" class="link" v-text="title.name"></a>
        </li>
      </ul>
      <div class="engineer-search">
        <input class="engineer-search-input" placeholder="搜索" @keyup.enter="doSearch()" v-model="searchContent"/> 
        <a href="javascript:;">
          <img class="engineer-search-img" src="../../assets/images/search.png" @click="doSearch()"/>
        </a>
      </div>
       <el-button @click=""  type="text" icon="el-icon-edit">添加词条</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/engineer/engineerHeaderBar";
</style>

<script>
  import searchComponent from '../public/searchComponent.vue'

  export default {
    data () {
      return {
        engineerTitles: [
          {name: '精选', url: '/selected', type: 'all'},
          {name: '古代', url: '?era=古代', type: '古代'},
          {name: '近代', url: '?era=近代', type: '近代'},
          {name: '现代', url: '?era=现代', type: '现代'},
          {name: '当代', url: '?era=当代', type: '当代'},
        ],
        searchContent: ''
      }
    },
    components: {
      searchComponent
    },
    computed: {
      // engineerTitles: function () {
      //   return this.$store.state.engineerTitles
      // }
    },
    methods: {
      doSearch: function () {
        console.log(this.searchContent)
        let p = {
          searchContent: this.searchContent,
          category: '0',
          keywords: []
        }
        this.$store.dispatch('searchHybrid', p)
        // this.$store.dispatch('searchProject', p)
        this.$router.push('/history/search/result')
      },
      search: function (type) {
        console.log(type)
        if (type === 'all') {
          var p = {
            searchContent: this.searchContent === '' ? '工程' : this.searchContent,
              category: '0',
              keywords: []
          }
          this.$store.dispatch('searchHybrid', p)
        } else {
          var p = {
            searchContent: this.searchContent === '' ? '工程' : this.searchContent,
              content: type,
              category: '1',
              keywords: []
          }
          this.$store.dispatch('searchHybrid', p)
        }
        this.$router.push('/history/search/result')
      }
    }
  }
</script>

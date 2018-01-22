<template>
  <div class="engineer_header_wrapper">
    <div class="engineer_header_bar">
      <ul>
        <li v-for="title in engineerTitles">
          <router-link :to="title.url" class="link" v-text="title.name"></router-link>
        </li>
      </ul>
      <div class="engineer-search">
        <input class="engineer-search-input" placeholder="搜索" @keyup.enter="doSearch()" v-model="searchContent"/>
        <a href="javascript:;">
          <img class="engineer-search-img" src="../../assets/images/search.png" @click="doSearch()"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import searchComponent from '../public/searchComponent.vue'

  export default {
    data () {
      return {
        engineerTitles: [{name: '精选', url: '/selected'}, {name: '古代', url: '?era=古代'}, {
          name: '近代',
          url: '?era=近代'
        }, {name: '现代', url: '?era=现代'}, {name: '当代', url: '?era=当代'}],
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
          category: '0'
        }
        this.$store.dispatch('searchHybrid', p)
      }
    }
  }
</script>

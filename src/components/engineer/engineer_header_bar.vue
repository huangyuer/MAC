<template>
  <div class="engineer_header_wrapper">
    <div class="engineer_header_bar">
      <ul>
        <li v-for="title in engineerTitles"><router-link :to="title.url" class="link" v-text="title.name"></router-link></li>
      </ul>
      <div class="engineer-search">
        <input class="engineer-search-input" placeholder="搜索" @keyup.enter="doSearch()" v-model="searchContent" />
        <a href="javascript:;">
          <img class="engineer-search-img"  src="../../assets/images/search.png" @click="doSearch()" />
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
        engineerTitles: [{name: '精选', url: '/selected'}, {name: '古代', url: '/selected'}, {name: '近代', url: '/selected'}, {name: '新中国', url: '/selected'}, {name: '新时期', url: '/selected'}],
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
      }
    }
  }
</script>

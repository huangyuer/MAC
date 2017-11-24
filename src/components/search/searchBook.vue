<template>
  <div class="search-book">
  </div>
</template>
<style scoped>
</style>
<script>
  import pagination from '../public/pagination.vue'

  export default {
    name: 'searchBookChild',
    mounted: function () {

    },
    components: {
      pagination,
    },
    data () {
      return {
        rows: 8,
        preFix: 'http://118.178.238.202:9988/',
      }
    },
    methods: {
      handleClickPage: function (p) {
        let clickPage = p.clickPage
        let k = this.$store.getters.bookObj.data
        let kk = []
        for (var i = 0; i < k.length; i++) {
          kk.push(k[i].key)
        }
        let pp = {
          rows: this.rows,
          page: clickPage,
          bookIdList: kk
        }
        this.$store.dispatch('displayBookList', pp)
      },
    },
    computed: {
      searchBookList: function () {
        return this.$store.state.search.searchBookList
      },
      total: function () {
        return this.$store.state.search.total
      },
      took: function () {
        return this.$store.state.search.took / 1000
      },
      currentPage: function () {
        return this.$store.state.search.currentPage
      }
    },
    filters: {}

  }
</script>

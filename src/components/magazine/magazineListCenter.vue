<template>
  <div class="magazine-list-center">
    <ul>
      <li v-for="magazine in latestMagazines">
        <magazine-item :magazine="magazine"></magazine-item>
      </li>
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
      <!--<li>-->
        <!--<magazine-item></magazine-item>-->
      <!--</li>-->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/magazine/magazineListCenter";
</style>

<script>
  import magazineItem from './magazineItem'
  export default {
    mounted () {
      this.$store.dispatch('getLatestMagazines', {'limit': this.pageSize, 'page': this.currentPage})
      // this.$store.dispatch('getLatestMagazines', {'category': this.currentCategory, 'limit': this.pageSize, 'page': this.currentPage})
    },
    components: {
      magazineItem
    },
    computed: {
      currentCategory () {
        return this.$store.getters.leftMagazineCategory
      },
      pageSize () {
        let pageSize = this.$route.query.limit || 20
        return parseInt(pageSize)
      },
      currentPage () {
        let currentPage = this.$route.query.page || 1
        return parseInt(currentPage)
      },
      latestMagazines () {
        return this.$store.getters.latestMagazines
      }
    }
  }

</script>

<template>
  <div id="searchIndex">
    <search-component></search-component>
    <router-view name="leftPanel"></router-view>
    <router-view name="middlePanel"></router-view>
    <router-view name="middlePanel"></router-view>
  </div>
</template>
<style>

</style>

<script>
  import { getCookie, checkLoginCookie, deleteCookie } from '../../assets/js/cookie'
  import searchComponent from '../public/searchComponent.vue'

  export default {
    mounted: function () {
    },
    name: 'searchIndex',
    data () {
      return {}
    },
    props: {},
    components: {
      searchComponent,
    },
    methods: {},
    computed: {},
  }
</script>


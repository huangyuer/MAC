<template>
  <div id="searchIndex" style="font-size: 0;">
    <search-component></search-component>
    <div class="gap" style="height: 22px;"></div>
    <router-view name="leftPanel"></router-view>
    <router-view name="middlePanel"></router-view>
    <router-view name="rightPanel"></router-view>
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


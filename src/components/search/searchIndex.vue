<template>
  <div id="searchIndex" style="font-size: 0;
">
    <search-component></search-component>
    <div class="gap" style="height: 22px;"></div>
    <div class="inner" style="width:    1302px;margin:   0 auto;">

      <router-view name="leftPanel"></router-view>
      <router-view name="middlePanel"></router-view>
      <router-view name="rightPanel"></router-view>
    </div>
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


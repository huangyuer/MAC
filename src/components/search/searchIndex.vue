<template>
  <div id="searchIndex">
    <router-view name="leftPanel"></router-view>
    <router-view name="middlePanel"></router-view>
    <router-view name="middlePanel"></router-view>
  </div>
</template>
<style>

</style>

<script>
  import { getCookie, checkLoginCookie, deleteCookie } from '../../assets/js/cookie'

  export default {
    mounted: function () {
    },
    name: 'searchIndex',
    data () {
      return {}
    },
    props: {},
    components: {},
    methods: {},
    computed: {},
  }
</script>


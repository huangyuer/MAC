<template>
  <div class="app-header">
    <div class="inner">

      <div class="logo-container">
        <a href="/"><img src="../../assets/images/header-logo.png" alt=""></a>
      </div>
      <div class="navigator">
        <span><router-link to="/">首页&nbsp;</router-link></span>
        <span>|</span>
        <span><router-link to="/about/us">&nbsp;关于我们</router-link></span>
      </div>
      <div class="login-container">
        <div class="btn btn-login">
          <span>登 录</span>
        </div>
        <div class="btn btn-register">
          <span>注 册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/public/appHeader.scss";
</style>
<script>
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {},
    computed: {},
    filters: {}

  }
</script>

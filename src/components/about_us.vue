<template>
  <div class="z_bg">
    <div class="top_bg">
      <div class="top">
        <div class="grzx_grzx">
          <router-link to="/user/info">
            <a href="javascript:void(0);">
              <img src="../assets/images/grzx_ico1.png" alt="">
            </a>
          </router-link>
          <router-link to="/user/info">
            <a href="javascript:void(0);">
              <p>个人中心</p>
            </a>
          </router-link>
        </div>
        <div class="z_home home ">
          <router-link to="/"><a href="javascript:void(0);">首页</a></router-link>
          |
          <router-link to="/about_us"><a href="javascript:void(0);">关于我们</a></router-link>
        </div>
      </div>
    </div>
    <div class="grzx_main">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about_us',
    data () {
      return {
      }
    }
  }
</script>

<style src="../assets/css/style.css">
</style>

<template>
  <!--wap left menu-->
  <div class="app">
    <input type="checkbox" id="sidebar" />
    <!-- The menu -->
    <ul class="sidenav">
      <li class="top-bar">
        <router-link to="/" class="back-index">返回首页</router-link>
        <router-link to="/about_us" class="about-us">关于我们</router-link>
        <div class="clear"></div>
      </li>
      <li class="side-item">
        <a class="link" @click="toggleSubLibs()" href="javascript:;"><b>工程数据库</b></a>
        <ul class="down-content" v-show="isSubLibsShow">
          <li class="side-item" v-for="lib in sublibs">
            <a class="link" @click="listBooksByLib(lib.name)" href="javascript:;" ><b v-text="lib.name"></b></a>
          </li>
        </ul>
      </li>
      <li class="side-item"><a class="link" href="/#/selected"><b>工程师史</b></a></li>
      <li class="side-item"><a class="link" href="http://trade.tjdesignx.com/#/"><b>版权贸易</b></a></li>
      <li class="side-item"><a class="link" href="http://bbs.tjdesignx.com/#/"><b>工程技术论坛</b></a></li>
      <li class="side-item"><a class="link" href="http://x.tjdesignx.com/#/"><b>同济设计在线</b></a></li>
      <li class="side-item"><a class="link" href="http://bim.tjdesignx.com/#/"><b>BIM培训中心</b></a></li>
    </ul>
    <section>
      <!--<label for="apps">Click Me</label>-->
      <router-view name="app-header"></router-view>
      <router-view name="app-body"></router-view>
      <router-view name="app-footer"></router-view>
      <router-view name="media-popup"></router-view>
      <router-view name="loading-component"></router-view>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        isSubLibsShow: false
      }
    },
    methods: {
      // toggleSubLibs wap 切换子菜单
      toggleSubLibs: function () {
        this.isSubLibsShow = !this.isSubLibsShow
      },
      listBooksByLib: function (lib) {
        this.$router.push('/book/list?lib=' + encodeURI(lib))
      },
    },
    computed: {
      sublibs () {
        return this.$store.getters.sublibs
      }
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`

    }
  }
</script>

<style lang="scss" scoped>
  @import "./assets/css/style.css";
  @import "./assets/css/app.scss";
</style>

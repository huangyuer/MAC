<template>
  <div class="book-tool-bar">
    <div class="tool-bar-left" @click="showMenu()">
      <span>所有类别</span>
      <div class="triangle-down"></div>
    </div>
    <div class="tool-bar-center">
      <span>排序</span>
      <div class="triangle-down"></div>
    </div>
    <div class="tool-bar-right">
      <span>显示</span>
      <div class="triangle-down"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/book/bookToolBar";
</style>

<script>
  export default {
    methods: {
      showMenu: function () {
        this.$store.commit('setLeftMenuVisible', true)
      }
    }
  }
</script>

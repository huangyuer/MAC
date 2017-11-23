<template>
  <div id="app">
    <router-view name="app-header"></router-view>
    <router-view name="app-body"></router-view>
    <router-view name="app-footer"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style src="./assets/css/style.css">
  #app {
    height: 100%;
    width: 100%;
  }

</style>

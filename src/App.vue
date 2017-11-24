<template>
  <div id="apps" style="height: 100%;width: 100%;">
    <router-view name="app-header"></router-view>
    <router-view name="app-body"></router-view>
    <router-view name="app-footer"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style src="./assets/css/style.css">
  #apps {
    height: 100%;
    width: 100%;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

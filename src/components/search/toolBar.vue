<template>
  <div class="tool-bar">
    <div class="inner">
      <div class="item">
        <span>排序 :</span>
        <div class="d-select">
          <span>相关性</span>
          <select>
            <option>相关性</option>
            <option>相关性</option>
            <option>相关性</option>
          </select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down"></use>
          </svg>
        </div>
      </div>
      <div class="item">
        <span>显示 :</span>
        <div class="d-select">
          <span>10条</span>
          <select>
            <option>10条</option>
            <option>20条</option>
            <option>30条</option>
          </select>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/search/toolBar.scss";
</style>
<script>
  export default {
    name: 'toolBar',
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

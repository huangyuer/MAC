<template>
  <div class="left-panel">
    <category-item></category-item>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/leftPanel.scss'
</style>
<script>
  import categoryItem from './categoryItem.vue'

  export default {
    mounted: function () {

    },
    components: {
      categoryItem,
    },
    data () {
      return {}
    },
    methods: {},
    computed: {},
    filters: {}

  }
</script>

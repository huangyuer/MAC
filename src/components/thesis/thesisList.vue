<template>
  <div class="thesis-list">

    <search-component></search-component>
    <nav-bar firstUrl="/" firstNav="首页" secondUrl="/thesis/list" secondNav="论文列表"></nav-bar>
    <div class="thesis-list-wrapper">
      <thesis-list-left></thesis-list-left>

      <div class="thesis-left">
        <div class="list-cent">
          <!--wap tool bar-->
          <thesis-tool-bar></thesis-tool-bar>

          <tool-bar></tool-bar>

          <div class="list-center">

            <div class="list-count">找到&nbsp;<font color="#E37423">23232</font>&nbsp;条结果</div>

            <thesis-list-center></thesis-list-center>

            <div class="clear"></div>
            <!--<div style="width: 100%; margin: 20px auto; text-align: center;" class="paginator">-->
            <!--<el-pagination-->
            <!--small-->
            <!--background-->
            <!--@current-change="handleCurrentChange"-->
            <!--layout="prev, pager, next"-->
            <!--:total="booksTotal" :current-page="currentPage" :page-size="pageSize">-->
            <!--</el-pagination>-->
            <!--</div>-->
          </div>

        </div>
      </div>

      <thesis-list-right></thesis-list-right>
    </div>
    <div class="clear"></div>

  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/thesis/thesisList";
</style>

<script>
  import toolBar from '../search/toolBar.vue'
  import thesisToolBar from './thesisToolBar.vue'
  import navBar from '../public/navBar.vue'
  import searchComponent from '../public/searchComponent.vue'
  import thesisListCenter from './thesisListCenter.vue'
  import thesisListLeft from './thesisListLeft.vue'
  import thesisListRight from './thesisListRight.vue'
  export default {
    components: {
      toolBar,
      thesisToolBar,
      navBar,
      searchComponent,
      thesisListCenter,
      thesisListLeft,
      thesisListRight
    }
  }
</script>

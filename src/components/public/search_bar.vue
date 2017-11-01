<template>
  <div class="header">
    <div class="logo"><a href=""><img src="../../assets/images/logo.jpg" alt=""></a><span>
</span></div>
    <div class="search">
      <div class="search_tag">
        <ul>
          <li><a href="javascript:void(0);">全部</a></li>
          <li class="tag_cur"><a href="javascript:void(0);">图书</a></li>
          <li><a href="javascript:void(0);">期刊</a></li>
          <li><a href="javascript:void(0);">图片</a></li>
          <li><a href="javascript:void(0);">公式</a></li>
          <li><a href="javascript:void(0);">图表</a></li>
          <li><a href="javascript:void(0);">视频</a></li>
        </ul>
      </div>
      <div class="search_list">
        <form action="">
          <input type="text" class="search_in" placeholder="中文">
          <input type="submit" class="search_btn" >
        </form>
      </div>
      <div class="clear"></div>
      <div class="search_select">
        <input type="checkbox" ><span>分类一</span>
        <input type="checkbox" ><span>分类二</span>
        <input type="checkbox" ><span>分类三</span>
        <input type="checkbox" ><span>分类四</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search_bar',
    data () {
      return {
      }
    }
  }
</script>

<style>
</style>

<template>
  <div class="z_bg"> 
  <div class="grzx_main">
    <user-left-menu></user-left-menu> 
  <div class="grzx_right">
    <div class="grzx_right1">
      <p>收藏夹</p>
    </div>
    <div class="grzx_rightul">
      <ul>
        <li><a href="" class="a_hover">图书</a></li>
        <li><a href="">工程师</a></li>
        <li><a href="">工程图书</a></li>
        <li><a href="">公式</a></li> 
      </ul>
    </div>
    <div class="grzx_right_table">
      <table width="100%" border="1">
        <tr>
          <td width="80%" class="td_1">详情</td>
          <td width="20%" class="td_1">操作</td>
        </tr>
        <tr>
          <td width="80%">标题标题标题标题标题标题</td>
          <td width="20%">
            <a href="">查看</a>
            <a href="">取消收藏</a>
          </td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
        <tr>
          <td width="80%"></td>
          <td width="20%"></td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import UserLeftMenu from './left_menu'

  export default {
    name: 'user_favorites',
    data () {
      return {
      }
    },
    components:{
      'user-left-menu': UserLeftMenu
    },
  }
</script>

<style>
</style>

<template>
  <div class="engineer_info_wrapper">
    <back-bar></back-bar>
    <div class="engineer_info">
      <div class="engineer_info_left">
        <h4 v-text="project.title"></h4>
        <p v-text="project.content"></p>
        <div class="engineer_info_bar"></div>
      </div>
      <div class="engineer_info_right">
        <h4><span>|&nbsp;</span><span class="blue">所属类别</span></h4>
        <img :src="project.avatar"/>
        <p v-text="project.category"></p>
        <div class="divider" style="margin: 30px 0;"></div>
        <h4><span>|&nbsp;</span><span v-text="project.name" class="blue"></span></h4>
        <h5 v-text="project.category"></h5>
        <h5>
          <img src="../../assets/images/eye_close_up.png"/>
          <span v-text="project.count"></span>
          <img src="../../assets/images/star.png"/>
          <span v-text="project.star"></span>
          <img src="../../assets/images/chat.png"/>
          <span v-text="project.msg"></span>
        </h5>
        <div class="divider" style="margin: 30px 0;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import backBar from '../public/back_bar.vue'
  export default {
    data () {
      return {
        project: {
          title: '标题',
          content: '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文',
          category: '类别',
          avatar: '',
          name: '名字',
          count: 2,
          star: 1,
          msg: 1,
        }
      }
    },
    components: {
      backBar
    }
  }
</script>

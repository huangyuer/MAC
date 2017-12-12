<template>
  <div class="project_item_wrapper">

    <img :src="project.cover+ '?x-oss-process=image/resize,m_fill,w_280,h_180'" />

    <div class="project_item">
      <h4 v-text="project.title"></h4>
      <p v-text="project.author"></p>
      <p v-text="project.category"></p>
      <div class="divider"></div>
      <div class="project_item_footer">
        <img src="../../assets/images/eye_close_up.png"/>
        <span v-text="project.count"></span>
        <img src="../../assets/images/shape.png"/>
        <span v-text="project.date"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: {
        cover: '',
        title: '',
        info: '',
        category: '',
        count: 0,
        date: ''
      }
    }
  }
</script>

<template>
  <div class="literature_item_wrapper">

    <img :src="literature.cover + '?x-oss-process=image/resize,m_fill,w_280,h_210'" />

    <div class="literature_item">
      <h4 v-text="literature.title"></h4>
      <p v-text="literature.info"></p>
      <p v-text="literature.author"></p>
      <p v-text="literature.category"></p>
      <div class="literature_item_footer">
        <img src="../../assets/images/eye_close_up.png"/>
        <span v-text="literature.count"></span>
        <img src="../../assets/images/shape.png"/>
        <span v-text="literature.date"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      literature: {
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

<template>
  <div class="engineer_item_wrapper">

    <img :src="engineer.avatar + '?x-oss-process=image/resize,m_fill,w_230,h_180'" />

    <div class="engineer_item">
      <h4 v-text="engineer.title"></h4>
      <p v-text="engineer.info"></p>
      <p v-text="engineer.category"></p>
      <div class="divider"></div>
      <div class="engineer_item_footer">
        <img src="../../assets/images/eye_close_up.png"/>
        <span v-text="engineer.count"></span>
        <img src="../../assets/images/shape.png"/>
        <span v-text="engineer.date"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default { 
    data () {
      return {
        url: 'http://118.178.238.202:9988/'
      }
    },
    props: {
      engineer: {
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

<template>
  <div class="engineer_item_wrapper">

    <img :src="engineer.imgUrl"/>

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
    props: {
      engineer: {
        imgUrl: '',
        title: '',
        info: '',
        category: '',
        count: 0,
        date: ''
      }
    }
  }
</script>

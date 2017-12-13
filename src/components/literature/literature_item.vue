<template>
  <div class="literature_item_wrapper"> 
     
    <img  v-show="literature.cover !==''" :src="literature.cover+ '?x-oss-process=image/resize,m_fill,w_280,h_210'" />

    <img v-show="literature.cover === ''" src="../../assets/images/default.jpg" />

    <div class="literature_item">
      <h4 v-text="literature.name"></h4>
      <p>{{literature.summary|substr}}</p>
      <p>作者：{{literature.author}}</p>
      <p>
        <span v-for="category in literature.categories">{{category.name}}&nbsp;</span>
      </p>
      <div class="literature_item_footer">
        <img src="../../assets/images/eye_close_up.png"/>
        <span v-text="literature.clicks"></span>
        <img src="../../assets/images/shape.png"/>
        <span v-text="literature.era"></span>
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
    },
    filters: {
      substr: function(value){
        if(! value) return '';
        value = value.toString(); 
        if(value.length > 200){
          return value.substr(0, 200) + '...';
        }else{
          return value;
        }
      },
    }
  }
</script>

<template>
  <div class="engineer_item_wrapper">

    <div class="engineer_item_wrapper_img">
      <img  v-show="engineer.avatar !==''" :src="engineer.avatar+ '?x-oss-process=image/resize,m_fill,w_280,h_210'" />
      <img v-show="engineer.avatar === ''" src="../../assets/images/default.jpg" />
    </div>

    <div class="engineer_item">
      <h4 v-text="engineer.name"></h4>
      <p>{{engineer.summary}}</p>
      <!--<p>{{engineer.summary|substr}}</p>-->
      <h5>作者：{{engineer.author}}</h5>
      <h5>
        <span v-for="category in engineer.categories">{{category.name}}&nbsp;</span>
      </h5>
      <div class="divider"></div>
      <div class="engineer_item_footer">
        <img src="../../assets/images/eye_close_up.png"/>
         <span v-text="engineer.clicks"></span>
        <!--<span v-text="engineer.clicks">0</span>--> 
        <!--<span v-text="engineer.era">23</span>-->
        <img src="../../assets/images/shape.png"/>
        <span v-text="engineer.era"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['engineer'],
    filters: {
      // substr: function(value){
      //   if(! value) return '';
      //   value = value.toString();
      //   if(value.length > 200){
      //     return value.substr(0, 200) + '...';
      //   }else{
      //     return value;
      //   }
      // },
    }
  }
</script>

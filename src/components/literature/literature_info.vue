<template>
  <div class="literature_info_wrapper">
    <back-bar></back-bar>
    <div class="literature_info">
      <div class="literature_info_left">
        <h4 v-text="literature.name"></h4>
        <p v-html="literature.content" class="literature_content"></p>
      </div>
      <div class="literature_info_right">
        <h4><span>|&nbsp;</span><span class="blue">所属类别</span></h4>
        <p>
          <span v-for="category in literature.categories">{{category}}&nbsp;</span>
        </p>
        <div class="literature_info_right_img">
          <img  v-show="literature.cover !==''" :src="literature.cover + '?x-oss-process=image/resize,m_fill,w_280,h_210'" />
          <img v-show="literature.cover === ''" src="../../assets/images/default.jpg" />
        </div>
        <div class="divider" style="margin: 30px 0;"></div>
        <h4><span>|&nbsp;</span><span v-text="literature.name" class="blue"></span></h4>
        <h5 v-text="literature.category"></h5>
        <h5>
          <img src="../../assets/images/eye_close_up.png"/>
          <span>{{literature.clicks||0}}</span>
          <img src="../../assets/images/star.png"/>
          <span>{{literature.stars||0}}</span>
          <img src="../../assets/images/chat.png"/>
          <span>{{literature.comment_count||0}}</span>
        </h5>
        <div class="divider" style="margin: 30px 0;"></div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/literature/literatureInfo";
</style>

<script>
  import backBar from '../public/back_bar.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      backBar
    },
    mounted(){
      this.getData();
    },
    computed: {
      literatureError () {
          return this.$store.getters.literatureError;
      },
      literatureId(){
        console.log(this.$route.params.literatureId);
        return this.$route.params.literatureId || '0';
      },
      literature(){
        return this.$store.getters.literatureDetail;
      }
    },
    watch:{
      literatureError: {
        handler: function (val, oldVal) {
          if(val){
            this.error = val;
            this.$message({
              showClose: true,
              message: val,
              type: 'error'
            });
            this.$store.commit('clearLiteratureError');
          }
        },
        deep: true
      },
      '$route': 'getData'
    },
    methods: {
      getData: function() {
        this.$store.dispatch('getLiteratureDetail', {'literatureId': this.literatureId });
      }
    }
  }
</script>

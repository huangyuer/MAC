<template>
  <div class="">
    <div class="list_main">
      <div class="main_left">
        <div class="list_left">
          <div class="class_title"><span>所有类别</span></div>
          <div class="list_class" @click="categorySearch(i)" v-for="i in categoryList">
            <div class="list_title">
              <p>{{i.name}}</p>
              <!--<span><img src="../../assets/images/jian.png" alt=""></span>-->
              <span style="">{{i.count}}</span>

            </div>
            <!--<ul v-for="child in category.children">-->
            <!--<li><em>213</em><a v-text="child.name"></a></li>-->
            <!--</ul>-->
          </div>
          <!--<div class="list_class">-->
          <!--<div class="list_title">-->
          <!--<p>分类三</p>-->
          <!--<span><img src="../../assets/images/jia.png" alt=""></span>-->
          <!--</div>-->
          <!--<ul class="dn">-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--<li><em>213</em><a href="">小分类三</a></li>-->
          <!--</ul>-->
          <!--</div>-->
        </div>
        <div class="list_cent">
          <router-view name="childSearch"></router-view>
        </div>

      </div>
      <div class="list_right">
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
        <a><img src="../../assets/images/img1.jpg" alt=""></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {}
    },
    methods: {},
    computed: {
      categoryList: function () {
        return this.$store.state.leftPanel.levelOneCategoryList
      }
    },
    filters: {}

  }
</script>

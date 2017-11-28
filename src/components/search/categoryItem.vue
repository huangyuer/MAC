<template>
  <div class="category-item">
    <div class="level-1-category">
      <div class="inner">
        <span>{{obj.name}}</span>
        <svg @click="collapseClick" v-if="!collapse" class="icon" aria-hidden="true" height="30px" width="30px">
          <use xlink:href="#icon-jia"></use>
        </svg>
        <svg @click="collapseClick" v-else class="icon" aria-hidden="true" height="30px" width="30px">
          <use xlink:href="#icon-jianhao"></use>
        </svg>
      </div>
    </div>
    <div v-show="collapse" :class="{'level-2-active': i.active}" @click="setActiveLevel2Category(index)"
         class="level-2-category" v-for="i,index in obj.children" :key="i.id">
      <div class="inner">
        <span>{{i.name}}</span>
        <span>{{i.count}}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/categoryItem.scss';
</style>
<script>
  export default {
    props: ['obj'],
    mounted: function () {

    },
    components: {},
    data () {
      return {
        collapse: true,
        level2CategoryList: [
          {
            name: '近代',
            active: false,
            count: 12,
          },
          {
            name: '近代',
            active: false,
            count: 12,
          },
          {
            name: '近代',
            active: false,
            count: 12,
          }
        ]
      }
    },
    methods: {
      collapseClick: function () {
        this.collapse = !this.collapse
      },
      setActiveLevel2Category: function (ids) {
        for (var i = 0; i < this.level2CategoryList.length; i++) {
          this.level2CategoryList[i].active = false
        }
        this.level2CategoryList[ids].active = true
      }
    },
    computed: {},
    filters: {}

  }
</script>

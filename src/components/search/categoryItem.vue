<<<<<<< HEAD
f
<template>
=======
f<template>
>>>>>>> dev
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
    <div v-show="collapse" :class="{'level-2-active': i.active}" @click="setActiveLevel2Category(index,i)"
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
    props: ['obj', 'ids'],
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
      setActiveLevel2Category: function (ids, obj) {
        let p = {
          parentIndex: this.ids,
          childIndex: ids
        }
        this.$store.commit('setActiveLevel2Category', p)
        console.log(obj)
        if (obj.name === '图书' || obj.name === '企业需求' || obj.name === '工程文献' || obj.name === '专家' || obj.name === '专利') {
          switch (obj.name) {
            case '图书':
              let p1 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchBook', p1)
              this.$store.commit('setActiveLevelOneCategory', 1)
              break
            case '企业需求':
              let p5 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchRequirement', p5)
              this.$store.commit('setActiveLevelOneCategory', 5)
              break
            case '工程文献':
              let p6 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchLiteriture', p6)
              this.$store.commit('setActiveLevelOneCategory', 6)
              break
            case '专家':
              let p7 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchExpert', p7)
              this.$store.commit('setActiveLevelOneCategory', 7)
              break
            case '专利':
              let p8 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchPatent', p8)
              this.$store.commit('setActiveLevelOneCategory', 7)
              break
            default:
              break
          }
          this.$router.push('/search/result/context')
        }
        if (obj.name === '工程' || obj.name === '工程师' || obj.name === '多媒体') {
          switch (obj.name) {
            case '工程':
              let p2 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchProject', p2)
              this.$store.commit('setActiveLevelOneCategory', 2)
              break
            case '工程师':
              let p3 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchEngineer', p3)
              this.$store.commit('setActiveLevelOneCategory', 3)
              break
            case '多媒体':
              let p4 = {
                rows: 10,
                searchContent: this.searchContent,
                page: 1,
              }
              this.$store.dispatch('searchMedia', p4)
              this.$store.commit('setActiveLevelOneCategory', 4)
              break
            default:
              break

          }
          this.$router.push('/search/result/media')
        }
      }
    },
    computed: {
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      }
    },
    filters: {}

  }
</script>

<template>
  <div class="pages" v-show="displayPagination">
    <div class="list_text3">
      <a href="javascript:;" @click="clickPrevPage"><</a>

      <template v-for="i in displayPageList">
        <a href="javascript:;" v-if="i.active" @click="pageClick(i.number)">
          <span>{{i.number}}</span>
        </a>
        <a href="javascript:;" v-else @click="pageClick(i.number)">
          <span>{{i.number}}</span>
        </a>
      </template>

      <a href="javascript:;" @click="clickNextPage">></a>
    </div>

    <div class="list_pages">第<span v-text="currentPage"></span>页／共<span v-text="total"></span>页</div>
  </div>
</template>

<script>
  export default {
    props: ['total', 'currentPage', 'row'],
    mounted: function () {
//      console.log(this.row)
//      console.log(this.total)
//      console.log(this.currentPage)
    },
    components: {},
    data () {
      return {}
    },
    methods: {
      pageClick: function (ind) {
        let p = {
          clickPage: ind,
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        this.$emit('pageClick', p)
      },
      clickPrevPage: function () {
        let p = {
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        this.$emit('clickPrevPage', p)
      },
      clickNextPage: function () {
        let p = {
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        this.$emit('clickNextPage', p)
      }
    },
    computed: {
      displayPageList: function () {
        let maxLength = Math.ceil(this.total / this.row)
        var ppxia = []
        for (var i = 1; i <= maxLength; i++) {
          var t = {}
          if (i === this.currentPage) {
            t['active'] = true
            t['number'] = i
          } else {
            t['active'] = false
            t['number'] = i
          }
          ppxia.push(t)
        }
        return ppxia
      },
      displayPagination: function () {
        if (this.displayPageList.length > 0) {
          return true
        } else {
          return false
        }
      }
    },
    filters: {}
  }
</script>

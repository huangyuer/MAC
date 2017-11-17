<template>
  <div class="pages" v-show="displayPagination">
    <div class="list_text3">

      <a href="javascript:;" @click="showPreviousPages(0)"><</a>
      <a href="javascript:;" @click="showPreviousPages()" v-if="pageNum > 1">...</a>
      <a href="javascript:;" v-for="page in pageSize" v-if="page + (pageNum - 1) * pageSize <= pages" @click="pageClick(page + (pageNum - 1) * pageSize)" v-text="page + (pageNum - 1) * pageSize"></a>
      <a href="javascript:;" @click="showNextPages()" v-if="pageNum * pageSize < pages">...</a>
      <a href="javascript:;" @click="showNextPages(0)">></a>
    </div>
    <div class="list_pages">第<span v-text="currentPage"></span>页／共<span v-text="pages"></span>页</div>
  </div>
</template>

<script>

  export default {
    mounted () {
//      console.log(this.row)
//      console.log(this.total)
//      console.log(this.currentPage)
    },
    data () {
      return {
        pageSize: 5, // 列表上展示的页数
        pageNum: 1 // 翻页数
      }
    },
    props: {
      total: {
        type: Number,
        required: true
      },
      row: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    watch: {
      total: 'watchPages'
    },
    methods: {
      pageClick: function (ind) {
        let p = {
          clickPage: ind,
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        console.log(p)
        this.$emit('pageClick', p)
      },
      clickPrevPage: function () {
        if (this.pageNum > 1) {
          this.pageNum -= 1
        } else {
          this.pageNum = 1
        }
        let p = {
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        this.$emit('clickPrevPage', p)
      },
      clickNextPage: function () {
        let maxLength = Math.ceil(this.total / this.row)
        let pageNum = Math.ceil(maxLength / this.pageSize) // 0-0 1-1
        if (pageNum === 0) {
          this.pageNum = 1
        }
        if (this.pageNum < pageNum) {
          this.pageNum += 1
        } else {
          this.pageNum = pageNum
        }
        let p = {
          currentPage: this.currentPage,
          totalPage: this.displayPageList.length
        }
        this.$emit('clickNextPage', p)
      }
    },
    computed: {
      // 全部页数
      displayPageList: function () {
        let maxLength = Math.ceil(this.total / this.row)
        let ppxia = []
        for (let i = 1; i <= maxLength; i++) {
          let t = {}
          if (i === this.currentPage) {
            t['active'] = true
            t['number'] = i
          } else {
            t['active'] = false
            t['number'] = i
          }
          ppxia.push(t)
        }
        console.log(ppxia)
        return ppxia
      },
      // 加载页数
      watchPages: function () {
        if (this.total > 0) {
          this.pages = Math.ceil(this.total / this.row)
        }
        return array
      },
      // 传递给父组件渲染数据
      pageClick: function (page) {
        let p = {
          clickPage: page,
          currentPage: this.currentPage,
          totalPage: this.total
        }
        console.log(p)
        this.$emit('pageClick', p)
      },
      displayPagination: function () {
        if (this.total > 0) {
          return true
        } else {
          return false
        }
      }
    },
    filters: {}
  }
</script>

<template>
  <div class="pages" v-show="displayPagination">
    <div class="list_text3">
      <a href="javascript:;" @click="clickPrevPage"><</a>

      <template v-for="i in pageList">
        <a href="javascript:;" v-if="i.active" @click="pageClick(i.number)">
          <span v-text="i.number"></span>
        </a>
        <a href="javascript:;" v-else @click="pageClick(i.number)">
          <span v-text="i.number"></span>
        </a>
      </template>

      <a href="javascript:;" @click="clickNextPage">></a>
    </div>

    <div class="list_pages">第<span v-text="currentPage"></span>页／共<span v-text="Math.ceil(total / row)"></span>页</div>
  </div>
</template>

<script>
  export default {
    props: ['total', 'currentPage', 'row'],
    mounted: function () {
      console.log(this.row)
      console.log(this.total)
      console.log(this.currentPage)
    },
    components: {},
    data () {
      return {
        pageSize: 5, // 列表上展示的页数
        pageNum: 1 // 翻页数
      }
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
      // 列表真正展示的页数
      pageList: function () {
        let maxLength = Math.ceil(this.total / this.row)
        let array = []
        let index = this.pageNum * this.pageSize + 1
        let range = (this.pageNum + 1) * this.pageSize
        for (let i = index; i <= range && i <= maxLength; i++) {
          let t = {}
          if (i === this.currentPage) {
            t['active'] = true
            t['number'] = i
          } else {
            t['active'] = false
            t['number'] = i
          }
          array.push(t)
        }
        return array
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

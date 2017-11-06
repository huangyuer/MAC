<template>
  <div class="pages">
    <div class="list_text3">
      <a href="javascript:void(0);" @click="showPreviousPages(0)"><</a>
      <a href="javascript:void(0);" @click="showPreviousPages()" v-if="pageNum > 1">...</a>
      <a href="javascript:void(0);" v-for="page in pageSize" v-if="page + (pageNum - 1) * pageSize <= pages" @click="initList(defaultLimit, page + (pageNum - 1) * pageSize)" v-text="page + (pageNum - 1) * pageSize"></a>
      <a href="javascript:void(0);" @click="showNextPages()" v-if="pageNum * pageSize < pages">...</a>
      <a href="javascript:void(0);" @click="showNextPages(0)">></a>
    </div>
    <div class="list_pages">第<span v-text="curPage"></span>页／共<span v-text="pages"></span>页</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultLimit: 10, // 默认每页展示条目数
        pages: 1, // 总页数
        pageSize: 5, // 列表上展示的页数
        curPage: 1, // 当前页数
        pageNum: 1 // 翻页数
      }
    },
    props: {
      total: {
        type: Number,
        required: true
      }
//      limit: {
//        type: Number,
//        required: true
//      },
//      page: {
//        type: Number,
//        required: true
//      }
    },
    watch: {
      total: 'initPages'
    },
    methods: {
      // 翻页 上一页/最顶页
      showPreviousPages: function (param) {
        if (param === 0) {
          this.pageNum = 1
        }
        if (this.pageNum > 1) {
          this.pageNum -= 1
        }
      },
      // 翻页 下一页/最末页
      showNextPages: function (param) {
        var pageNum = Math.ceil(this.pages / this.pageSize) // 0-0 1-1
        if (param === 0) {
          this.pageNum = pageNum
        }
        if (pageNum === 0) {
          this.pageNum = 1
        }
        if (this.pageNum < pageNum) {
          this.pageNum += 1
        }
      },
      // 加载页数
      initPages: function () {
        if (this.total > 0) {
          this.pages = Math.ceil(this.total / this.defaultLimit)
        }
        console.log((this.pageNum - 1) * this.pageSize)
      },
      // 传递给父组件渲染数据
      initList: function (limit, page) {
        this.curPage = page

        this.$emit('getList', limit, page)
      }
    },
    mounted () {
    }
  }
</script>

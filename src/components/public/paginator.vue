<template>
  <div class="paginator">
    <div class="item" @click="prevPageClick">
      <span><<</span>
    </div>
    <div @click="pageClick(i.name)" class="item" :class="{'item-active': i.active}" v-for="i in displayPageList">
      <span>{{i.name}}</span>
    </div>
    <div class="item" @click="nextPageClick">
      <span>>></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/public/paginator.scss';
</style>
<script>
  export default {
    mounted: function () {

    },
    components: {},
    data () {
      return {
        currentPage: 1,
        displayPageList: [
          {
            name: 1,
            active: true,
          },
          {
            name: 2,
            active: false,
          },
          {
            name: 3,
            active: false,
          },
          {
            name: 4,
            active: false,
          },
          {
            name: 5,
            active: false,
          },
        ]
      }
    },
    methods: {
      pageClick: function (name) {
        console.log(name)
        let p = {
          clickPage: name,
        }
        this.$emit('pageClick', p)
        let lastPage = this.displayPageList[4]
        let firstPage = this.displayPageList[0]
        // 代表是最后一页
        if (name === lastPage.name) {
          this.displayPageList = []
          for (var i = lastPage.name; i < lastPage.name + 5; i++) {
            if (i === lastPage.name) {
              var t = {
                name: i,
                active: true,
              }
            } else {
              var t = {
                name: i,
                active: false,
              }
            }
            this.displayPageList.push(t)
          }
        }
        // 代表是第一页
        if (name === firstPage.name) {
          if (firstPage.name > 4) { //  避免出现负页数
            this.displayPageList = []
            for (var i = firstPage.name; i > firstPage.name - 5; i--) {
              if (i === firstPage.name) {
                var tp = {
                  name: i,
                  active: true,
                }
              } else {
                var tp = {
                  name: i,
                  active: false,
                }
              }
              this.displayPageList.unshift(tp)
            }
          }
        }
        this.setActivePage(name)
      },
      prevPageClick: function () {

      },
      nextPageClick: function () {

      },
      setActivePage: function (num) {
        for (var i = 0; i < this.displayPageList.length; i++) {
          this.displayPageList[i].active = false
        }
        this.displayPageList[num - 1].active = true
      }
    },
    computed: {},
    filters: {}

  }
</script>

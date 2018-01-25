<template>
  <div class="image-text-item">
    <div class="content">
      <div class="title">
        <span @click="redirectDetail">{{name}}</span>
      </div>
      <div class="subtitle">
        <div class="category">
          <span>{{type}}</span>
        </div>
        <div class="category-brother" v-show="type=='图书'">
          <span>{{author}}</span>-<span>{{name}}</span>-<span>{{year_}}年</span>
        </div>
      </div>
      <div class="content">
        <span v-html="content">
        </span>
      </div>
      <div class="keywords">
        <span>关键词:</span>
        <span v-if="keywords">{{keywords}}</span>
        <span v-else>无</span>
      </div>
      <div class="btn-container">
        <div class="btn" v-show="type==='图书'" @click="redirectDetail">在线阅读</div>
        <div class="btn" v-show="type==='图书章节'" @click="redirectChapterDetail">在线阅读</div>
        <div class="btn" v-show="type==='工程文献'" @click="redirectDetail">在线阅读</div>
        <template v-show="type==='图书'">
          <div v-if="!obj.isFavorited" class="btn" v-show="type=='图书'" @click="addFavorite">加入收藏</div>
          <div v-else class="btn" v-show="type=='图书'" @click="removeFavorite">取消收藏</div>
        </template>
      </div>
    </div>
    <div class="img-container">
      <div class="img-real-container" v-show="type=='图书'||type=='专家'">
        <img :src="cover">
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/css/search/imageTextItem.scss";
</style>
<script>
  export default {
    props: ['obj', 'idd', 'type', 'author', 'name', 'year', 'content', 'keywords', 'cover'],
    mounted: function () {
      let t = document.getElementsByTagName('em')
//      for (var i = 0; i < t.length; i++) {
//        t[i].style.color = 'red'
//      }
    },
    components: {},
    data () {
      return {
        preFix: 'http://118.178.238.202:9988/'
      }
    },
    methods: {
      redirectDetail: function () {
        switch (this.type) {
          case '图书':
            console.log('/book/info/' + this.idd)
            this.$router.push('/book/info/' + this.idd)
            break
          case '工程文献':
            console.log('/literature/info' + this.idd)
            this.$router.push('/literature/info/' + this.idd)
            break
          default:
            break
        }
      },
      addFavorite: function () {
        let p = {
          bookId: this.idd
        }
        this.$store.dispatch('addUserFavoriteBooks', p)
      },
      removeFavorite: function () {
        let p = {
          bookId: this.idd
        }
        this.$store.dispatch('removeUserFavoriteBooks', p)
      },
      redirectChapterDetail: function () {
        window.open('http://47.98.32.49/pdfviewer/pc?pdf=' + this.obj.pdf)
      }
    },
    computed: {
      year_: function () {
        if (this.year) {
          return this.year.split('-')[0]
        }
      },
      cover_: function () {
        return this.preFix + this.cover
      }
    },
    filters: {}

  }
</script>

<template>
  <div class="list_li">
    <image-text-item :obj="i" :idd="i.id" :type="i.type" :author="i.chiefEditor" :name="i.name" :year="i.publishedAt"
                     :cover="i.cover"
                     :keywords="i.keywords" v-for="i in books" :content="i.highlight"
                     :key="i.id"></image-text-item>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/book/listCenter";
</style>

<script>
  import imageTextItem from '../search/imageTextItem'
  export default {
    data () {
      return {
        url: 'http://118.178.238.202:9988/'
      }
    },
    components: {
      imageTextItem
    },
    computed: {
      books () {
        return this.$store.getters.books
      }
    },
    methods: {
      // 加入收藏夹
      addToFav: function (book) {
        this.$store.dispatch('addUserFavoriteBooks', {'bookId': book._id, 'userId': this.userInfo.userId})
      },
      // 移除收藏夹
      removeFromFav: function () {
        //
      }
    }
  }
</script>

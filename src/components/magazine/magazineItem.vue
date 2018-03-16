<template>
  <div class="magazine-item">
    <router-link :to="`/magazine/info/${magazine._id}`">
      <img src="../../assets/images/img.jpg" v-if="magazine.cover === ''"/>
      <img :src="magazine.cover" v-else />
      <div class="magazine-title">{{magazine.name}}</div>
      <div class="magazine-time">{{magazine.createdAt | getYear}}年{{magazine.createdAt | getMonth}}期</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/magazine/magazineItem";
</style>

<script>
  export default {
    props: {
      magazine: {}
    },
    filters: {
      getYear: function (value) {
        let date = new Date(value)
        return date.getFullYear()
      },
      getMonth: function (value) {
        let date = new Date(value)
        let month = date.getMonth() + 1
        return month < 10 ? '0' + month : month
      }
    }
  }
</script>

<template>
  <div class="magazine-list-center">
    <ul>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
      <li>
        <magazine-item></magazine-item>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/magazine/magazineListCenter";
</style>

<script>
  import magazineItem from './magazineItem'
  export default {
    components: {
      magazineItem
    }
  }

</script>

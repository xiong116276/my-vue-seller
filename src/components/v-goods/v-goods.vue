<template>
  <div>
    I am goods
    <div class="tab">
      <router-link class="tab-item" to="/goods/allgoods" >所有商品</router-link>
      <router-link class="tab-item" to="/goods/xiaoliang" >销量</router-link>
      <router-link class="tab-item" to="/goods/reping" >热评</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "v-goods"
  }
</script>

<style>

</style>

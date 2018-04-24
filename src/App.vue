<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-header/>
    <div class="tab">
      <router-link class="tab-item" to="/goods" >商品</router-link>
      <router-link class="tab-item" to="/pinglun" >评论</router-link>
      <router-link class="tab-item" to="/seller" >商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="es6">
  import header from './components/v-header/v-header';

  export default {
    name: 'App',
    components:{
      'v-header':header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .tab{
    display: flex;
  }
  .tab .tab-item{
    flex: 1;
  }
  .tab .tab-item.router-link-active{
    background-color: blue;
    color: #fff;
  }
</style>

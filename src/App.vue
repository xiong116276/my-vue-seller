<template>
  <div id="app">
    <v-header :seller="seller"/>
    <div class="tab">
      <router-link class="tab-item" to="/goods" >商品</router-link>
      <router-link class="tab-item" to="/pinglun" >评论</router-link>
      <router-link class="tab-item" to="/seller" >商家</router-link>
    </div>
    <router-view/>
    <div class="test-item"></div>
  </div>
</template>

<script type="es6">
  import header from './components/v-header/v-header';

  export default {
    name: 'App',
    components:{
      'v-header':header
    },
    data:function () {
      return{
        seller:{
          type:Object
        },
        ratings:{
          type:Object
        },
        goods:{
          type:Object
        },
      }
    },
    mounted:function () {
      this.getData();
    },
    methods:{
      getData:function () {
        this.$ajax({
          method:'get',
          url: '../static/json/data.json',
          // data:{},
        }).then(function(res){
          const data = res.data;
          this.seller = data.seller;
          this.ratings = data.ratings;
          this.goods = data.goods;
        }.bind(this)).catch(function(err){
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../static/css/base";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 28px;
  }

  .tab{
    display: flex;
    height: 80px;
    line-height: 80px;
    background-color: #ffffff;
    @include border-1px(rgba(7,17,27,0.1));
    .tab-item{
      flex: 1;

      text-align: center;
      font-size: 28px;
      color: rgb(77,85,93);
      &.router-link-active{
        color: rgb(240,20,20);
      }
    }
  }
</style>

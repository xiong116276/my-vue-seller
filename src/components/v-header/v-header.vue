<template>
  <div id="header">
    <div class="content-wrapper">
      <div class="seller-avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="header-center">
        <span class="brand"></span><span class="name">{{seller.name}}</span>
        <p class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
        <p v-if="seller.supports" class="supports">
          <span class="icon-supports" :class="cssList[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </p>
      </div>
      <div v-if="seller.supports" class="btn-supports" @click="Popup">
        {{seller.supports.length}}个<span class="iconfont icon-zuoyoujiantou"></span>
      </div>
    </div>
    <div class="background"><img :src="seller.avatar" alt=""></div>
    <div v-if="seller.bulletin" class="bulletin">
      <span class="icon-bulletin"></span>
      <span class="text">{{seller.bulletin}}</span>
      <span class="iconfont icon-zuoyoujiantou"></span>
    </div>
    <div v-show="popup" class="popup-container">
      <div class="mask"></div>
      <div class="popup-content" @click="PopupClose">
        <p class="name">{{seller.name}}</p>
        <stars :score="seller.score" :size='48' />
        <span class="iconfont icon-cha" @click="PopupClose"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import stars from './stars/stars';
  export default {
    name: "v-header",
    props:{
      seller:{type:Object}
    },
    components:{
      stars:stars
    },
    data:function () {
      return{
        cssList:['manjian','dazhe','tejia','fapiao','baozhang'],
        popup:true
      }
    },
    mounted:function () {
      // console.log(this.seller.name);
    },
    methods:{
      Popup:function () {
        this.popup = true;
      },
      PopupClose:function () {
        this.popup = false;
      }
    }
  }
</script>

<style lang="scss">
  @import "header";
</style>

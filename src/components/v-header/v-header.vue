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
    <div v-if="seller.bulletin" @click="Popup" class="bulletin">
      <span class="icon-bulletin"></span>
      <span class="text">{{seller.bulletin}}</span>
      <span class="iconfont icon-zuoyoujiantou"></span>
    </div>
    <transition name="bounce">
      <div v-show="popup" class="popup-container">
        <div class="mask"></div>
        <div class="popup-content" @click="PopupClose">
          <div class="content">
            <p class="name">{{seller.name}}</p>
            <stars :score="seller.score" :size='48' />
            <!--优惠信息-->
            <div class="popup-item">
              <div class="popup-title">
                <span class="line-h"></span>
                <span class="text">优惠信息</span>
                <span class="line-h"></span>
              </div>
              <div  v-if="seller.supports" class="item-content">
                <p class="supports" v-for="item in seller.supports">
                  <span class="icon-supports" :class="cssList[item.type]"></span>
                  <span class="text">{{item.description}}</span>
                </p>
              </div>
            </div>
            <!--商家公告-->
            <div class="popup-item">
              <div class="popup-title">
                <span class="line-h"></span>
                <span class="text">商家公告</span>
                <span class="line-h"></span>
              </div>
              <div  v-if="seller.bulletin" class="item-content seller-bulletin">
                {{seller.bulletin}}
              </div>
            </div>
          </div>
          <span class="iconfont icon-cha" @click="PopupClose"></span>
        </div>
      </div>
    </transition>
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
        popup:false
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

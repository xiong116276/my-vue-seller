<template>
  <div>
    <ul id="stars" :class="starType">
      <!--<li v-for="(item,index) in starsLength"></li>-->
      <li class="star-item star-on"></li>
      <li class="star-item star-on"></li>
      <li class="star-item star-on"></li>
      <li class="star-item star-half"></li>
      <li class="star-item star-off"></li>
    </ul>
  </div>
</template>

<script type="es6">
  const star_on = 'on';
  const star_off = 'off';
  const star_half = 'half';

  export default {
    name: "stars",
    props:{
      score:{type:Number},
      size:{type:Number}
    },
    data:function () {
      return{
        starsLength:5,
      }
    },
    computed:{
      starType:function () {
        return 'star-'+this.size;
      },
      starRender:function () {
        let arr=[];


      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../static/css/mixins.scss";
  #stars{
    margin: 32px auto 56px;
    .star-item{
      display: inline-block;
      &:last-child{
        margin-right: 0;
      }
    }
    &.star-24{
      .star-item{
        width: 20px;
        height: 20px;
        margin-right: 20px;
        background-size: 20px 20px;
      }
      .star-on{
        @include bg-img("images/star24_on");
      }
      .star-off{
        @include bg-img("images/star24_off");
      }
      .star-half{
        @include bg-img("images/star24_half");
      }
    }
    &.star-36{
      .star-item{
        width: 30px;
        height: 30px;
        margin-right: 30px;
        background-size: 30px 30px;
      }
      .star-on{
        @include bg-img("images/star36_on");
      }
      .star-off{
        @include bg-img("images/star36_off");
      }
      .star-half{
        @include bg-img("images/star36_half");
      }
    }
    &.star-48{
      .star-item{
        width: 40px;
        height: 38px;
        margin-right: 40px;
        background-size: 40px 38px;
      }
      .star-on{
        @include bg-img("images/star48_on");
      }
      .star-off{
        @include bg-img("images/star48_off");
      }
      .star-half{
        @include bg-img("images/star48_half");
      }
    }
  }

</style>

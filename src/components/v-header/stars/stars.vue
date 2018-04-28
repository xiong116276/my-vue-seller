<template>
  <div>
    <ul id="stars" :class="starType">
      <li class="star-item" v-for="item in starRender" :class="item"></li>
    </ul>
  </div>
</template>

<script type="es6">
  const star_on = 'star-on';
  const star_off = 'star-off';
  const star_half = 'star-half';


  export default {
    name: "stars",
    props:{
      score:{type:Number},
      size:{type:Number}
    },
    data:function () {
      return{
        starsLength : 5,
        starsMap:[]
      }
    },
    mounted:function () {

    },
    computed:{
      starType:function () {
        return 'star-'+this.size;
      },
      starRender:function () {
        let result = [];
        let score = Math.floor(this.score *2 )/2;//余数超过0.5显示一半，小于0.5不显示
        let hasHalf = score%1 !==0;
        let scoreInt = Math.floor(score);
        for (let i =0 ;i<scoreInt;i++){
          result.push(star_on);
        }
        if(hasHalf){
          result.push(star_half);
        }
        while(result.length < this.starsLength){
          result.push(star_off)
        }
        return result;
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss">
  @import "../../../../static/css/mixins.scss";
  #stars{
    margin: 32px auto 56px;
    .star-item{
      display: inline-block;
    }
    &.star-24{
      .star-item{
        width: 20px;
        height: 20px;
        margin-right: 20px;
        background-size: 20px 20px;
        &:last-child{
          margin-right: 0;
        }
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
        &:last-child{
          margin-right: 0;
        }
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
        &:last-child{
          margin-right: 0;
        }
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

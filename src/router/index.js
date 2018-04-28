import Vue from 'vue';
import VueRouter from 'vue-router';

import goods from '../components/v-goods/v-goods';
import pinglun from '../components/v-pinglun/v-pinglun';
import seller from '../components/v-seller/v-seller';

// import allgoods from '../components/v-goods/all-goods/all-goods';
// import xiaoliang from '../components/v-goods/xiaoliang/xiaoliang';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'goods',
    },
    {
      path: '/goods',
      component: goods,
      // children:[//嵌套路由
      //   {
      //     path: '',
      //     redirect: 'allgoods',
      //   },
      //   {
      //     path: 'allgoods',
      //     component: allgoods
      //   },
      //   {
      //     path: 'xiaoliang',
      //     component: xiaoliang
      //   },
      // ]
    },
    {
      path: '/pinglun',
      component: pinglun
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});
export default router;

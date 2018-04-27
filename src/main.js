// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import 'lib-flexible/flexible.js';
import router from './router';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$ajax = axios;
// axios.defaults.baseURL = 'https://api.example.com';
/* eslint-disable no-new */
let app = new Vue({
  el:'#app',
  router,
  components:{App},
  template:'<App/>',
  data:function () {
    return{
      
    }

  },
  created:function () {

  },
  methods:{

  }
});

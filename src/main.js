import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import store from './vuex/store.js';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import $ from "jquery";
import util from './libs/util.js';
import config from "./config/config";
import axios from "axios";
import './style/common.css';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use($);
Vue.use(iView);


/*
请求拦截
*/
axios.interceptors.request.use(config => {
  iView.Spin.show();
  //做请求之前的其他因业务
  return config;
}, error => {
  return Promise.reject(error);
});
axios.interceptors.response.use((res) => {
  if (res.status >= 200 && res.status < 300) {
    iView.Spin.hide();
    return res;
  }
  return Promise.reject(res);
}, (error) => {
  return Promise.reject(error);
});

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});

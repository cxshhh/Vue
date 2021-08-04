import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import axios from "./service/axios";

import "./assets/css/common.scss";
import "./assets/css/font.css";

import IconFont from "@/components/IconFont.vue";
import "@/assets/iconfont/iconfont";
Vue.component("icon-font", IconFont);

import {onResponse, notifyMessage } from "./utils/commonMethods";
Vue.prototype.$notifyMessage = notifyMessage;
Vue.prototype.$handleResponse = onResponse;

import Pagination from "@/components/Pagination";
Vue.component("vue-pagination", Pagination);

Vue.use(ElementUI);
Vue.use(axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
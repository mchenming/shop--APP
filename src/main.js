import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置axios信息
import axios from 'axios'
Vue.prototype.axios=axios
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';

Vue.config.productionTip = false

// 时间过滤的组件
import moment from 'moment'
Vue.filter("dateFormat",function(time){
    return moment(time).format("YYYY-MM-DD HH:mm:ss")
})

// 缩略图的组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// vant ui组件库的引用
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Lazyload } from 'vant';
Vue.use(Lazyload);


import '../dabs/mui/css/mui.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

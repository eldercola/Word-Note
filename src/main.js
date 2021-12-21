import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
// 翻译接口的一些必要参数
Vue.prototype.$appid = '20211218001031945';
Vue.prototype.$screte = 'lGNMYpSBtaCYmWR6q4Kd';

new Vue({
  render: h => h(App),
}).$mount('#app')

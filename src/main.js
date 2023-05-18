import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from "axios";
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';

import store from './store'
import * as echarts from 'echarts'

//调试环境
// axios.defaults.baseURL='http://localhost:8087/'

//生产环境
axios.defaults.baseURL='http://localhost:5000'

// Vue.prototype.$http=axios

// Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios) //必不可少，否则报错axios is not a function


new Vue({
  // store,
  render:h=>h(App)
  // render:h=>h(Student_home)
  // render:h=>h(teacher_home)
  // render:h=>h(Manager_home)
  // render: h => h(App),
  // render: h => h(main_page),
  // render: h => h(information),
}).$mount('#app')
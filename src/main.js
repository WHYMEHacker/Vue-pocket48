import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import openDB from './workers/openDB'
import findData from './workers/findData'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import ajax from './plugins/ajax'
import './assets/less/global.less'
import {
  periodHandler
} from "./plugins/periodHandler"

Vue.prototype.periodHandler = periodHandler
Vue.prototype.openDB = openDB
Vue.prototype.findData = findData

Vue.filter('picPathFormat', function (item) {
  item = item || " "
  if (item.lastIndexOf('http') === -1) {
    return ((item.lastIndexOf(',') === -1) ? ("https://source.48.cn" + item) : ("https://source.48.cn" + item.split(',')[0]))
  } else {
    if(item.lastIndexOf(':') === -1){
      return 'http:' + item.split("http")[1]
    }else{
      return item
    }
  }
})

Vue.filter('liveUrlFormat', function (item) {
  return ('https://h5.48.cn/2017appshare/memberLiveShare/index.html?id=' + item)
})

Vue.config.productionTip = false

Vue.prototype.ajax = ajax

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
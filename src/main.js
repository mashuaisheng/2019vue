// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

<<<<<<< HEAD
// 引入http请求相关类库
import VueResource from 'vue-resource'
//使用http请求相关类库
Vue.use(VueResource)
// 确保post请求不会被转换为 options 请求
Vue.http.options.emulateJSON = true
=======
import VueResource from 'vue-resource'// 引入http请求相关类库

Vue.use(VueResource)//使用http请求相关类库
Vue.http.options.emulateJSON = true// 确保post请求不会被转换为 options 请求

Vue.config.productionTip = false
>>>>>>> aff3835dd1641e2800b4cb940cb57ea460bbdc2d

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

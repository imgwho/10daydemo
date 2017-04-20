import Vue from 'vue' /*引入Vue.js核心库*/
import App from './App.vue' /*引入App.vue父组件*/

/*创建一个Vue的根实例*/
new Vue({
  el: '#app',
  render: h => h(App)
})
import Vue from 'vue'
import App from './App.vue'
import ti from'./components/typingit'

Vue.use(ti);
new Vue({
  el: '#app',
  render: h => h(App)
})

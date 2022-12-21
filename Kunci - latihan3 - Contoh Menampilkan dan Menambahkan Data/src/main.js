import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
export const eventBus = new Vue();

Vue.use(VueResourse);

new Vue({
  el: '#app',
  render: h => h(App)
})

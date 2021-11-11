import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// // 1.
// render: function(createElement) {
//   return createElement(App);
// }

// // 2.
// render(createElement) {
//   return createElement(App);
// }

// // 3. h: hyperscript 의 약자
// render(h) {
//   return h(app);
// }

// // 4.
// render: h => h(App);
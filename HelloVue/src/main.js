// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import native from './native.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  native,
  router,
  template: '<App/>',
  components: { App }
})
//
// import PageSensor from './components/pageSensor/pageSensor'
// var sensorElements = document.getElementsByClassName('pageSensor')
// console.log('sensorElements is ', sensorElements)
// Array.prototype.forEach.call(sensorElements, function (el) {
//   new Vue({
//     el: el,
//     template: '<PageSensor/>',
//     components: { PageSensor }
//   })
// })
//
// import PageTop from './components/pageTop/pageTop'
// var topElements = document.getElementsByClassName('pageTop')
// console.log('elements is ', topElements)
// Array.prototype.forEach.call(topElements, function (el) {
//   new Vue({
//     el: el,
//     template: '<PageTop/>',
//     components: { PageTop }
//   })
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import PageConfig from './components/pageConfig/pageConfig.vue'
import PageConfigDevice from './components/pageConfigDevice/pageConfigDevice.vue'
import PageConfigDeviceResult from './components/pageConfigDeviceResult/pageConfigDeviceResult.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // コロンで始まる動的セグメント
    { path: '/config', component: PageConfig },
    { path: '/configDevice/:type', component: PageConfigDevice },
    { path: '/configDeviceResult', component: PageConfigDeviceResult }
  ]
})

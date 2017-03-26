import Vue from 'vue'
import VueRouter from 'vue-router'
import PageContents from './components/pageContents/pageContents.vue'
import PageConfig from './components/pageConfig/pageConfig.vue'
import PageConfigDevice from './components/pageConfigDevice/pageConfigDevice.vue'
import PageConfigDeviceResult from './components/pageConfigDeviceResult/pageConfigDeviceResult.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // コロンで始まる動的セグメント
    { path: '/', component: PageContents },
    { path: '/config', component: PageConfig },
    { path: '/configDevice/:type', component: PageConfigDevice },
    { path: '/configDeviceResult', component: PageConfigDeviceResult }
  ]
})

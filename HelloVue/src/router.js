import Vue from 'vue'
import VueRouter from 'vue-router'
import PageLoading from './components/pageLoading/pageLoading.vue'
import PageContents from './components/pageContents/pageContents.vue'
import PageConfig from './components/pageConfig/pageConfig.vue'
import PageConfigDevice from './components/pageConfigDevice/pageConfigDevice.vue'
import PageConfigDeviceResult from './components/pageConfigDeviceResult/pageConfigDeviceResult.vue'

Vue.use(VueRouter)

// const PageContentsLoading = resolve => {
//   // require.ensure はコード分割のための Webpack の特殊な文法です。
//   require.ensure(['./components/pageContents/pageContents.vue'], () => {
//     resolve(require('./components/pageContents/pageContents.vue'))
//   })
// }
//
// const PageContentsLoading = resolve => require(['./components/pageContents/pageContents.vue'], resolve)

export default new VueRouter({
  routes: [
    // コロンで始まる動的セグメント
    { path: '/', component: PageLoading },
    { path: '/contents', component: PageContents },
    { path: '/config', component: PageConfig },
    { path: '/configDevice/:type', component: PageConfigDevice },
    { path: '/configDeviceResult', component: PageConfigDeviceResult }
  ]
})

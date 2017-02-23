import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  count: 0,
  data: [],
  text: 'hello',
  deviceConfigInfo: {}
}

const mutations = {
  increment (state) {
    console.log('increment is called')
    state.count++
  },
  getData (state, data) {
    state.data = data
  },
  resetData (state) {
    state.data = []
  },
  setDeviceConfigInfo (state, type) {
    state.deviceConfigInfo = {
      'type': type,
      'name': ''
    }
  },
  setDeviceConfigInfoName (state, name) {
    state.deviceConfigInfo.name = name
  },
  initDeviceConfigInfo (state) {
    state.deviceConfigInfo = {}
  }
}

console.log('ENV is ', process.env.NODE_ENV)
let uri = ''
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:3000/'
} else {
  uri = 'http://xxxxxxxxx:3000/'
}
var api = axios.create({
  baseURL: uri,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
const actions = {
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  sampleAPI ({ commit }) {
    api.get('posts').then(response => {
      console.log('api is called.response is ', response)
      commit('getData', response.data)
    })
  },
  getDeviceConfigInfoName ({ commit }) {
    console.log('getDeviceConfigInfoName is called')
    commit('setDeviceConfigInfoName', 'responseName')
  }
}

const getters = {
  dataSize: (state, getters) => {
    console.log('dataSize is called')
    return state.data.length
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

import Vue from 'vue'
import App from './App'
import webSocketService from './services/webSocketService'
import store from './store'

Vue.config.productionTip = false

Vue.use(webSocketService, {
  store,
  url: 'ws://localhost:44444'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})

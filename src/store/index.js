import Vue from 'vue'
import Vuex from 'vuex'

// Modules.
import notifications from './modules/notifications'

// Use Vuex.
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifications
  }
})

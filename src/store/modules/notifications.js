const namespaced = true

const state = {
  notifications: []
}

const getters = {
  getNotifications: state => {
    return state.notifications
  }
}

const mutations = {
  changeNotifications: (state, payload) => {
    state.notifications.push(payload)
  }
}

const actions = {
  setNotifications: ({commit}, payload) => {
    commit('changeNotifications', payload)
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

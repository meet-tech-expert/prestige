export default {
  strict: false,
  state() {
    return {
      isAuthenticated: false,
      showLogin: false,
      showSignup: false,
      currentUser: [],
    }
  },
  mutations: {
    closeAuthPopup(state) {
      state.showLogin = false
      state.showSignup = false
    },
    showLoginPopup(state) {
      state.showLogin = true
    },
    showSignupPopup(state) {
      state.showSignup = true
    },
    logOutUser(state) {
      state.currentUser = ''
      state.isAuthenticated = false
    },
    authenticateUser(state, user) {
      state.currentUser = user
      state.isAuthenticated = true
    },
    logOutUser(state) {
      state.currentUser = ''
      state.isAuthenticated = false
    },
  },
  actions: {
    async setCurrentUser({ commit }, user) {
      commit('authenticateUser', await user)
    },
  },
}

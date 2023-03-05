export default {
  logout({ commit }) {
    commit('setCurrentUser', { loggedIn: false, user: null })
  },
}

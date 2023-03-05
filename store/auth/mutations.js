export default {
  setCurrentUser(state, payload) {
    state.loggedIn = payload.loggedIn
    state.user = payload.user
  },
}

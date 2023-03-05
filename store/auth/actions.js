export default {
  login({ commit }, response) {
    // POST /auth/login , axios.post(url, payload).then()
    // if success then set response.data
    commit('setCurrentUser', response.data)
  },
}

export const state = () => ({
  user: {}
})

export const getters = {
  getUser(state) {
    console.log('get user', state)
    return state.user
  }
}

// this.$store.commit
export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearUser(state) {
    state.user = {}
  }
}

// this.$store.dispatch
export const actions = {
  async checkSession(context) {
    try {
      const user = await this.$axios.$get('/login')
      context.commit('setUser', user)
    } catch {
      context.commit('clearUser')
    }
  },
  async logout(context) {
    await this.$axios.$get('/logout')
    context.commit('clearUser')
  }
}

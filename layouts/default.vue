<template>
  <div class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~/assets/TextLogo.png"
            alt="Vision Zero Reporting logo"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <!-- See: https://stackoverflow.com/questions/57358490/how-to-use-nuxt-link-tag-in-buefy -->
        <nuxt-link v-if="!isLoggedIn" to="/" class="navbar-item">Home</nuxt-link>
        <nuxt-link v-else to="/dashboard" class="navbar-item">Dashboard</nuxt-link>
        <nuxt-link to="/issues" class="navbar-item">Issues</nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <nuxt-link v-if="!isLoggedIn" to="/register" class="button is-text">Register</nuxt-link>
            <nuxt-link v-if="!isLoggedIn" to="/login" class="button is-info">Log in</nuxt-link>
            <a v-else class="button is-info" @click="logout">Log out</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <br/>

    <Nuxt />

    <footer>
      &copy; Vision Zero Reporting&trade; 2021-2024. All rights reserved.
      <a class="no-external" href="mailto:visionzeroreporting@gmail.com"><b-icon icon="email" size="is-small" /> Email us</a> for support or questions.<!--<a class="no-external" href="https://twitter.com/ZeroReporting" target="_blank"><b-icon icon="twitter" size="is-small" /> follow us on Twitter</a>-->
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('checkSession')
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    isLoggedIn() {
      return Boolean(this.$store.getters.getUser?.id)
    }
  },
  head() {
    const pageTitle = this.$route.name.substr(0,1).toUpperCase() + this.$route.name.substr(1) // $route.name refers to file name, not component name

    return {
      title: `Vision Zero Reporting - ${pageTitle}`
    }
  }
}
</script>

<style scoped>
.container { max-width: 900px !important; }
footer {
  font-size: 0.8em;
  padding: 10px 0;
}
footer a { border: none; }
a.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

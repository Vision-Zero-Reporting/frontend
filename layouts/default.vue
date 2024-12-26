<template>
  <div id="default-layout">
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
    </div>
    <footer class="footer">
      <div class="container">
        <div>
          <img
            src="~/assets/TextLogo.png"
            alt="Vision Zero Reporting logo"
            width="80"
          >
          <p>&copy; Vision Zero Reporting&trade; 2021-2024. All rights reserved.</p>
        </div>
        <div>
          <a class="no-external" href="mailto:visionzeroreporting@gmail.com"><b-icon icon="email" size="is-small" /> Contact us</a>
        </div>
      </div>
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
  font-size: 0.9em;
  padding: 20px 0;
  margin-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1)
}
footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer a { border: none; }
a.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

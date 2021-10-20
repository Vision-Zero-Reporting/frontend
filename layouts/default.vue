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
      <template #end>
        <!-- See: https://stackoverflow.com/questions/57358490/how-to-use-nuxt-link-tag-in-buefy -->
        <nuxt-link to="/issues" class="navbar-item">
          Issues
        </nuxt-link>
        <!-- <nuxt-link to="/partners" class="navbar-item">
          Partners
        </nuxt-link> -->
        <!-- <nuxt-link to="/contact" class="navbar-item">
          Contact
        </nuxt-link> -->
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
        <a class="navbar-item" href="https://twitter.com/ZeroReporting" target="_blank">
          <b-icon icon="twitter" size="is-small" type="is-info" />
        </a>
      </template>
    </b-navbar>

    <br/>

    <Nuxt />

  </div>
</template>

<script>
export default {
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
a.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

<template>
  <div class="container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~/assets/logo.png"
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
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
      </template>
    </b-navbar>

    <br/>

    <Nuxt />

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container { max-width: 900px !important; }
a.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
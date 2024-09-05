<template>
  <div>
    <center>
      <h1 class="title is-2">Welcome, {{ firstName }}</h1>
    </center>

    <br/>

    <ArticleCapture />

    <br />

  </div>
</template>

<script>
import ArticleCapture from '../components/ArticleCapture.vue'

export default {
  name: 'Dashboard',
  middleware: 'authenticated',
  head: {
    title: 'Vision Zero Reporting - Dashboard'
  },
  data() {
    return {
    }
  },
  computed: {
    firstName() {
      return this.$store.getters.getUser?.first_name
    } 
  },
  components: {
    ArticleCapture
  },
  methods: {}
}
</script>

<style scoped>

</style>

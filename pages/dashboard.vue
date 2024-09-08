<template>
  <div>
    <h1 class="title is-2">Welcome, {{ firstName }}</h1>

    <br/>

    <ArticleCapture />

    <br />
    <br />

    <h2 class="title is-4 lined">Additional resources</h2>
    <div class="columns">
      <div v-for="card in cards" class="column">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  <b-icon :icon="card.icon" />
                  {{ card.title }}
                </p>
                <b-tag type="is-primary is-light">Coming soon!</b-tag>
              </div>
            </div>

            <div class="content">
              {{ card.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
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
      cards: [
        {
          title: 'Statistics',
          icon: 'chart-bar',
          description: 'See an overview of key metrics based on all the articles we\'ve audited!'
        },
        {
          title: 'Press toolkit',
          icon: 'notebook-edit-outline',
          description: 'Download an easy-to-use checklist and other resources for writing news articles'
        },
        {
          title: 'API Access',
          icon: 'cogs',
          description: 'For researchers and publishers, programatically assess articles using our software'
        }
      ]
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

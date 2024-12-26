<template>
  <div>
    <h1 class="title is-2">Welcome, {{ firstName }}</h1>

    <br/>

    <ArticleCapture />

    <br />

    <b-table :data="tableData" :columns="columns">
      <b-table-column field="title" label="Title" v-slot="props">
        <nuxt-link :to="`/article/${props.row.uuid}`">
          {{ props.row.title }}
        </nuxt-link>
      </b-table-column>
      <b-table-column field="date_created" label="Submitted on" v-slot="props">
        {{ new Date(props.row.date_created).toLocaleString() }}
      </b-table-column>
      <template #empty>
        <b-notification has-icon :closable=false>
          Articles that you have submitted will appear here.
          Submit an article above to get started.
        </b-notification>
      </template>
    </b-table>

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
      tableData: [],
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
  mounted() {
    this.$axios.get('/user/recent-articles')
      .then(response => {
        this.tableData = response.data.map((data) => ({
          ...data,
          date_created: new Date(data.date_created).toLocaleString()
        }))
      })
  },
  methods: {}
}
</script>

<style scoped>

</style>

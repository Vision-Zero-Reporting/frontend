<template>
  <div>
    <b-message v-if="isError" type="is-danger" has-icon>
      <p>An error occurred while processing this request.</p>
      <p><strong>Details</strong>: {{isError}}</p>
    </b-message>

    <h1 class="title is-2">Report</h1>

    <report-summary
      :article="article"
      :problems="problems"
      :score="score"
    />

    <section id='problems' class='primary'>
      <h2 class="title is-4">Problems</h2>

      <b-progress v-if="isLoading"></b-progress>
      <div v-else>
        <ol v-if="problemsCategorizedNonEmpty.length">
          <div class="problem-list" v-for="category in problemsCategorizedNonEmpty" :key="category.name">
            <problem-category
              :category="category"
              :article="article"
            />
          </div>
        </ol>
        <div v-else class="empty">
          <h3 class="title is-5">
            <b-icon icon="check" />
            No problems were detected.
          </h3>
          <h4 class="subtitle is-6">You should manually verify that there are no issues. Refer to the <nuxt-link to="/issues">Issues</nuxt-link> page.</h4>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ProblemTypes from '../../../assets/ProblemTypes'
import ReportSummary from '../../../components/ReportSummary.vue'
import ProblemCategory from '../../../components/ProblemCategory.vue'

export default {
  name: 'Report',
  components: { ReportSummary, ProblemCategory },
  data() {
    return {
      uuid: '',
      isLoading: true,
      isError: '',
      article: {
        url: '',
        title: '',
        body: ''
      },
      problems: [],
      score: {},
      ProblemTypes,
    }
  },
  methods: {
    getReport() {},
  },
  mounted() {
    this.uuid = this.$route.params.uuid
    let body = ''
    this.$axios.get(`/report/${this.uuid}`)
      .then(response => {
        this.problems = response.data.problems
        this.score = response.data.score
        // If URL was used, these fields need to be populated
        this.$set(this.article, 'title', response.data.title)
        this.$set(this.article, 'body', response.data.body)
        // UNKNOWN: for some reason setting `this.article.body` as shown above is not working reactively,
        // so the body is saved for later, and set in the .finally() clause;
        body = response.data.body
      })
      .catch(error => {
        this.isError = error.message
      })
      .finally(() => {
        this.article.body = body
        this.isLoading = false

        if(this.article.url && !this.article.body) {
          this.isError = 'It looks like we were unable to extract the article content from the requested URL. You can go back and manually enter the content.'
        }
      })
  },
  computed: {
    problemsCategorized() {
      const categories = {...ProblemTypes}
      Object.values(categories).forEach(category => {
        category.count = 0
        category.problems = []
      })

      this.problems.forEach(problem => {
        categories[problem.type].count += 1
        categories[problem.type].problems.push(problem)
      })

      // There needs to be at least three thematic elements for
      // the "framing" report not to trigger
      if(categories['FRAMING'].problems.length < 5) {
        if(categories['FRAMING'].problems.length === 0) { // make sure the reporter shows up even if there are no thematic phrases
          categories['FRAMING'].count = 1
          categories['FRAMING'].problems = []
        }
      }
      else {
        delete categories['FRAMING']
      }

      delete categories.OBJECTP
      return Object.values(categories)
    },
    problemsCategorizedNonEmpty() {
      return this.problemsCategorized.filter(category => category.count)
    }
  }
}
</script>

<style scoped>
section.primary { margin: 40px 0; }
#overview {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
}

h1 { width: 70%; }
.empty { background-color: #f9f9f9; padding: 20px; text-align: center; }

div.level-item { background-color: #e5e5e5; }
p.title { font-size: 1.2em; }
</style>

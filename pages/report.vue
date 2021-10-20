<template>
  <div>
    <b-message v-if="isError" type="is-danger" has-icon>
      <p>An error occurred while processing this request.</p>
      <p><strong>Details</strong>: {{isError}}</p>
    </b-message>

    <h1 class="title is-2">Report</h1>

    <report-summary :article="article" :problems="problems" />

    <section id='problems' class='primary'>
      <h2 class="title is-4">Problems</h2>

      <b-progress v-if="isLoading"></b-progress>
      <div v-else>
        <ol v-if="problems.length">
          <div class="problem-list" v-for="category in problemsCategorizedNonEmpty" :key="category.name">
            <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
              <template #trigger="props">
                <div
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3">
                  <p class="card-header-title">
                    <b-icon :icon="category.icon" />
                    <span>{{category.name}}</span>
                    <small>{{category.count}} {{category.count == 1 ? 'issue' : 'issues'}}</small>
                  </p>
                  <a class="card-header-icon">
                    <b-tag type="is-warning" v-if="category.isExperimental">
                      <b-icon icon="flask-outline" size="is-small" />
                      Experimental
                    </b-tag>
                    <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
                  </a>
                </div>
              </template>

              <div class="card-content">
                <h5 class="subtitle is-6">
                  {{category.issue}}.
                  {{category.explain}}
                  <nuxt-link :to="{ path: '/issues', hash: category.name.toLowerCase() }">[Learn more about {{category.name.toLowerCase()}}]</nuxt-link>
                </h5>

                <section>
                  <label>Sentences</label>
                  <ol v-if="category.problems.length">
                    <li v-for="problem in category.problems" :key="problem">
                      <q>{{problem.sentence}}</q>
                      <b-tag type="is-warning is-light" v-if="problem.details && category.id == 'COUNTER'">
                        {{Counterfactuals[problem.details].name}}
                      </b-tag>
                    </li>
                  </ol>
                  <ul v-else>
                    <li>None found.</li> <!-- for Framing reporter -->
                  </ul>
                </section>

                <section>
                  <label>How to fix</label>
                  <p>{{category.fix}}</p>
                </section>

                <section v-if="category.examples">
                  <label>Examples</label>
                  <ul>
                    <li v-for="example in category.examples" :key="example.text" class="example" :class="example.type">{{example.text}}</li>
                  </ul>
                </section>
              </div>
            </b-collapse>
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
import ProblemTypes from '../assets/ProblemTypes'
import Counterfactuals from '../assets/Counterfactuals'
import ReportSummary from '../components/ReportSummary.vue'

export default {
  name: 'Report',
  components: { ReportSummary },
  data() {
    return {
      isLoading: true,
      isError: '',
      article: {
        url: '',
        title: '',
        body: ''
      },
      problems: [],
      ProblemTypes,
      Counterfactuals
    }
  },
  methods: {
    getReport() {
      const reportBody = this.article.url ? { url: this.article.url } : { title: this.article.title, body: this.article.body }
      let body = ''
      this.$axios.post('/report', reportBody)
        .then(response => {
          this.problems = response.data.problems
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
  },
  mounted() {
    this.article = {
      url: this.$route.query.url || '',
      title: this.$route.query.title || '',
      body: this.$route.query.body || ''
    }
    this.getReport()
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
      if(categories['FRAMING'].problems.length < 3) {
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

small { font-style: italic; padding-left: 10px; }
h1 { width: 70%; }
.empty { background-color: #f9f9f9; padding: 20px; text-align: center; }

div.level-item { background-color: #e5e5e5; }
p.title { font-size: 1.2em; }

.card-header-title span:not([class^="icon"]) {
  margin-left: 4px;
}
.card-header-title small { font-weight: normal; font-style: normal; }
.problem-list h5.subtitle { border-bottom: 0.75rem; }
.problem-list ol { margin-left: 15px; }
.problem-list q {
  padding: 3px;
  background-color: #f2f2f2;
  font-style: italic;
}

.card-content section {
  padding-left: 15px;
  margin-top: 15px;
}
.card-content section label {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 0.7em;
  color: #777;
  display: inline-block;
  margin-bottom: 6px;
  position: relative;
  left: -15px;
}

ol li {
  margin: 6px 0;
}

li.example::before {
  color: #444;
  margin: 0 6px 0 0;
}
li.good::before { content: '\2713' }
li.bad::before { content: '\2A2F' }
</style>

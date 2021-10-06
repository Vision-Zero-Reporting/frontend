<template>
  <div>
    <b-message v-if="isError" type="is-danger" has-icon>
      <p>An error occurred while processing this request.</p>
      <p><strong>Details</strong>: {{isError}}</p>
    </b-message>

    <h1 class="title is-2">Report</h1>

    <section id='overview' class='primary'>
      <div class="columns">
        <div class="column is-2">
          <div id="grade" :data-grade="grade.letter">
            <label>{{grade.letter}}</label>
            <span>{{grade.score}} pts</span>
          </div>
        </div>
        <div class="column">
          <table id="details-table">
            <tr>
              <th width="50%">Type:</th>
              <td>Manual entry</td>
            </tr>
            <tr>
              <th>Report generated:</th>
              <td>{{new Date().toLocaleString()}}</td>
            </tr>
          </table>
        </div>
        <div class="column is-3">
          <b-button @click="reportError" type="is-text" icon-left="alert-outline">
            Report an error
          </b-button>
          <b-button @click="printReport" type="is-text" icon-left="printer">
            Print this report
          </b-button>
        </div>
      </div>
    </section>

    <section id='article' class='primary'>
      <h2 class="title is-4">Article</h2>
      <article class="content">
        <h2 class='title is-4'>{{title}}</h2>
        <highlightable-input
          ref="highligher"
          highlight-style="background-color:yellow"
          :highlight="highlight"
          v-model="body"
        />
      </article>
      <div id="legend">
        <span class="legend-entry" v-for="problemType in registeredProblemTypes" :key="problemType.id">
          <span class="legend-color" :style="{ 'background-color': problemType.lightColor, 'border-color': problemType.color }"></span>
          <span>{{problemType.name}}</span>
        </span>
      </div>
      <small>* Not all highlights will be shown above if there are overlapping issues</small>
    </section>

    <section id='problems' class='primary'>
      <h2 class="title is-4">
        <!-- <b-icon :icon="statusIcon" /> -->
      Problems</h2>

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
                  <nuxt-link to="/issues">[Learn more about {{category.name.toLowerCase()}}]</nuxt-link>
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
          <!-- <problem-entry v-for="problem in problems" :key="problem" :problem="problem" :body="body" /> -->
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
import HighlightableInput from 'vue-highlightable-input'
import getGrade from '../assets/Grade'

export default {
  name: 'Report',
  components: { HighlightableInput },
  data() {
    return {
      isLoading: true,
      isError: '',
      title: '',
      body: '',
      problems: [],
      ProblemTypes,
      Counterfactuals
    }
  },
  methods: {
    getReport() {
      this.$axios.post('/report', { title: this.title, body: this.body })
        .then(response => {
          this.problems = response.data.problems
        })
        .catch(error => {
          this.isError = error.message
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    printReport() {
      // TODO: black-and-white printing
      // TODO: expand all collapsibles before printing
      window.print()
    },
    reportError() {
      this.$router.push('/contact')
    }
  },
  mounted() {
    this.title = this.$route.query.title
    this.body = this.$route.query.body
    this.getReport()
    this.$refs.highligher.$el.setAttribute('contenteditable', 'false')
  },
  computed: {
    highlight() {
      if(this.problems.length === 0) return [ { start: 0, end: 1, style: 'border: 0px solid #000' } ]

      return this.problems.map(problem => {
        return { start: problem.range[0], end: problem.range[1], style: `border-bottom: 1px SOLID ${ProblemTypes[problem.type].color}; background-color: ${ProblemTypes[problem.type].lightColor}` }
      })
    },
    registeredProblemTypes() {
      return Object.values(this.ProblemTypes).filter(problemType => problemType.displayAsRegistered)
    },
    problemsCategorized() {
      const categories = {...ProblemTypes}
      Object.values(categories).forEach(category => {
        category.count = 0
        category.problems = []
      })

      this.problems.forEach(problem => {
        if(problem.type == 'OBJECTP') problem.type = 'OBJECT' // count OBJECTP and OBJECT as same category
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
    grade() {
      if(this.isLoading) return { letter: '-', score: 0 }
      return getGrade(this.problems)
    },
    problemsCategorizedNonEmpty() {
      return this.problemsCategorized.filter(category => category.count)
    },
    statusIcon() {
      if(this.isLoading) return 'loading'
      if(this.problems.length) return 'alert-circle-outline'
      return 'check-outline'
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

#grade {
  font-size: 2em;
  text-align: center;
  border: 2px SOLID rgba(0,0,0,0.3);
  padding: 10px;
}
#grade[data-grade="A+"] { color: #4ec83d; border-color: #4ec83d; background-color: #dbf4d7; }
#grade[data-grade="A"]  { color: #8cd544; border-color: #8cd544; background-color: #e6f6d5; }
#grade[data-grade="B"]  { color: #cee04c; border-color: #cee04c; background-color: #f3f7d4; }
#grade[data-grade="C"]  { color: #eac556; border-color: #eac556; background-color: #f9efd2; }
#grade[data-grade="D"]  { color: #f39861; border-color: #f39861; background-color: #fbe0d0; }
#grade[data-grade="F"]  { color: #fa6e6e; border-color: #fa6e6e; background-color: #fdcece; }

#grade label {
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.5)
}
#grade span {
  display: block;
  font-size: 0.5em;
  font-weight: normal;
  color: #000 !important;
}
#details-table { margin: 10px; }

article.content {
  border: 1px SOLID #ddd;
  padding: 20px;
  margin-bottom: 0;
}
#legend { margin-left: 10px; }
.legend-entry { margin: 0 5px; }
.legend-color { width: 12px; height: 12px; display: inline-block; border: 1px SOLID #000; }
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

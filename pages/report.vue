<template>
  <div>
    <b-message v-if="isError" type="is-danger" has-icon>
      <p>An error occurred while processing this request.</p>
      <p><strong>Details</strong>: {{isError}}</p>
    </b-message>

    <h1 class="title is-2">Report</h1>
    <article class="content">
      <h2 class='title is-4'>{{title}}</h2>
      <highlightable-input 
        ref="highligher"
        highlight-style="background-color:yellow" 
        :highlight="highlight"
        v-model="body"
      />
    </article>
    <small>* Not all highlights will be shown above if there are overlapping issues</small>

    <hr />

    <section id='problems'>
      <h2 class="title is-4"><b-icon :icon="statusIcon" /> Problems</h2>
      <h3 class="subtitle is-6">Article analysis is complete and displayed below</h3>

      <nav class="level is-mobile">
        <div class="level-item has-text-centered" v-for="category in problemsCategorized" :key="category.name" :style="{ 'background-color': category.count ? category.lightColor : '#f5f5f5' }">
          <div>
            <p class="title">{{category.count || '0'}}</p>
            <p class="heading">
              {{category.id}}
            </p>
          </div>
        </div>
      </nav>

      <b-progress v-if="isLoading"></b-progress>
      <div v-else>
        <ol v-if="problems.length">
          <div class="problem-list" v-for="category in problemsCategorizedNonEmpty" :key="category.name">
            <h4 class="title is-5">
              <b-icon :icon="category.icon" />
              {{category.name}}
            </h4>
            <h5 class="subtitle is-6">{{category.issue}}. {{category.explain}}</h5>

            <label>Sentences</label>
            <ol>
              <li v-for="problem in category.problems" :key="problem">
                <q>{{problem.sentence}}</q>
              </li>
            </ol>

            <br />

            <label>How to fix</label>
            <p>{{category.fix}}</p>

            <br />

            <div v-if="category.examples">
              <label>Examples</label>
              <ul>
                <li v-for="example in category.examples" :key="example.text" class="example" :class="example.type">{{example.text}}</li>
              </ul>
            </div>
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
import HighlightableInput from "vue-highlightable-input"

export default {
  name: 'Report',
  components: { HighlightableInput },
  data() {
    return {
      isLoading: true,
      isError: '',
      title: '',
      body: '',
      problems: []
    }
  },
  methods: {
    getReport() {
      this.$axios.post(`/report`, { title: this.title, body: this.body })
        .then(response => {
          this.problems = response.data.problems
        })
        .catch(error => {
          this.isError = error.message
        })
        .finally(() => {
          this.isLoading = false
        })
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

      delete categories.OBJECTP
      return Object.values(categories)
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
article.content {
  border: 2px SOLID #ddd;
  padding: 20px;
  margin-bottom: 0;
}
small { font-style: italic; padding-left: 10px; }
h1 { width: 70%; }
.empty { background-color: #f9f9f9; padding: 20px; text-align: center; }

div.level-item { background-color: #e5e5e5; }
p.title { font-size: 1.2em; }

.problem-list { margin: 60px 0 0 20px; }
.problem-list h5.subtitle { border-bottom: 0.75rem; }
.problem-list ol { margin-left: 40px; }
.problem-list q {
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 2px SOLID rgba(0, 0, 0, 0.1);
  font-style: italic;
}

li.example::before {
  color: #444;
  margin: 0 12px;
}
li.good::before { content: '\2713' }
li.bad::before { content: '\2A2F' }

label {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 0.7em;
  color: #777;
  display: inline-block;
  margin-bottom: 6px;
}
</style>
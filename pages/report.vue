<template>
  <div>
    <h1 class="title is-3">Report</h1>
    <article class="content">
      <h2 class='title is-4'>{{title}}</h2>
      <highlightable-input 
        ref="highligher"
        highlight-style="background-color:yellow" 
        :highlight="highlight"
        v-model="body"
      />
    </article>

    <hr/>

    <section id='problems'>
      <h2 class="title is-4">Problems</h2>
      <b-progress v-if="isLoading"></b-progress>
      <div v-else>
        <ol v-if="problems.length">
          <problem-entry v-for="problem in problems" :key="problem" :problem="problem" :body="body" />
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
import ProblemEntry from '../components/ProblemEntry.vue'
import HighlightableInput from "vue-highlightable-input"

export default {
  name: 'Report',
  components: { ProblemEntry, HighlightableInput },
  data() {
    return {
      isLoading: true,
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
          console.log(error)
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
      if(this.problems.length === 0) return [ { start: 0, end: 1, style: 'border: 0px solid #000' } ];

      return this.problems.map(problem => {
        return { start: problem.range[0], end: problem.range[1], style: `border: 2px SOLID ${ProblemTypes[problem.type].color}` }
      })
    }
  }
}
</script>

<style scoped>
article {
  border: 2px SOLID #ddd;
  padding: 20px;
}
h1 { width: 70%; }
.empty { background-color: #f9f9f9; padding: 20px; text-align: center; }
</style>
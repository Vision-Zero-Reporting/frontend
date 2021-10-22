<template>
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
        <highlightable-input
          ref="highlighter"
          highlight-style="background-color:yellow"
          :highlight="highlights"
          v-model="highlighterBody"
        />

        <!-- <label>Sentences</label>
        <ol v-if="category.problems.length">
          <li v-for="problem in category.problems" :key="problem">
            <q>{{problem.sentence}}</q>
            <b-tag type="is-warning is-light" v-if="problem.details && category.id == 'COUNTER'">
              {{Counterfactuals[problem.details].name}}
            </b-tag>
          </li>
        </ol>
        <ul v-else>
          <li>None found.</li> for Framing reporter
        </ul> -->
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
</template>

<script>
import HighlightableInput from 'vue-highlightable-input'
// import Counterfactuals from '../assets/Counterfactuals'

export default {
  name: 'ProblemCategory',
  props: ['category', 'article'],
  components: { HighlightableInput },
  data() {
    return {
      // Counterfactuals
    }
  },
  mounted() {
    this.$refs.highlighter.$el.setAttribute('contenteditable', 'false')
  },
  computed: {
    highlighterBody() {
      // This computed value is made to avoid a vue/no-mutating-props with the highlighter v-model
      // The above eslint error was never a real problem, because contenteditable=false, so the
      // two-way data binding to the prop never actually exists
      return this.article.body
    },
    highlights() {
      if(this.category.problems.length === 0) return [ { start: 0, end: 1, style: 'border: 0px solid #000' } ]

      return this.category.problems.map(problem => {
        return {
          start: problem.range[0],
          end: problem.range[1],
          style: 'border-bottom: 2px SOLID #222; color: #222; font-size: 110%; font-style: italic;'
        }
      })
    },
  }
}
</script>

<style scoped>
small { font-style: italic; padding-left: 10px; }

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

div[contentEditable="false"] {
  background-color: #f9f9f9;
  padding: 10px;
  color: #555;
  font-size: 90%;
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
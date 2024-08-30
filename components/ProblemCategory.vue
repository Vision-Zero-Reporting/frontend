<template>
  <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
    <template #trigger="props">
      <div
        :id="category.id"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3">
        <p class="card-header-title">
          <b-icon :icon="category.icon" />
          <span>{{category.name}}</span>
          <small>{{category.count}} {{category.count == 1 ? 'issue' : 'issues'}}</small>
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
        </a>
      </div>
    </template>

    <div class="card-content">
      <h5 class="subtitle is-6">
        {{category.issue}}.
        {{category.explain}}
        <nuxt-link :to="{ path: '/issues', hash: category.name.toLowerCase() }">[Learn more about {{category.name.toLowerCase()}} issues]</nuxt-link>
      </h5>

      <section>
        <label>Identified elements</label>
        <highlightable-input
          ref="highlighter"
          highlight-style="background-color:yellow"
          :highlight="highlights"
          v-model="highlighterBody"
        />
      </section>

      <section>
        <label>How to fix</label>
        <p>{{category.fix}}</p>
      </section>

      <div v-if="category.id == 'FRAMING'">
        <section>
          <label>Details</label>
          <framing-details :problems="category.problems" />
        </section>
      </div>
      <div v-else-if="category.id == 'COUNTER'">
        <section>
          <label>Details</label>
          <CounterfactualDetails />
        </section>
      </div>
      <div v-else>
        <section v-if="category.examples">
          <label>Examples</label>
          <ul>
            <li v-for="example in category.examples" :key="example.text" class="example" :class="example.type">{{example.text}}</li>
          </ul>
        </section>
      </div>

    </div>
  </b-collapse>
</template>

<script>
import HighlightableInput from 'vue2-input-highlighter'
import FramingDetails from '../components/FramingDetails.vue'
import CounterfactualDetails from '../components/CounterfactualDetails.vue'

export default {
  name: 'ProblemCategory',
  props: ['category', 'article'],
  components: { HighlightableInput, FramingDetails, CounterfactualDetails },
  data() {
    return {}
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
          classList: ['problem', this.$props.category.id]
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

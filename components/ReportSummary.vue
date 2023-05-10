<template>
  <div id='report-summary'>
    <!-- article -->
    <article>
      <span id="grade" class="is-pulled-right" :data-grade="letter">{{letter}}</span>
      <h2 class="title is-4">{{article.title}}</h2>
      <h3 class="subtitle is-6" v-if="article.url">
        <span>{{article.url}}</span><br />
      </h3>

      <p v-if="!highlightsVisible" v-html="article.body"></p>

      <div v-if="highlightsVisible">
        <highlightable-input
          ref="highlighter"
          highlight-style="background-color:yellow"
          :highlight="highlights"
          v-model="highlighterBody"
        />
        <highlight-legend />
      </div>

    </article>

    <!-- scoring -->
    <div id='scoring'>
      <table width="100%">
        <thead>
          <tr>
            <th width="10%">Impact</th>
            <th width="10%">Audit</th>
            <th width="60%"></th>
            <th width="10%">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="key in Object.keys(currentScores)" :key="key">
            <td>{{impact[key]}}</td>
            <td>{{key | firstCap}}</td>
            <td class="scoring-message">
              <small v-if="currentScores[key] !== MaxScores[key]">
                <a @click="scrollToKey(key)">
                  <b-icon icon="alert" size="is-small" type="is-warning" />
                  Needs fixing
                </a>
              </small>
              <small v-else>
                 <!-- No action needed -->
              </small>
            </td>
            <td><score :value="currentScores[key]" :max="MaxScores[key]" /></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th><score :value="scoreSum" :max="MaxScore" /></th>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- actions -->
    <div id='actions'>
      <b-button @click="printReport" type="is-text" icon-left="printer">
        Print this report
      </b-button>
      <b-button ref="toggleHighlightsBtn" @click="toggleHighlights" type="is-text" :icon-left="highlightsVisibleBtnIcon">
        Toggle highlights
      </b-button>
      <!-- <b-button @click="reportError" type="is-text" icon-left="alert-outline">
        Report an error
      </b-button> -->
    </div>

    <!-- misc -->
    <footer>
      <small>This report was generated on {{reportDate}}</small>
    </footer>
  </div>
</template>

<script>
import Score from './Score'
import { getGrade, MaxScore, MaxScores } from '../assets/Grade'
import ProblemTypes from '../assets/ProblemTypes'
import HighlightableInput from 'vue2-input-highlighter'
import HighlightLegend from './HighlightLegend'

export default {
  name: 'ReportSummary',
  props: {
    'article': Object,
    'problems': Array
  },
  components: { Score, HighlightableInput, HighlightLegend },
  data() {
    return {
      highlightsVisible: false,
      reportDate: new Date().toLocaleString(),
      MaxScore,
      MaxScores,
      letter: '-',
      scoreSum: 0,
      currentScores: {
        FRAMING: 0,
        COUNTER: 0,
        ACCIDENT: 0,
        OBJECT: 0,
        AGENCY: 0,
        FOCUS: 0
      },
      impact: {
        FRAMING: 'High',
        COUNTER: 'High',
        ACCIDENT: 'Med',
        OBJECT: 'Med',
        AGENCY: 'Low',
        FOCUS: 'Low'
      }
    }
  },
  mounted() {
    // Enable highlights by default; note that we don't just set this
    // to `true` because the $ref.el needs to have contenteditable
    // set to false; see `toggleHighlights()` for details
    this.toggleHighlights()
    setTimeout(() => { // `toggleHighlights()` focuses the button; for initial page load, unfocus it
      document.activeElement.blur()
    }, 1)
  },
  watch: {
    problems() {
      const { letter, currentScores, scoreSum } = getGrade(this.problems)
      this.letter = letter
      this.currentScores = currentScores
      this.scoreSum = scoreSum
    }
  },
  computed: {
    highlighterBody() {
      // This computed value is made to avoid a vue/no-mutating-props with the highlighter v-model
      // The above eslint error was never a real problem, because contenteditable=false, so the
      // two-way data binding to the prop never actually exists
      return this.article.body
    },
    highlightsVisibleBtnIcon() {
      return this.highlightsVisible ? 'eye' : 'eye-off'
    },
    highlights() {
      if(this.problems.length === 0) return [ { start: 0, end: 1, style: 'border: 0px solid #000' } ]

      return this.problems.map(problem => {
        return {
          start: problem.range[0],
          end: problem.range[1],
          classList: ['problem', ProblemTypes[problem.type].id]
        }
      })
    },
  },
  methods: {
    scrollToKey(key) {
      // `scrollTo()` is used instead of a hash because a nuxt-link with
      // a hash was overwriting the query parameters for article title and body
      const sectionElem = document.querySelector(`#${key}`)
      const elmTop = sectionElem.getBoundingClientRect().top + window.scrollY
      window.scrollTo(0, elmTop)
    },
    printReport() {
      // TODO: black-and-white printing
      // TODO: expand all collapsibles before printing
      window.print()
    },
    reportError() {
      this.$router.push('/contact')
    },
    toggleHighlights() {
      this.highlightsVisible = !this.highlightsVisible
      if(this.highlightsVisible) {
        setTimeout(() => { /* Debounce the $refs retrieval to give time for the DOM to update */
          this.$refs.highlighter.$el.setAttribute('contenteditable', 'false')

          // Focus is shifted onto the highlighter element, but instead of
          // blurring the active element (`document.activeElement.blur()`),
          // re-focus the button, which is expected browser behavior
          this.$refs.toggleHighlightsBtn.$el.focus()
        }, 0)
      }
    }
  },
}
</script>

<style scoped>
#report-summary {
  border: 1px SOLID #ddd;
}

#grade {
  font-size: 2em;
  position: relative;
  top: -10px;
}
#grade[data-grade="A+"] { color: #4ec83d; }
#grade[data-grade="A"]  { color: #8cd544; }
#grade[data-grade="B"]  { color: #cee04c; }
#grade[data-grade="C"]  { color: #eac556; }
#grade[data-grade="D"]  { color: #f39861; }
#grade[data-grade="F"]  { color: #fa6e6e; }

td.bad { background-color: rgba(200, 0, 0, 0.05); }

article {
  background-color: #f9f9f9;
  padding: 10px;
}

table { border: 1px SOLID #ddd; border-left: none; border-right: none; }
th,td { padding: 10px; }
th:nth-child(4), td:nth-child(4) { text-align: right; }
.scoring-message a { color: #777; border-bottom: none; }

#actions { padding-top: 10px; }

footer { padding: 10px; }
</style>

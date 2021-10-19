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
          v-model="article.body"
        />
        <highlight-legend />
      </div>

    </article>

    <!-- scoring -->
    <div id='scoring'>
      <table width="100%">
        <thead>
          <tr>
            <th width="15%">Impact</th>
            <th width="65%">Audit</th>
            <th width="20%">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Good</td>
            <td>Framing</td>
            <td><score :value="currentScores.FRAMING" :max="MaxScores.FRAMING" /></td>
          </tr>
          <tr>
            <td>Good</td>
            <td>Counterfactuals</td>
            <td><score :value="currentScores.COUNTER" :max="MaxScores.COUNTER" /></td>
          </tr>
          <tr>
            <td>Good</td>
            <td>Accident</td>
            <td><score :value="currentScores.ACCIDENT" :max="MaxScores.ACCIDENT" /></td>
          </tr>
          <tr>
            <td>Good</td>
            <td>Object-based reference</td>
            <td><score :value="currentScores.OBJECT" :max="MaxScores.OBJECT" /></td>
          </tr>
          <tr>
            <td>Good</td>
            <td>Agency</td>
            <td><score :value="currentScores.AGENCY" :max="MaxScores.AGENCY" /></td>
          </tr>
          <tr>
            <td>Good</td>
            <td>Focus</td>
            <td><score :value="currentScores.FOCUS" :max="MaxScores.FOCUS" /></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
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
import HighlightableInput from 'vue-highlightable-input'
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
      highlightsVisible: true,
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
      }
    }
  },
  mounted() {
    this.highlightsVisible = false
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
    highlightsVisibleBtnIcon() {
      return this.highlightsVisible ? 'eye' : 'eye-off'
    },
    highlights() {
      if(this.problems.length === 0) return [ { start: 0, end: 1, style: 'border: 0px solid #000' } ]

      return this.problems.map(problem => {
        return {
          start: problem.range[0],
          end: problem.range[1],
          style: `border-bottom: 1px SOLID ${ProblemTypes[problem.type].color}; background-color: ${ProblemTypes[problem.type].lightColor}`
        }
      })
    },
  },
  methods: {
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

article {
  background-color: #f9f9f9;
  padding: 10px;
}

table { border: 1px SOLID #ddd; border-left: none; border-right: none; }
th,td { padding: 10px; }
th:nth-child(3), td:nth-child(3) { text-align: right; }

#actions { padding-top: 10px; }

footer { padding: 10px; }
</style>

<template>
  <div id="legend">
    <span class="legend-entry" v-for="problemType in registeredProblemTypes" :key="problemType.id">
      <span class="legend-color" :style="{ 'background-color': `var(--highlight-${problemType.id.toLowerCase()})`, 'border-color': `var(--color-${problemType.id.toLowerCase()})` }"></span>
      <span>{{problemType.name}}</span>
    </span><br />
    <small>* Not all highlights will be shown above if there are overlapping issues</small>
  </div>
</template>

<script>
import ProblemTypes from '../assets/ProblemTypes'

export default {
  name: 'HighlightLegend',
  data() {
    return {
      registeredProblemTypes: Object.values(ProblemTypes)
    }
  }
}
</script>

<style scoped>
#legend { margin-left: 10px; margin-top: 10px; border-top: 1px SOLID #ddd; }
.legend-entry { margin: 0 5px; }
.legend-color { width: 12px; height: 12px; display: inline-block; border: 1px SOLID #000; }
</style>

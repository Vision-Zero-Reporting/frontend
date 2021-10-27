<template>
  <table width="100%">
    <thead>
      <tr>
        <th colspan="2">Name</th>
        <th>Example</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="counter in counterfactuals" :key="counter">
        <td><b-icon :icon="counter.icon" /></td>
        <td>{{counter.name}}</td>
        <td>{{counter.example}}</td>
        <td>{{counter.effect}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Counterfactuals from '../assets/Counterfactuals'

export default {
  name: 'CounterfactualDetails',
  data() {
    return {
      counterfactuals: Object.values(Counterfactuals)
    }
  }
}
</script>

<style scoped>
table {
    font-size: 90%;
    width: auto !important;
}
thead { font-weight: bold; }
td { padding: 4px; }

.initiative {
  padding: 10px;
  background-color: #fbfbfb;
  margin: 20px 0;
  border-radius: 4px;
}
</style>

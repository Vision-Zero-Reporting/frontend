<template>
  <div>
    <span id="value">{{value}}</span>
    <span id="slash">/</span>
    <span id="max">{{max}}</span>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: ['value', 'max']
}
</script>

<style scoped>
#value {
  font-size: 110%;
}
#slash {
  color: #777;
}
#max {
  color: #777;
  position: relative;
  left: -4px;
}
</style>

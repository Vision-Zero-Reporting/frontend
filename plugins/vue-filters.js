import Vue from 'vue'

Vue.filter('firstCap', (str) => {
  return str[0].toUpperCase() + str.substr(1).toLowerCase()
})


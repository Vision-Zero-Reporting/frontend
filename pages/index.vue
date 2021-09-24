<template>
  <div>
    <center>
      <h1 class="title is-2">Vision Zero Reporting is on a mission to improve the way journalists report car <s>accidents</s> <ins>crashes</ins></h1>
    </center>

    <br/>

    <ArticleCapture />

    <hr />

    <h2 class="title is-4">Examples</h2>
    <h3 class="subtitle is-5">Try to figure out what editorial anti-patterns are highlighted below</h3>
    <div class="columns">
      <div class="column">
        <h3 class="title is-5">Article 1</h3>
        <h4 class="subtitle is-6"><a @click="tryExample1">Try it out live &raquo;</a></h4>
        <p>
          A 35-year-old <mark class="focus">woman was hit by a car</mark> in Queens on Saturday, August 28th. The <mark class="focus">woman was run over at about 5:50 a.m. by a grey or silver SUV</mark> at the intersection of Hillside Avenue and Queens Boulevard in the Jamaica neighborhood of Queens. The driver fled the scene. Surveillance video found online shows the victim, unsteady on her feet, falling over onto Queens Boulevard. Moments later, the video shows an <mark class="object">SUV running over the pedestrian</mark>, pulling her under its wheels. The driver kept going. The unidentified woman was transported to Jamaica Hospital in critical condition. The <mark class="accident">accident</mark> is under investigation. <mark class="counter">Alcohol does not appear to be a factor</mark>.
        </p>
      </div>
      <div class="column">
        <h3 class="title is-5">Article 2</h3>
        <h4 class="subtitle is-6"><a @click="tryExample2">Try it out live &raquo;</a></h4>
        <p>A <mark class="focus">bicyclist was hit and killed by a car in the Bensonhurst area on Friday morning</mark>, August 27th. The fatal <mark class="accident">accident</mark> happened at the intersection of 16th Avenue and 85th Street around 10:04 a.m. According to local authorities, the woman was attempting to cross at the intersection when <mark class="agency">she was struck</mark>. Police and EMTs responded to the scene and transported Pan to Maimonides Medical Center. She was pronounced deceased a short time later. A preliminary investigation determined that the victim was crossing 16th Avenue when the <mark class="object">pickup struck her</mark> while making a left turn. The 36-year-old male driver of the truck has not been arrested at this time.</p>
      </div>
    </div>

    <hr />


  </div>
</template>

<script>
import ArticleCapture from '../components/ArticleCapture.vue'

export default {
  name: 'HomePage',

  components: {
    ArticleCapture
  },
  methods: {
    goToReportPage(title, body) {
      this.$router.push({ path: 'report', query: { title , body } })
    },
    tryExample1() {
      this.goToReportPage('Queens crash leaves one injured', 'A 35-year-old woman was hit by a car in Queens on Saturday, August 28th. The woman was run over at about 5:50 a.m. by a grey or silver SUV at the intersection of Hillside Avenue and Queens Boulevard in the Jamaica neighborhood of Queens. The driver fled the scene. Surveillance video found online shows the victim, unsteady on her feet, falling over onto Queens Boulevard. Moments later, the video shows an SUV running over the pedestrian, pulling her under its wheels. The driver kept going. The unidentified woman was transported to Jamaica Hospital in critical condition. The accident is under investigation. Alcohol does not appear to be a factor.')
    },
    tryExample2() {
      this.goToReportPage('Bensonhurst accident kills one', 'A bicyclist was hit and killed by a car in the Bensonhurst area on Friday morning, August 27th. The fatal accident happened at the intersection of 16th Avenue and 85th Street around 10:04 a.m. According to local authorities, the woman was attempting to cross at the intersection when she was struck. Police and EMTs responded to the scene and transported Pan to Maimonides Medical Center. She was pronounced deceased a short time later. A preliminary investigation determined that the victim was crossing 16th Avenue when the pickup struck her while making a left turn. The 36-year-old male driver of the truck has not been arrested at this time.')
    }
  }
}
</script>

<style scoped>
s { color: #bbb; }
ins { text-decoration: none; }

mark { padding: 1px; }
mark.focus { background-color: rgba(214, 81, 41, 0.3); }
mark.agency { background-color: rgba(31, 179, 224, 0.3); }
mark.object { background-color: rgba(73, 194, 25, 0.3); }
mark.accident { background-color: rgba(238, 180, 23, 0.3); }
mark.counter { background-color: rgba(244, 220, 42, 0.3); }
</style>
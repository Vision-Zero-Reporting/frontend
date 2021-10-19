<template>
  <div>
    <center>
      <h1 class="title is-2">Vision Zero Reporting is on a mission to improve the way journalists report car <s>accidents</s> <ins>crashes</ins></h1>
    </center>

    <br/>

    <ArticleCapture />

    <hr />

    <h2 class="title is-4">Example</h2>
    <h3 class="subtitle is-5">Take a look at the before and after of a <em>real news article</em> below</h3>
    <div class="columns content">
      <div class="column">
        <article>
          <p>A bicyclist involved in a Central Avenue accident on Tuesday, Sept. 21, has died, police said.</p>
          <p>Jeremy Williams, 39, of Colonie, was riding his bike near the Northway southbound ramp at around 8:30 p.m., said Lt. Robert Donnelly, when he was hit by a 2017 Chevrolet that was entering the ramp.</p>
          <p>Williams was not wearing reflective clothing, did not have a light and was not wearing a helmet. Donnelly said. There is a crosswalk in the area but it does not appear he was using it, Donnelly added.</p>
          <p>The driver of the Chevy, a 41-year-old from Troy, stopped, called 911 and tried to help Williams.</p>
          <p>Williams was taken to Albany Medical Center Hospital by Colonie EMS with serious injuries. He died a day later without regaining consciousness.</p>
        </article>
      </div>
      <div class="column is-one-third commentary">
        <h3 class="title is-5"><b-icon icon="thumb-down-outline" type="is-danger" /> Before</h3>
        <h4 class="subtitle is-6">Episodic, victim-blaming</h4>
        <p>This news article has two major issues.</p>
        <p>Firstly, it employs a <strong>hero-vs-villain storyline</strong>. <em>All the commentary on the bicyclist is negative</em>: numerous faults are attributed to the bicylist, like not wearing reflective clothing or helmet. However, <em>all the commentary about the driver is positive</em>: the driver called for emergency service and tried to help the victim. Even if unintentional, the article subtly places all the blame on the vulnerable road user with a <strong>good vs. evil narrative</strong>.</p>
        <p>Secondly, the article reports this as an isolated incident. There is <strong>no contextualization of car crashes as an epidemic</strong>, or as a systemic problem that can be solved by better decision making.</p>
      </div>
    </div>

    <div class="columns content">
      <div class="column">
        <article>
          <p>A crash between a vehicle and bicyclist on Tuesday, Sept. 21, on Central Avenue, has left the bicyclist dead, police said.</p>
          <p>The driver of a 2017 Chevrolet, who was entering the Northway southbound ramp at around 8:30pm, struck a man riding his bike, according to Lt. Robert Donnelly. The victim has been identified as Jeremy Williams, 39, of Colonie.</p>
          <p>The investigation has not yet been concluded, but police are determining factors that may have contributed to the crash. The driver of the Chevy, a 41-year-old from Troy, stopped, called 911 and tried to help Williams. Williams was taken to Albany Medical Center Hospital by Colonie EMS with serious injuries. He died a day later without regaining consciousness.</p>
          <p>The speed limit on Central Avenue is 40 mph; a collision between a vehicle and a bicyclist or pedestrian at 40 mph gives at least a 85% chance of death.</p>
          <p>The roadway is 5 lanes wide, but there are no bike lanes on Central Avenue. Since the crash took place in the evening, it is possible for lack of street illumination to have contributed to the incident. These factors, combined with frequent curb cuts and long crosswalk distances, calls into question the safety for road users not in a vehicle.</p>
          <p>This fatality follows national trends of increased pedestrian and bicyclist deaths. Annual pedestrian fatalities have increased approximately 50% in just the past decade, from 4109 in 2009, to 6184 in 2019, erasing about 20 years worth of prior progress in reducing fatalities. Bicycling has likewise seen increases in injuries and deaths.</p>
          <p>Neither the 2010 "Central Avenue Corridor Inventory Study" nor 2019 comprehensive plan mention safety measures along Central Ave., although other roadway studies have suggested lowering speed limits to 30 mph, adding crosswalks and signalized intersections. According to the comprehensive plan, "The Town has also seen improvements in many of its transportation corridors. Central Avenue has undergone an extensive corridor improvement process that has since reshaped and improved how that transit corridor functions.", but it is unclear if any of the referenced improvements include road safety measures. But safety is clearly on the minds of Colonie residents: a Siena College Research Institute (SCRI) Survey conducted in March of 2017 show the top two supported initiatives for inclusion for inclusion in the 2019 comprehensive plan are (1) The construction of new sidewalks along main roads (85% support), and (2) Designing local roads to slow speeds (81%).</p>
        </article>
      </div>
      <div class="column is-one-third commentary">
        <h3 class="title is-5"><b-icon icon="thumb-up-outline" type="is-success" /> After</h3>
        <h4 class="subtitle is-6">Thematic, no victim-blaming</h4>
        <p>We've improved coverage of this event. Here's how:</p>
        <p><strong>Road safety is a major focal point in this rewrite</strong>. The speed limit of the road where the crash took place is mentioned, along with a mention of how dangerous higher road speeds are for pedestrian and bicyclist safety. Even if all drivers follow the speed limit (hint: they don't), there's still only a 15% chance of survival at best in one of these collisions.</p>
        <p>Another road design element is mentioned: five lanes are provided for vehicles, but <strong>no facilities are provided to bicyclists</strong>. Combined with frequent curb cuts and long crosswalk distances, fatal crashes on this road are not unforeseeable, but expected. <strong>This is a road designed for cars, not people</strong>.</p>
        <p>The article is contextualized by <strong>referencing national trends</strong>. What happened on this road is happening all across the United States: roads are becoming increasingly dangerous for pedestrians and bicyclists, and that's by design.</p>
        <p>The article <strong>brings the message down to the local level</strong>. A small amount of research is done to <strong>discuss related efforts by the local government</strong>, such as street studies, safety initiatives, and results of a resident survey showing overwhelming support for safer roads.</p>
        <p>Finally, minor editorial patterns are fixed, such as using the word <strong>crash, not accident</strong> (<nuxt-link to="/issues">learn why</nuxt-link>), eliminating the usage of object-based language in favor of <strong>person-based language</strong> (car vs. driver), and eliminating focus on the bicyclist.</p>
      </div>
    </div>

    <hr />

  </div>
</template>

<script>
import ArticleCapture from '../components/ArticleCapture.vue'

export default {
  name: 'Home',
  head: {
    title: 'Vision Zero Reporting - Improved car crash reporting to tell the whole story'
  },
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
s { color: #bbb; font-size: 80%; }
ins { text-decoration: none; }

.columns { border-bottom: 1px SOLID #ddd; border-left: none; border-right: none; }
.column article { font-family: serif; }
.column.commentary { background-color: #eee; font-size: 90%; }

mark { padding: 1px; }
mark.focus { background-color: rgba(214, 81, 41, 0.3); }
mark.agency { background-color: rgba(31, 179, 224, 0.3); }
mark.object { background-color: rgba(73, 194, 25, 0.3); }
mark.accident { background-color: rgba(238, 180, 23, 0.3); }
mark.counter { background-color: rgba(244, 220, 42, 0.3); }
</style>

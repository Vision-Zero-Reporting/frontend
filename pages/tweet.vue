<template>
  <div>
    <!-- Before -->
    <div class="columns">
      <div class="column is-two-thirds">
        <article class="content">
          <h2 class="title is-4">Bicyclist in Sept. 21 accident on Central Avenue has died</h2>
          <p>A bicyclist involved in a Central Avenue accident on Tuesday, Sept. 21, has died, police said.</p>
          <p>Jeremy Williams, 39, of Colonie, was riding his bike near the Northway southbound ramp at around 8:30 p.m., said Lt. Robert Donnelly, when he was hit by a 2017 Chevrolet that was entering the ramp.</p>
          <p>Williams was not wearing reflective clothing, did not have a light and was not wearing a helmet. Donnelly said. There is a crosswalk in the area but it does not appear he was using it, Donnelly added.</p>
          <p>The driver of the Chevy, a 41-year-old from Troy, stopped, called 911 and tried to help Williams.</p>
          <p>Williams was taken to Albany Medical Center Hospital by Colonie EMS with serious injuries. He died a day later without regaining consciousness.</p>
        </article>
      </div>
      <div class="column">
        <br/>
        <br/>
        <h3 class="title is-5">Before</h3>
        <ul class='bad'>
          <li>Blames the victim</li>
          <li>Incident is an <em>accident</em></li>
          <li>Article is <em>episodic</em></li>
        </ul>
        <br/>
        <p>The article treats this as an isolated incident, with no context whatsoever about how dangerous road design played a significant role</p>
      </div>
    </div>

    <!-- After -->
    <div class="columns">
      <div class="column is-two-thirds">
        <article class="content">
          <h2 class="title is-4">Bicyclist in Sept. 21 <s>accident</s><ins>crash</ins> on Central Avenue has died</h2>
          <p>A crash between a vehicle and bicyclist on Tuesday, Sept. 21, on Central Avenue, has left the bicyclist dead, police said.
          <p>The driver of a 2017 Chevrolet, who was entering the Northway southbound ramp at around 8:30pm, struck a man riding his bike, according to Lt. Robert Donnelly. The victim has been identified as Jeremy Williams, 39, of Colonie.</p>
          <p>The investigation has not yet been concluded, but police are determining factors that may have contributed to the crash. The driver of the Chevy, a 41-year-old from Troy, stopped, called 911 and tried to help Williams. Williams was taken to Albany Medical Center Hospital by Colonie EMS with serious injuries. He died a day later without regaining consciousness.</p>
          <p>The speed limit on Central Avenue is 40 mph; a collision between a vehicle and a bicyclist or pedestrian at 40 mph gives at least a 85% chance of death.</p>
          <p>The roadway is 5 lanes wide, but there are no bike lanes on Central Avenue. Since the crash took place in the evening, it is possible for lack of street illumination to have contributed to the incident. These factors, combined with frequent curb cuts and long crosswalk distances, calls into question the safety for road users not in a vehicle.</p>
          <p>This fatality follows national trends of increased pedestrian and bicyclist deaths. Annual pedestrian fatalities have increased approximately 50% in just the past decade, from 4109 in 2009, to 6184 in 2019, erasing about 20 years worth of prior progress in reducing fatalities. Bicycling has likewise seen increases in injuries and deaths.</p>
          <p>Neither the 2010 "Central Avenue Corridor Inventory Study" nor 2019 comprehensive plan mention safety measures along Central Ave., although other roadway studies have suggested lowering speed limits to 30 mph, adding crosswalks and signalized intersections. According to the comprehensive plan, "The Town has also seen improvements in many of its transportation corridors. Central Avenue has undergone an extensive corridor improvement process that has since reshaped and improved how that transit corridor functions.", but it is unclear if any of the referenced improvements include road safety measures. But safety is clearly on the minds of Colonie residents: a Siena College Research Institute (SCRI) Survey conducted in March of 2017 show the top two supported initiatives for inclusion in the 2019 comprehensive plan are (1) The construction of new sidewalks along main roads (85% support), and (2) Designing local roads to slow speeds (81%).</p>
        </article>
      </div>
      <div class="column">
        <br/>
        <br/>
        <h3 class="title is-5">After</h3>
        <ul class='good'>
          <li>No victim-blaming</li>
          <li>Incident is a preventable <em>crash</em></li>
          <li>Article is <em>thematic</em></li>
          <li>Road is <em>designed for speed, not safety</em></li>
        </ul>
        <br/>
        <p>This article reports the same incident, without the victim-blaming. It dicusses road design as a major contributor to this preventable death. The road is designed exclusively for vehicles, not for people. We can afford five lanes of high-speed traffic, but can't spare anything for anyone outside a car. Bicycling or walking on this road is a death trap; the high speed limit essentially guarantees death for bicyclists and pedestrians when a collision occurs. This incident is part of a nation-wide trend of increasing bicyclist and pedestrian deaths. According to a survey, <em>residents want safer roads</em>, but there doesn't appear to be any response by the local government to this incident.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tweet'
}
</script>

<style scoped>
article { width: 100%; font-family: serif; font-size: 100%; margin: auto; }
s { color: #777; font-weight: normal; }
ul {
  list-style: none;
}
ul.bad li:before {
  content: '\2717';
  margin-right: 4px;
  color: red;
}
ul.good li:before {
  content: '✓';
  margin-right: 4px;
  color: green;
}

h2 {
    border: 1px SOLID #222;
    border-left: none;
    border-right: none;
    padding: 5px;
    font-size: 1em !important;
    margin-bottom: 10px !important;
    margin-top: 5px !important;
}
</style>

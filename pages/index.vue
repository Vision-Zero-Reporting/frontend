<template>
  <div>
    <section id="title">
      <center>
        <h1 class="title is-2">Vision Zero Reporting is on a mission to improve the way journalists report car <s>accidents</s> <ins>crashes</ins></h1>
      </center>
    </section>

    <section id="callout">
      <div class="columns">
        <div class="column is-half">
          <div class="skew-article">
            <p>
              <mark class="focus">A bicyclist was hit</mark>
              <span>amet, consectetur adipiscing elit. Sed eleifend, mi a interdum faucibus, </span>
              <mark class="accident">accident</mark>
              <span>, in rutrum sapien purus nec nisl. Pellentesque blandit egestas nunc,</span>
              <span>a cursus mauris sodales ac. Integer purus velit,</span>
              <mark class="object">when the SUV sped up and fled the scene</mark>
              <span> scelerisque at eros aliquam, lobortis feugiat nisl. Aenean vel ipsum . Aenean velit augue, molestie lacinia congue eu,</span>
              <span>posuere nec ante. Vestibulum viverra neque at ipsum suscipit, in placerat leo efficitur. Nam dui eros,</span>
              <span>facilisis </span>
              <mark class="counter">the bicyclist wasn't wearing a helmet</mark>
            </p>
          </div>
        </div>
        <div class="column">
          <h5 class="title is-5">Discover language issues in car crash articles</h5>
          <h6 class="subtitle is-6">Easily highlight linguistic anti-patterns in news stories and learn how language shapes our understanding of preventable crashes!</h6>
          <p>For <strong>journalists</strong>, <strong>advocates</strong>, <strong>first-responders</strong>, <strong>researchers</strong>, and more!</p>
          <nuxt-link v-if="!isLoggedIn" to="/login" class="button is-medium is-fullwidth">Register &raquo;</nuxt-link>
          <small>Create a <em>free</em> account in <em>30 seconds or less!</em></small>
        </div>
      </div>
    </section>

    <section id="examples">
      <h2 class="title is-4">Examples</h2>
      <div class="columns examples">
        <div class="column" v-for="example in examples" :key="example.title">
          <div class="example">
            <h3 class="title is-5">{{example.title}}</h3>
            <p>{{example.preview}}</p>
            <b-button size="is-small" type="is-info" outlined @click="submitArticle(null, example.title, example.body)">View example &raquo;</b-button>
          </div>
        </div>
      </div>
    </section>

    <section id="in-depth-review">
      <h2 class="title is-4">In-depth review</h2>
      <h3 class="subtitle is-5">See the difference between episodic and thematic articles of the same incident (<em>real news article</em>)</h3>
      <br />
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
            <p>A crash between a driver and bicyclist on Tuesday, Sept. 21, on Central Avenue, has left the bicyclist dead, police said.</p>
            <p>The driver of a 2017 Chevrolet, who was entering the Northway southbound ramp at around 8:30pm, struck a man riding his bike, according to Lt. Robert Donnelly. The victim has been identified as Jeremy Williams, 39, of Colonie.</p>
            <p>The investigation has not yet been concluded, but police are determining factors that may have contributed to the crash. The driver of the Chevy, a 41-year-old from Troy, stopped, called 911 and tried to help Williams. Williams was taken to Albany Medical Center Hospital by Colonie EMS with serious injuries. He died a day later without regaining consciousness.</p>
            <p>The speed limit on Central Avenue is 40 mph; a collision between a vehicle and a bicyclist or pedestrian at 40 mph gives at least a 85% chance of death.</p>
            <p>The roadway is 5 lanes wide, but there are no bike lanes on Central Avenue. Since the crash took place in the evening, it is possible for lack of street illumination to have contributed to the incident. These factors, combined with frequent curb cuts and long crosswalk distances, calls into question the safety for road users not in a vehicle.</p>
            <p>This fatality follows national trends of increased pedestrian and bicyclist deaths. Annual pedestrian fatalities have increased approximately 50% in just the past decade, from 4109 in 2009, to 6184 in 2019, erasing about 20 years worth of prior progress in reducing fatalities. Bicycling has likewise seen increases in injuries and deaths.</p>
            <p>Neither the 2010 "Central Avenue Corridor Inventory Study" nor 2019 comprehensive plan mention safety measures along Central Ave., although other roadway studies have suggested lowering speed limits to 30 mph, adding crosswalks and signalized intersections. According to the comprehensive plan, "The Town has also seen improvements in many of its transportation corridors. Central Avenue has undergone an extensive corridor improvement process that has since reshaped and improved how that transit corridor functions.", but it is unclear if any of the referenced improvements include road safety measures. But safety is clearly on the minds of Colonie residents: a Siena College Research Institute (SCRI) Survey conducted in March of 2017 show the top two supported initiatives for inclusion in the 2019 comprehensive plan are (1) The construction of new sidewalks along main roads (85% support), and (2) Designing local roads to slow speeds (81%).</p>
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
          <p>Finally, minor editorial patterns are fixed, such as using the word <strong>crash, not accident</strong> (<nuxt-link :to="{ path: '/issues', hash: 'accident' }">learn why</nuxt-link>), eliminating the usage of object-based language in favor of <strong>person-based language</strong> (car vs. driver), and eliminating focus on the bicyclist.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ArticleCapture from '../components/ArticleCapture.vue'

const examples = [
  {
    title: 'Boy, 9, dies after being struck by vehicle near Las Vegas school',
    preview: 'A 9-year-old boy riding his bicycle was killed Friday afternoon after he was hit by an SUV near a south Las Vegas Valley middle school, police said. The boy was hit about 2:35 p.m. in a residential neighborhood behind Silvestri Junior High School, near East Silverado Ranch Boulevard and ...',
    body: 'A 9-year-old boy riding his bicycle was killed Friday afternoon after he was hit by an SUV near a south Las Vegas Valley middle school, police said. The boy was hit about 2:35 p.m. in a residential neighborhood behind Silvestri Junior High School, near East Silverado Ranch Boulevard and South Maryland Parkway. He was riding his bike north in the southbound lanes of Jack Leavitt Street when a dark-colored Toyota SUV turned right from Riverdance Avenue and hit him, Metropolitan Police Department traffic Sgt. Paul McCullough said. The boy died at Sunrise Hospital and Medical Center. "In this case here, we\'ve got a young kid. Perfect angel, as we expect all of our children to be, and just very sad circumstances," McCullough said. The SUV stopped at a stop sign and then turned right, hitting the boy in the process. The driver wasn\'t expecting to see the bicycle while turning, he said. The driver had her child in the car at the time of the crash. She was cooperative with police, and officers didn\'t think she was impaired or driving fast, McCullough said. "Obviously, under these circumstances, she\'s very distraught and upset," he said. McCullough didn\'t know whether the boy was wearing a helmet, but he was thought to be riding alone. It wasn\'t immediately clear who was at fault in the crash, but McCullough said the crash was preventable, regardless, as it happened in a residential neighborhood with a child riding a bicycle near a school. A small, black bike with pegs stood next to the SUV, which had its front passenger door swung open. Pink clothes were piled on the ground just behind the front driver\'s side tire left by a person who tried to help the boy, McCullough said. Several children in the neighborhood saw the crash or the aftermath, he said. "Our prayers to the families for those involved and for the folks that had to witness this," McCullough said. Police closed the intersection while they investigated. They expected it to remain closed until Friday night. The Clark County coroner\'s office will release the boy\'s identity once his family is notified.'
  },
  {
    title: 'Fifth pedestrian, cyclist dies in Stockton after being hit by car in less than a month',
    preview: 'Five people have been killed in less than a month while walking or riding their bike in Stockton. "That is a lot," said Joe Silva, spokesman for the Stockton Police Department. "What\'s unique about these traffic fatalities, is there\'s really no correlation between any of them ...',
    body: 'Five people have been killed in less than a month while walking or riding their bike in Stockton. "That is a lot," said Joe Silva, spokesman for the Stockton Police Department. "What\'s unique about these traffic fatalities, is there\'s really no correlation between any of them because they\'re occurring in different parts of the city, different parts of the day." Silva says a 23-year-old woman was the fifth person to die Saturday morning after she was struck by a vehicle while riding her bicycle on Tam O\'Shanter Drive and Hammertown Drive. "The driver of that vehicle did the right thing. He stopped immediately, waited for first responders and law enforcement to arrive, and he cooperated with the investigation," Silva explained. Stockton police wants to remind not just drivers, but also pedestrians and cyclists to be aware of their surroundings at all times. "What we want people to do is just use common sense," Silva said. "If you\'re going to cross the street, you have to find a nearby crosswalk and always look both directions before you cross the street, and if there is heavy traffic, just wait." Silva said the department is concerned with the number of deadly traffic accidents that have occurred in recent weeks. "This week, and in the coming weeks we will be doing some public service announcements on our social media - just reminding people to be vigilant," Silva added.'
  },
  {
    title: 'State police: Rome man killed when motorcycle hits SUV in town of Western',
    preview: 'A Rome man was killed in an accident at the intersection of State Route 46 and Main Street in the town of Western on Thursday evening, state police said in a statement. A 2011 Chevrolet Traverse was heading north on state Route 46, attempting to make a left turn onto Main Street, when it was hit ...',
    body: 'A Rome man was killed in an accident at the intersection of State Route 46 and Main Street in the town of Western on Thursday evening, state police said in a statement. A 2011 Chevrolet Traverse was heading north on state Route 46, attempting to make a left turn onto Main Street, when it was hit from behind by a 2013 Suzuki motorcycle, the statement said. The driver of the Traverse, 44-year-old Earl D. Turner from Kentucky, was injured in the crash. The motorcyclist, 67-year-old Mehdi Tayefeh of Rome, was transported to Rome Memorial Hospital, where he was pronounced dead, police said.'
  }
]

export default {
  name: 'Home',
  middleware: 'notAuthenticated',
  head: {
    title: 'Vision Zero Reporting - Improved car crash reporting to tell the whole story'
  },
  data() {
    return {
      examples
    }
  },
  components: {
    ArticleCapture
  },
  methods: {
    submitArticle(url, title, body) {
      const requestBody = url ? { url } : { title, body }
      if (url || (title && body)) {
        this.$axios.post('/article', requestBody)
          .then(response => {
            this.$router.push({ path: 'queue', query: { uuid: response.data.uuid }})
          })
      }
    },
  }
}
</script>

<style scoped>
s { color: #bbb; font-size: 80%; }
ins { text-decoration: none; }

section:first-child { margin-top: 0; }
section { margin: 60px 0; }

h2 {
  display: flex;
  align-items: center;
}
h2::before, h2::after {
  content: '';
  border-top: 1px SOLID #ccc;
  flex: 1;
  margin: 0 20px 0 0;
}
h2::after {
  margin: 0 0 0 20px;
}

#in-depth-review .columns { border-bottom: 1px SOLID #ddd; border-left: none; border-right: none; }
#in-depth-review .columns.examples { border: none; }
#in-depth-review .column article { font-family: serif; }
#in-depth-review .column.commentary { background-color: #eee; font-size: 90%; }

h2, h3.subtitle.is-5 { text-align: center; }
.example { font-size: 90% !important; }
.example h3 { margin-bottom: 5px; }

.skew-article {
  color: #777;
  line-height: 1.6em;
}
.skew-article p span:not(mark) {
  filter: blur(0.7px);
}

mark {
  padding: 1px;
  word-break: keep-all;
}
mark::before {
  content: '!';
  padding: 0px 8px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 2px;
}
mark.focus { background-color: rgba(214, 81, 41, 0.3); }
mark.agency { background-color: rgba(31, 179, 224, 0.3); }
mark.object { background-color: rgba(73, 194, 25, 0.3); }
mark.accident { background-color: rgba(238, 180, 23, 0.3); }
mark.counter { background-color: rgba(244, 220, 42, 0.3); }
</style>

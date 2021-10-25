<template>
    <article>
        <h1 class='title is-2'>Issues</h1>
        <h2 class="subtitle is-4">Discover and understand the editorial anti-patterns we search for</h2>

        <nav>
            On this page:
            <a href="#framing">Framing</a>
            <a href="#counterfactuals">Counterfactuals</a>
            <a href="#accident">Accident</a>
            <a href="#object">Object-based reference</a>
            <a href="#agency">Agency</a>
            <a href="#focus">Focus</a>
        </nav>

        <div class="card content"> <!-- Framing -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="framing" name="framing" href="#framing"><h3 class="title is-5"><b-icon icon="image-filter-frames" /> Framing</h3></a>
                </p>
            </header>
            <div class="card-content">
                <p>Media framing is a significant factor in how people and communities interpret, understand, and respond to information. There are two major types of framing:</p>
                <ol>
                    <li><em>episodic</em> &ndash; incidents are reported as isolated events</li>
                    <li><em>thematic</em> &ndash; events are compared, and underlying factors are explored</li>
                </ol>
                <!-- <div id='article-examples' class="columns">
                    <div class="column">
                        <span>Episodic</span>
                        <article class="example">
                            <h3>Pedestrian hit, killed by vehicle on Dan Ryan</h3>
                            <h4>by Chicago Tribune staff</h4>
                            <p>Pedestrian hit, killed by vehicle on Dan Ryan</p>
                            <p>Traffic in the northbound lanes of the Dan Ryan Expressway north of 35th Street the evening of March 21, 2018, after a pedestrian was hit and killed by a vehicle on the expressway.</p>
                            <p>A person was hit and killed by a vehicle Wednesday evening while in traffic on the Dan Ryan Expressway near 33rd Street, police said.</p>
                            <p>The person was in traffic in the northbound lanes of the expressway near 33rd Street about 8:15 p.m. when they were hit by a vehicle and killed, said an Illinois State Police sergeant.</p>
                            <p>All regular northbound lanes were closed to traffic as of about 9:15 p.m., with vehicles getting past on the right shoulder, he said.</p>
                            <p>Check back for updates.</p>
                        </article>
                    </div>
                    <div class="column">
                        <span>Thematic</span>
                        <article class="example">
                            <h3>Residents claim speeding drivers are causing more crashes along Lee Blvd</h3>
                            <h4>by Briana Fernandez</h4>
                            <p>LEE COUNTY, Fla. — Right along Lee Boulevard between Gunnery Road and Sunshine Boulevard, residents claim to have noticed more crashes than usual because of drivers texting and driving or going over the 45 mph speed limit.</p>

                            <p>“Within the last 2 months I’ve had three different accidents that have happened. Wednesday there was an accident and within two seconds later it would’ve been in the front of my house. On Saturday, there was an accident right behind me where they hit the electrical box,” said resident, Tina Heckler.</p>

                            <p>Heckler has lived along that stretch of road for more than three years, but she said that she’s seen Lee Boulevard turn into a racetrack lately right in front of her house.</p>

                            <p>“I love living where I am, but I just want people to be more aware when they are driving, it’s not a racetrack between Sunshine and Gunnery. There’s a lot of racing, whether it’s one car, two cars, or sometimes it’s a whole pack of motorcycles,” said Heckler.</p>

                            <p>NBC2 reached out to the Lee County Sheriff’s Office for information on speed safety and crash numbers, but have yet to hear back.</p>

                            <p>* The Lee County Department of Transportation recently made some turn-lane improvements on Lee Blvd at Gunnery Rd in each direction</p>

                            <p>* For example, this means that the lanes were extended for motorists making left turns, so now the turn lanes can fully contain any waiting motorists rather than those motorists potentially spilling into the through-lanes during heavy traffic times. That type of situation can be cause for congestion – or sometimes crashes, if unaware motorists come up on stopped motorists in the through-lanes who are waiting to get into turn lanes.That’s why the county took action and extended the left-turn lanes to allow more motorists to queue up. Lee DOT is working east of Sunshine on design of a traffic signal at Joan Avenue.</p>

                            <p>* That type of situation can be cause for congestion – or sometimes crashes, if unaware motorists come up on stopped motorists in the through-lanes who are waiting to get into turn lanes.</p>

                            <p>* That’s why the county took action and extended the left-turn lanes to allow more motorists to queue up.</p>

                            <p>*Lee DOT is working east of Sunshine on design of a traffic signal at Joan Avenue.</p>

                            <p>“Lee DOT constantly monitors its busy thoroughfares and has ongoing projects throughout the county to make adjustments,” officials said.</p>
                        </article>
                    </div>
                </div> -->

                <p>Articles should include a number of thematic phrases to help contextualize the incident and provide possible remediations:</p>
                <ul>
                    <li>
                        <b-icon icon="road-variant" /> Road design
                        <ul>
                            <li>Speed limit</li>
                            <li>Number of lanes</li>
                            <li>Lane width</li>
                            <li>Presence of sidewalks, crosswalks, bike lanes</li>
                            <li>Lighting conditions</li>
                            <li>Speedbumps</li>
                            <li>Turn radius</li>
                            <li>Road signage</li>
                            <li>etc.</li>
                        </ul>
                    </li>
                    <li>
                      <b-icon icon="trending-up" /> Statistics &amp; trends
                      <ul>
                        <li>Recent crashes locally</li>
                        <li>Statewide and national trends</li>
                      </ul>
                    </li>
                    <li>
                      <b-icon icon="comment-quote" /> Quotes
                      <ul>
                        <li>Local residents</li>
                        <li>Elected officials</li>
                        <li>Transportation safety experts</li>
                      </ul>
                    </li>
                    <li>
                      <b-icon icon="shield-car" /> Safety initiatives
                      <ul>
                        <li>Vision Zero</li>
                        <li>Complete Streets</li>
                        <li>DWI checkpoints</li>
                        <li>High-visibility enforcement</li>
                      </ul>
                    </li>
                </ul>

                <p>One study found that only about 1 in 20 articles about car crashes employed thematic elements, such as road design or crash statistics. These thematic elements are vital to remind readers that car crashes aren't random events, but natural byproducts of our built environment and the choices people make. Furthermore, readers are more likely to recognize and support preventative measures and solutions when presented with thematic articles.</p>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li>Goddard, Tara, et al. “Does News Coverage of Traffic Crashes Affect Perceived Blame and Preferred Solutions? Evidence from an Experiment.” ResearchGate, Transportation Research Interdisciplinary Perspectives, Nov. 2019, https://www.researchgate.net/publication/337279845_Does_news_coverage_of_traffic_crashes_affect_perceived_blame_and_preferred_solutions_Evidence_from_an_experiment.</li>
                        <li>Ewing, R., and E. Dumbaugh. The Built Environment and Traffic Safety: A Review of Empirical Evidence. Journal of Planning Literature, Vol. 23, No. 4, 2009, pp. 347-367.</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="card content"> <!-- Counterfactuals -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="counterfactuals" name="counterfactuals" href="#counterfactuals"><h3 class="title is-5"><b-icon icon="clipboard-alert" /> Counterfactuals</h3></a>
                </p>
            </header>
            <div class="card-content">
                <p>Counterfactuals are true statements which tend to imply that outcomes would be changed <em>if only</em> people had acted differently. They place a greater burden on the individuals involved, rather than the systemic nature of the underlying situation. Research demonstrates that the presence of counterfactual statements shifts blame toward the victim.</p>
                <p>Because car crashes are greatly influenced by systemic factors, such as road design, societal norms and expectations, planning, enforcement, etc., reducing and eliminating counterfactual statements is critical to getting past victim-blaming to achieve comprehensive safety.</p>
                <p>Counterfactual statements are a serious anti-pattern because they:</p>
                <ol>
                    <li>obscure the systemic nature of crashes,</li>
                    <li>shift blame onto victims, and</li>
                    <li>absolve actors of irresponsible behavior</li>
                </ol>
                <p>Our system is designed to detect a number of counterfactual statements in the following categories:</p>
                <ul>
                    <li v-for="counter in counterfactuals" :key="counter">{{counter.name}}</li>
                </ul>
                <p>Counterfactuals typically correspond directly with the absence of thematic elements. The good news is that it's often easy to improve news reporting by observing these relationships:</p>
                <table>
                    <thead>
                        <tr>
                            <td width="30%">
                                Status-quo reporting<br/>
                                <small>How an incident might be reported today</small>
                            </td>
                            <td width="5%">&rarr;</td>
                            <td width="30%">
                                Critical comments<br/>
                                <small>Let's spend a minute to examine this</small>
                            </td>
                            <td width="5%">&rarr;</td>
                            <td width="30%">
                                Better reporting<br/>
                                <small>Bridging the gap to deliver a higher quality article</small>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <!-- NO HELMET -->
                            <td>
                                The bicyclist was killed when he was hit by an SUV trying to pass him. He wasn't wearing a helmet.
                            </td>
                            <td></td>
                            <td>
                                The last sentence is likely to invoke feelings of blame: <em>what a dumb cyclist &mdash; he should have been wearing a helmet!</em> But wearing a helmet wouldn't have changed the outcome of him being struck. This article makes only factual statements, but there are many things <em>not</em> being said:
                                <ul>
                                    <li>Was the driver paying attention?</li>
                                    <li>Did the driver provide enough buffer space when passing?</li>
                                    <li>What is the road design where this took place?</li>
                                    <li>Is this a popular biking area?</li>
                                </ul>
                            </td>
                            <td></td>
                            <td>
                                The bicyclist was killed when he was hit by an SUV trying to pass him. <s>He wasn't wearing a helmet.</s> The victim was riding along the side of the road which does not have a protected bike lane. While police are still investigating if the driver was focused and provided enough space while passing, nearby residents are sounding the alarm to unsafe road conditions. "So many tourists want to bike along this scenic waterfront route, but the local council for years has been dragging their feet on a bike lane!" says a local. The speed limit is 50 mph, fast enough to make death almost certain should a collision take place.
                            </td>
                        </tr>
                        <tr> <!-- NO CROSSWALK -->
                            <td>
                                A pedestrian was left seriously injured after attempting to cross the street. The pedestrian did not use a crosswalk.
                            </td>
                            <td></td>
                            <td>
                                The last sentence is likely to invoke feelings of blame: <em>serves her right &mdash; this is what happens when you don't use a crosswalk!</em> The author is certainly sticking to facts, but we should also ask:
                                <ul>
                                    <li>Is the nearest crosswalk within reasonable walking distance?</li>
                                    <li>What is the speed limit at the scene of the incident? Does it provide drivers with enough time to react to changing conditions?</li>
                                    <li>Have there been similar pedestrian-vehicle conflicts in the past? If so, has it led to change?</li>
                                    <li>What is the land-use in this area? E.g. is it just a state highway, or does it have schools, restaurants, shops, etc.?</li>
                                </ul>
                            </td>
                            <td></td>
                            <td>
                                A pedestrian was left seriously injured after attempting to cross the street. The pedestrian did not use a crosswalk. Satellite imagery suggests the nearest crosswalk was at least a quarter mile away &ndash; a 5 minute walk &ndash; in each direction. A number of pedestrian-vehicle crashes have taken place over the past year, calling into question the safety of a street home to many outdoor restaurants and boutique shops. We spoke with a local restaurant owner: "There's a bus stop across the street, but riders have to run across the street to get to our shop. I told the local bus authority months ago they need to move the bus stop to this side of the street."
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>As demonstrated, counterfactual statements obscure the underlying causes of crashes. Counterfactuals tend to preclude discussion about systemic factors and instead shift blame on individuals, including the victims. Statements insinuate a different outcome was possible if only individuals acted differently, and articles with counterfactual statements virtually never go into depth to discuss remediation.</p>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li>Goldinger, S. D., H. M. Kleider, T. Azuma, and D. R. Beike. "Blaming the Victim" under Memory Load. Psychological Science, Vol. 14, No. 1, 2003, pp. 81-85</li>
                        <li>Branscombe, N. R., S. Owen, T. A. Garstka, and J. Coleman. Rape and Accident Counterfactuals: Who Might Have Done Otherwise and Would It Have Changed the Outcome? Journal of Applied Social Psychology, Vol. 26, No. 12, 1996, pp. 1042-1067.</li>
                        <li>Gilbert, Elizabeth. “Character &amp; Context.” Society for Personality and Social Psychology, 5 Aug. 2015, https://spsp.org/news-center/blog/counterfactuals. </li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="card content"> <!-- Accident -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="accident" name="accident" href="#accident"><h3 class="title is-5"><b-icon icon="car-emergency" /> Accident</h3></a>
                </p>
            </header>
            <div class="card-content">
                <blockquote cite="https://www.merriam-webster.com/dictionary/accident">
                    <h3 class="title is-4">accident</h3>
                    <h4 class="title is-6">1a. an unforeseen and unplanned event or circumstance</h4>
                    <h4 class="title is-6">2a. an unfortunate event resulting especially from carelessness or ignorance</h4>
                    <cite>Merrian-Webster</cite>
                </blockquote>
                <p>The tool marks usages of the word "accident" as problematic because the word accident implies a sense of faultlessness and unavoidability. Over 90% of car crashes are caused by human error, and virtually all causes of these crashes are known and avoidable, mostly by changing behavior and design.</p>
                <p>When crashes come down to a handful of causes &mdash; most commonly distracted driving, speeding, tailgating, alcohol and drug usage, and following too closely &mdash; we cannot conclude the causes are <em>unforeseen</em>, and while carelessness may be a factor, these are not matters of mere chance, fortune, or acts of God.</p>
                <p>We subscribe to the mentality that all accidents are crashes, but not all crashes are accidents; therefore, a higher burden of proof is required to use the word "accident". Some news agencies express worry that if they use the word crash, someone might file a libel/defamation suit saying the agency is blaming them for the incident. These fears are unwarranted and unrealistic, but there are other words that are recommended, in order of precedence:</p>
                <ol>
                    <li>crash</li>
                    <li>collision</li>
                    <li>incident</li>
                    <li>accident</li>
                </ol>
                <p>There has been notable shift in sentiment toward the use of the word "crash":</p>
                <ul>
                    <li>The Associated Press recommends avoiding the word "accident" if negligence is claimed or proven, as of 2016.</li>
                    <li>The NYPD no longer uses the word "accident" to describe car crashes, and has renamed its Accident Investigation Squad to the Collision Investigation Squad, as of 2013.</li>
                    <li>The British Medical Journal (BMJ) has banned the word "accident", as of 2001.</li>
                </ul>
                <p>The tool is context-aware and does not punish uses of the word "accident" if it's part of a direct quotation or a proper noun, such as investigative bodies (e.g. the Boston Accident Reconstruction Unit).</p>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li><a href="https://twitter.com/hashtag/crashnotaccident" target="_blank">#CrashNotAccident on <b-icon icon="twitter" size="is-small" /> Twitter</a></li>
                        <li>Aaron, Brad, and Ben Fried. “Ray Kelly: NYPD Will Retire ‘Accident’ and ‘Dead or Likely to Die’ Rule.” Streetsblog New York City, 11 Mar. 2013, https://nyc.streetsblog.org/2013/03/11/ray-kelly-nypd-will-retire-accident-and-dead-or-likely-to-die-rule/.</li>
                        <li>Davis, Ronald M, and Barry Pless. “BMJ Bans ‘Accidents.’” The BMJ, British Medical Journal Publishing Group, 2 June 2001, https://www.bmj.com/content/322/7298/1320.full.</li>
                        <li>Schmitt, Angie, et al. “Associated Press Cautions Journalists That Crashes Aren't Always ‘Accidents.’” Streetsblog USA, 4 Apr. 2016, https://usa.streetsblog.org/2016/04/04/associated-press-cautions-journalists-that-crashes-arent-always-accidents/.</li>
                        <li>Schmitt, Angie, et al. “It's Time for the AP to Nix the Term ‘Accident’ to Describe Car Collisions.” Streetsblog USA, 11 Dec. 2013, https://usa.streetsblog.org/2013/12/11/its-time-for-the-ap-to-nix-the-term-accident-to-describe-car-collisions/.</li>
                        <li>Smith, Bryant W. “Human Error as a Cause of Vehicle Crashes.” Center for Internet and Society, 18 Dec. 2013, https://cyberlaw.stanford.edu/blog/2013/12/human-error-cause-vehicle-crashes.</li>
                        <li>Stewart, Alan E., and Janice Harris Lord. “Motor Vehicle Crash versus Accident: A Change in Terminology Is Necessary.” Wiley Online Library, John Wiley &amp; Sons, Ltd, 30 June 2005, https://onlinelibrary.wiley.com/doi/abs/10.1023/A%3A1016260130224.</li>
                        <li>Zender, James F. “Accident vs. Crash.” Psychology Today, Sussex Publishers, 3 Feb. 2017, https://www.psychologytoday.com/us/blog/the-new-normal/201702/accident-vs-crash.</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="card content"> <!-- Object-based reference -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="object" name="object" href="#object"><h3 class="title is-5"><b-icon icon="package-variant" /> Object-based reference</h3></a>
                </p>
            </header>
            <div class="card-content">
                <p>Object-based reference deals with how reporters and readers refer to entities. This gives rise to the dichotomy: object-based language vs. people-based language.</p>
                <p>Research shows that when referring to drivers, language is usually object-based instead, giving agency to cars, traffic, etc. On the other hand, vulnerable road users are nearly always referenced in human terms: pedestrian, bicyclist, person, man, woman.</p>
                <p>Giving agency to objects instead of people obscures who the actors are, and tends to shift blame toward the victims.</p>
                <ul>
                    <li>A bicyclist was hit by an SUV. &rarr; A bicyclist was hit by <em>the driver</em> of an SUV.</li>
                    <li>The car jumped the curb. &rarr; The <em>driver</em> drove over the curb.</li>
                    <li>The automobile remained at the scene. &rarr; The <em>driver</em> remained at the scene.</li>
                </ul>
                <p>Additionally, using object-based language personifies objects in downright weird ways:</p>
                <ul>
                    <li>The vehicle fled the scene.</li>
                    <li>The automobile co-operated with police investigators.</li>
                </ul>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li>Walker, I. Road Users' Perceptions of Other Road Users: Do Different Transport Modes Invoke Qualitatively Different Concepts in Observers? Advances in Transportation Studies, Vol. A6, 2005, pp. 25-33.</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="card content"> <!-- Agency -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="agency" name="agency" href="#agency"><h3 class="title is-5"><b-icon icon="account-child" /> Agency</h3></a>
                </p>
            </header>
            <div class="card-content">
                <p>Agency discovers issues with agentive vs. non-agentive sentences. Research demonstrates that readers place more blame on victims when reading non-agentive sentences, i.e. sentences that don't include the perpetrator or one doing the action.</p>
                <table>
                    <thead>
                        <tr>
                            <td>Sentence</td>
                            <td>Classification</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A pedestrian was struck.</td>
                            <td>Non-agentive</td>
                        </tr>
                        <tr>
                            <td>A driver struck a pedestrian.</td>
                            <td>Agentive</td>
                        </tr>
                        <tr>
                            <td>A pedestrian was struck by a driver.</td>
                            <td>Agentive</td>
                        </tr>
                    </tbody>
                </table>
                <p>Readers identify agents as having ability to cause harm, which helps share responsibility for a mishap. Ensure that all sentences that discuss crashes include an agent.</p>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li>Fausey, C. M., and L. Boroditsky. Subtle Linguistic Cues Influence Perceived Blame and Financial Liability. Psychonomic Bulletin &amp; Review, Vol. 17, No. 5, 2010, pp. 644-650.</li>
                        <li>Coates, L., and A. Wade. Telling It Like It Isn't: Obscuring Perpetrator Responsibility for Violent Crime. Discourse &amp; Society, Vol. 15, No. 5, 2004, pp. 499-526.</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="card content"> <!-- Focus -->
            <header class="card-header">
                <p class="card-header-title">
                    <a id="focus" name="focus" href="#focus"><h3 class="title is-5"><b-icon icon="eye" /> Focus</h3></a>
                </p>
            </header>
            <div class="card-content">
                <p>Focus identifies who the subject of the sentence is, and hence who is at the center of attention. Readers assign more blame to the focus of the sentence. News articles that cover crashes between vehicles and vulnerable road users place the focus of the sentences on the VRU over 70% of the time.</p>
                <p>This difference is illustrated below, with the focus (subject) underlined:</p>
                <ul>
                    <li><u>A pedestrian</u> was struck by an SUV.</li>
                    <li><u>An SUV</u> struck a pedestrian.</li>
                </ul>
                <footer class="page">
                    <label>See also:</label>
                    <ul>
                        <li>Iacobucci, Evan, et al. “Editorial Patterns in Bicyclist and Pedestrian Crash Reporting - Kelcie Ralph, Evan Iacobucci, Calvin G. Thigpen, Tara Goddard, 2019.” SAGE Journals, 8 Feb. 2019, https://journals.sagepub.com/doi/abs/10.1177/0361198119825637.</li>
                        <li>Niemi, L., and L. Young. When and Why We See Victims as Responsible: The Impact of Ideology on Attitudes toward Victims. Personality and Social Psychology Bulletin, Vol. 42, No. 9, 2016, pp. 1227-1242.</li>
                    </ul>
                </footer>
            </div>
        </div>
    </article>
</template>

<script>
import Counterfactuals from '../assets/Counterfactuals'

export default {
  name: 'Issues',
  data() {
    return {
      counterfactuals: Object.values(Counterfactuals)
    }
  }
}
</script>


<style scoped>
section {
    margin-bottom: 40px !important;
}
nav {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 20px;
}
nav a::after {
    content: ' • ';
    color: #444;
}
nav a:last-child::after {
    content: none;
}
table {
    font-size: 90%;
    width: auto !important;
    margin: auto;
}
thead { font-weight: bold; }
.card-header-title a { border-bottom: none; }
.card-header-title h3 { margin-bottom: 0; }

#article-examples {
    max-height: 400px;
    overflow-y: scroll;
}
#article-examples span {
    background-color: #eee;
    padding: 5px 10px;
    display: block;
    text-align: center;
    position: sticky;
}
article.example {
    font-family: serif;
    line-height: 100%;
}
</style>

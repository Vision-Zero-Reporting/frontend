<template>
    <article>
        <h1 class='title is-2'>About Vision Zero Reporting</h1>
        <h2 class="subtitle is-4">The way we report car crashes <em>matters</em></h2>
        <section class="content">
            <h2 class='subtitle is-5'>The problem</h2>
            <p>The World Health Organization describes traffic deaths as a preventable health epidemic. Car crashes claim the lives of 1.3 million people each year. The majority of road traffic deaths are vulnerable road users (VRU): pedestrians, bicyclists, and motorcyclists.<sup>[1]</sup> In the U.S., motor vehicle related incidents are the leading cause of death of teenagers, 12-19 years.<sup>[2]</sup></p>
            <p>Leading causes of crashes include distracted driving, speeding, reckless driving, tailgating, driving under the influence of drugs, poor road design, among others. By all means, car crashes are preventable incidents caused by well-known, solvable systemic problems.</p>
            <p>Media coverage wields significant power to effect change: media decides which stories warrant attention and how to frame the discussion. So why does local media almost always report these tragic stories as isolated incidents, failing to draw attention to the underlying factors and similarities?</p>
        </section>
        <section class="content">
            <h2 class='subtitle is-5'>The solution</h2>
            <p>We developed Vision Zero Reporting, a natural language processing tool to identify editorial anti-patterns in crash reporting. The software delivers a report of all the problems detected in a news article, and provides recommendations to fix them. News reporters can use our scanner to fix problems before publication, and news agencies and readers can use the scanner after publication to understand if the reporting is fairly written.</p>
            <p>This project is primarily based off the following research paper:</p>
            <b-message>
                <div class="columns">
                    <div id='icon-column' class="column is-1">
                        <b-icon id='icon' icon="text-box-search-outline" size="is-medium" />
                    </div>
                    <div class="column">
                        <cite>Ralph, Kelcie, et al. “Editorial Patterns in Bicyclist and Pedestrian Crash Reporting.” Editorial Patterns in Bicyclist and Pedestrian Crash Reporting, Transportation Research Record Journal of the Transportation Research Board, Feb. 2019, <a href="https://www.researchgate.net/publication/330975590_Editorial_Patterns_in_Bicyclist_and_Pedestrian_Crash_Reporting" target="_blank">https://www.researchgate.net/publication/330975590_Editorial_Patterns_in_Bicyclist_and_Pedestrian_Crash_Reporting</a>.</cite>
                    </div>
                </div>
            </b-message>
        </section>

        <footer class="page">
            <ol>
                <li>"Road traffic injuries", World Health Organization (<a href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries" target="_blank">https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries</a>)</li>
                <li>"Mortality Among Teenagers Aged 12-19 Years: United States, 1999-2006", CDC (<a href="https://www.cdc.gov/nchs/products/databriefs/db37.htm" target="_blank">https://www.cdc.gov/nchs/products/databriefs/db37.htm</a>)</li>
            </ol>
        </footer>
    </article>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
#icon-column { display: table; }
#icon { display: table-cell; vertical-align: middle; }
</style>
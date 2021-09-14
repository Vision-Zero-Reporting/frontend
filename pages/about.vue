<template>
    <article>
        <h1 class='title is-2'>About Vision Zero Reporting</h1>
        <h2 class="subtitle is-4">The way we report car crashes <em>matters</em></h2>
        <section class="content">
            <h2 class='subtitle is-5'>Context</h2>
            <p>The World Health Organization describes traffic deaths as a preventable health epidemic. Car crashes claim the lives of 1.3 million people each year. The majority of road traffic deaths are vulnerable road users (VRU): pedestrians, bicyclists, and motorcyclists.<sup>[1]</sup> In the U.S., motor vehicle related incidents are the leading cause of death of teenagers, 12-19 years.<sup>[2]</sup></p>
        </section>
        <section class="content">
            <h2 class='subtitle is-5'>The problem</h2>
            <p>...</p>
        </section>
        <section class="content">
            <h2 class='subtitle is-5'>The solution</h2>
            <p>We developed Vision Zero Reporting, a natural language processing tool to identify editorial anti-patterns in crash reporting. The software delivers a report of all the problems detected in a news article, and provides recommendations to fix them. News reporters can use our scanner to fix problems before publication, and news agencies and readers can use the scanner after publication to understand if the reporting is fairly written. Vision Zero reporting currently identifies:</p>
            <ul>
                <ol v-for="problemType in availableTypes" :key="problemType.id">{{problemType.name}} &ndash; {{problemType.what}}</ol>
            </ul>
        </section>

        <footer>
            <p>1. "Road traffic injuries", World Health Organization (<a href="https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries" target="_blank">https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries</a></p>
            <p>2. "Mortality Among Teenagers Aged 12-19 Years: United States, 1999-2006", CDC (<a href="https://www.cdc.gov/nchs/products/databriefs/db37.htm" target="_blank">https://www.cdc.gov/nchs/products/databriefs/db37.htm</a></p>
        </footer>
    </article>
</template>

<script>
import ProblemTypes from '../assets/ProblemTypes'

export default {
    name: 'About',
    data() {
        return { ProblemTypes }
    },
    computed: {
        availableTypes() {
            return Object.values(this.ProblemTypes).filter(problemType => problemType.displayAsRegistered)
        }
    }
}
</script>


<style scoped>
footer {
    border-top: 1px SOLID #ddd;
}
</style>
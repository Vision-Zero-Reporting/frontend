<template>
    <li class="problem-entry">
        <p>
            <b-icon size="is-small" :icon="this.icon"></b-icon>
            {{this.type}}
        </p>
        <q>{{this.problem.sentence}}</q>
    </li>
</template>

<script>
import ProblemTypes from '../assets/ProblemTypes.js'

export default {
    name: 'ProblemEntry',
    props: ['problem', 'body'],
    data() {
        return {
            ProblemTypes
        }
    },
    computed: {
        name() { return ProblemTypes[this.problem.type].name },
        icon() { return ProblemTypes[this.problem.type].icon },
        color() { return ProblemTypes[this.problem.type].color },
        issue() { return ProblemTypes[this.problem.type].issue },
        explain() { return ProblemTypes[this.problem.type].explain },
        fix() { return ProblemTypes[this.problem.type].fix },
        type() { return this.problem.type }
    }
}
</script>

<style scoped>
.problem-entry {
    padding: 10px;
    margin: 10px;
}
.problem-type-marker {
    padding: 4px 6px;
    border-radius: 10%;
    color: #fff;
    text-shadow: 1px 1px #000;
    font-size: 0.7em;
    margin-right: 4px;
}
q {
    display: inline-block;
    padding: 2px 4px;
    background-color: rgba(0, 0, 0, 0.05);
    font-style: italic;
}
</style>
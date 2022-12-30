<template>
    <article>
        <h3 class='title is-2'>
            <b-icon icon="walk" />
            <b-icon icon="car-hatchback" size="is-medium" />
            <b-icon icon="motorbike" />
            <b-icon icon="bike" />
            <b-icon icon="bus-side" size="is-medium" />
            <b-icon icon="wheelchair-accessibility" />
            <b-icon icon="baby-carriage" />
        </h3>
        <h2 class="subtitle is-4">
            Car accident injures one
            <span class='is-pulled-right'>Oct 6 2021</span>
        </h2>
        <section>
            <span class='s3'></span><span class='s2 c2'></span><span class='s1'></span><span class='s4 c1'></span>
            <span class='s1'></span><span class='s3 c1'></span><span class='s2'></span><span class='s5'></span>
            <span class='s1'></span><span class='s5 c3'></span><span class='s1'></span><span class='s1 c3'></span>
            <span class='s2'></span><span class='s2'></span><span class='s5'></span><span class='s1'></span>
            <span class='s5'></span><span class='s1'></span><span class='s1'></span><span class='s2 c2'></span>
            <span class='s5'></span><span class='s1'></span>
        </section>
    </article>
</template>

<script>
export default {
  name: 'Preview'
}
</script>

<style scoped>
article { width: 40%; font-family: serif; font-size: 90%; }
h2 {
    border: 1px SOLID #222;
    border-left: none;
    border-right: none;
    padding: 5px;
    font-size: 1em !important;
    margin-bottom: 10px !important;
    margin-top: 5px !important;
}
h3 {
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-evenly;
}
section { line-height: 120%; }
section span {
    display: inline-block;
    background-color: #ddd;
    min-width: 50px;
    min-height: 10px;
    color: #ddd;
    margin: 2px;
}
.s1 { width: 40px; }
.s2 { width: 60px; }
.s3 { width: 70px; }
.s4 { width: 90px; }
.c1 { background-color: rgb(214, 81, 41, 0.8); }
.c2 { background-color: rgb(238, 180, 23, 0.8); }
.c3 { background-color: rgb(73, 194, 25, 0.8); }
</style>

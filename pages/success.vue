<template>
    <article>
        <section class="content">
            <h3 class="title is-4">
                <b-icon icon="check-decagram" size="is-large" type="is-success" /><br/>
                Your form was successfully submitted!
            </h3>
            <p>We'll review your message and respond to you soon. Thanks for reaching out.</p>
        </section>
    </article>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
section {
    border-top: 3px SOLID rgb(70, 200, 140);
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 0px;
    text-align: center;
}
label > input[type="radio"] { margin-left: 15px; }
</style>
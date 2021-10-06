<template>
    <article>
        <b-message type="is-success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message>
        <section>
            <h2 class="subtitle is-5">News partners</h2>
            <p v-for="partner in partners" :key="partner.name">
                <strong>{{partner.name}}</strong>
                <em v-if="partner.monthlyReaders">{{partner.monthlyReaders}} monthly readers</em>
                <a :href="partner.commitmentLetterLink" target="_blank">
                    <b-icon icon="file-document-edit-outline" size="is-small" />
                    Commitment letter
                </a>
            </p>
        </section>
    </article>
</template>

<script>
export default {
  name: 'Partners',
  data() {
    return {
      partners: [
        { name: 'New York Times', monthlyReaders: '1.4 million', commitmentLetterLink: '' },
        { name: 'Washington Post', monthlyReaders: '1.2 million', commitmentLetterLink: '' },
        { name: 'Eastern Herald', monthlyReaders: '', commitmentLetterLink: '' },
        { name: 'Postwestern Sentinel', monthlyReaders: '400k', commitmentLetterLink: '' },
      ]
    }
  }
}
</script>

<style scoped>
p { width: 40%; float: left; margin: 10px; }
p strong, p em, p a { display: block; }
</style>

<template>
    <div class="article-capture-container">

        <b-tabs v-model="selectedTabIndex">
          <b-tab-item label="URL" icon="link">
            <h3 class="subtitle is-5">Paste the URL of a crash-related news article below</h3>
            <b-field label="URL">
              <b-input v-model="url" placeholder="https://"></b-input>
            </b-field>
          </b-tab-item>
          <b-tab-item label="Manual entry" icon="file-document-outline">
            <h3 class="subtitle is-5">Copy and paste the content of a crash-related news article below</h3>
            <b-field label="Title">
              <b-input v-model="title" placeholder="One injured in Queens car accident"></b-input>
            </b-field>
            <b-field label="Body">
              <b-input type="textarea" v-model="body" placeholder="A 35-year-old woman was hit by a car in Queens on Saturday, August 28th. The woman was run over at about 5:50 a.m. by a grey or silver SUV at the intersection of Hillside Avenue and Queens Boulevard in the Jamaica neighborhood of Queens."></b-input>
            </b-field>
          </b-tab-item>
        </b-tabs>

        <b-button type="is-primary" @click="submitButtonClick" class="is-pulled-right" icon-left="file-search-outline">Analyze</b-button>
        <p style="clear:both;"></p>
    </div>
</template>

<script>
export default {
  name: 'ArticleCapture',
  data() {
    return {
      selectedTabIndex: 0,
      url: '',
      title: '',
      body: '',
    }
  },
  methods: {
    submitButtonClick() {
      // if the user provided a URL, we need to fetch the content
      const { url, title, body } = this.$data
      this.goToReportPage(url, title, body)
    },
    goToReportPage(url, title, body) {
      const query = url ? { url } : { title, body }

      if(url || (title && body)) {
        this.$router.push({ path: 'report', query })
      }
    }
  }
}
</script>

<style scoped>
.article-capture-container {
  padding: 20px;
  border-radius: 20px;
  background-color: #f9f9f9;
  width: 60%;
  margin: auto;
}
.b-tabs { margin-bottom: 0; }
</style>

<template>
    <div class="article-capture-container">
        <h3 class="subtitle is-5">Copy and paste the content of a crash-related news article below</h3>
        <b-field label="Title">
            <b-input v-model="title" placeholder="One injured in Queens car accident"></b-input>
        </b-field>
        <b-field label="Body">
            <b-input type="textarea" v-model="body" placeholder="A 35-year-old woman was hit by a car in Queens on Saturday, August 28th. The woman was run over at about 5:50 a.m. by a grey or silver SUV at the intersection of Hillside Avenue and Queens Boulevard in the Jamaica neighborhood of Queens."></b-input>
        </b-field>
        <!-- <b-tabs v-model="selectedTabIndex">
            <b-tab-item label="Text" icon="file-document-outline">
                <b-field label="Title">
                    <b-input v-model="title"></b-input>
                </b-field>
                <b-field label="Body">
                    <b-input type="textarea" v-model="body"></b-input>
                </b-field>
            </b-tab-item>
            <b-tab-item label="URL" icon="link">
                <b-field label="URL">
                    <b-input v-model="url" placeholder="https://"></b-input>
                </b-field>
            </b-tab-item>
        </b-tabs> -->
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
            errorMessage: ''
        }
    },
    methods: {
        submitButtonClick() {
            // if the user provided a URL, we need to fetch the content
            if(this.$data.selectedTabIndex === 1) {
                // this.$axios.get(this.$data.url)
                //     .then(response => {
                //         const articleData = unfluff(response.data)
                //         console.log(articleData)
                //     })
                //     .catch(error => {
                //         console.error(error)
                //     })
            }
            else { // user manually entered title and body
                const { title, body } = this.$data
                this.goToReportPage(title, body)
            }
        },
        goToReportPage(title, body) {
            if(title && body) {
                this.$router.push({ path: 'report', query: { title , body } })
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
</style>
<template>
    <div class="article-capture-container">
        <b-tabs v-model="selectedTabIndex">
            <b-tab-item label="Text" icon="file-document-outline">
                <b-field label="Title">
                    <b-input v-model="title"></b-input>
                </b-field>
                <b-field label="Body">
                    <b-input type="textarea" v-model="body"></b-input>
                </b-field>
            </b-tab-item>
            <!-- <b-tab-item label="URL" icon="link">
                <b-field label="URL">
                    <b-input v-model="url" placeholder="https://"></b-input>
                </b-field>
            </b-tab-item> -->
        </b-tabs>
        <b-button type="is-primary" @click="submitButtonClick" class="is-pulled-right">Submit</b-button>
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
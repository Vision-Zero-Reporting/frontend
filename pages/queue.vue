<template>
    <article>
        <section :class="statusData.sectionClass">
            <h3 class="title is-4">
                <b-icon v-if="position !== 0" icon="timer-sand" size="is-large" type="is-dark" />
                <b-icon v-else-if="started && !completed" icon="text-box-search" size="is-large" type="is-info" />
                <b-icon v-else icon="check-decagram" size="is-large" type="is-success" />
                <br/>
                {{statusData.statusHeader}}
            </h3>
            <h4 class="subtitle is-5">
              Your position in queue: #{{position}}
            </h4>
            <p>{{statusData.statusText}}</p><br/>
            <div class="progress-container">
              <b-progress v-if="!completed"></b-progress>
              <b-progress v-else type="is-success" value="100"></b-progress>
            </div>
            <kbd>Job ID: {{uuid}}</kbd>
        </section>
    </article>
</template>

<script>
const JobStatus = {
  Waiting: 'WAITING',
  Started: 'STARTED',
  Completed: 'COMPLETED'
}

const InfoByStatus = {
  [JobStatus.Waiting]: {
    sectionClass: 'waiting',
    statusHeader: 'Waiting...',
    statusText: 'The article you submitted will be analyzed in a moment!'
  },
  [JobStatus.Started]: {
    sectionClass: 'loading',
    statusHeader: 'Analyzing...',
    statusText: 'We\'re analyzing the article now!'
  },
  [JobStatus.Completed]: {
    sectionClass: 'success',
    statusHeader: 'Completed!',
    statusText: 'The report is ready to view! Redirecting...'
  },
}

export default {
  name: 'Queue',
  data() {
    return {
      uuid: '',
      position: '~',
      started: false,
      completed: false,
      redirectTimer: null,
      eventSource: null,
      JobStatus,
      InfoByStatus
    }
  },
  computed: {
    status() {
      if (this.completed) return JobStatus.Completed
      if (this.started) return JobStatus.Started
      if (!this.started) return JobStatus.Waiting
    },
    statusData() {
      return InfoByStatus[this.status] || {}
    }
  },
  mounted() {
    this.uuid = this.$route.query.uuid

    this.$once("hook:beforeDestroy", () => {
      this.eventSource.close()
      clearTimeout(this.redirectTimer)
    })

    this.eventSource = new EventSource(`${process.env.baseURL}/events/${this.uuid}`)
    this.eventSource.addEventListener(this.uuid, (response) => {
      const json = JSON.parse(response.data)
      this.position = json.position
      this.started = json.started
      this.completed = json.completed

      if (this.completed && document.body.contains(this.$el)) {
        this.redirectTimer = setTimeout(() => {
          this.$router.push({ path: `/report/${this.uuid}` })
        }, 1100)
      }
    })
  }
}
</script>

<style scoped>
section {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 0px;
    text-align: center;
}
.waiting { border-top: 3px SOLID #363636 }
.loading { border-top: 3px SOLID #167df0 }
.success { border-top: 3px SOLID rgb(70, 200, 140); }
.progress-container { width: 50%; margin: auto; }
kbd { font-size: 0.7em; }
</style>

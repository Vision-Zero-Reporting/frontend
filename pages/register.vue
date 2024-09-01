<template>
  <article>
    <section class="content">
      <h1 class='title is-2'>Register</h1>
      <b-message v-if="failedRegistration" type="is-warning">
        Failed to register. Please check that all fields are filled out properly. If this error persists,
        please contact support at <a href="mailto:visionzeroreporting@gmail.com">visionzeroreporting@gmail.com</a>
      </b-message>
      <b-field label="First name">
        <b-input
          type="text"
          v-model="firstName"
          required
        ></b-input>
      </b-field>
      <b-field label="Last name">
        <b-input
          type="text"
          v-model="lastName"
          required
        ></b-input>
      </b-field>
      <b-field label="Email">
        <b-input
          type="email"
          v-model="email"
          required
        >
        </b-input>
      </b-field>
      <b-field label="Password">
        <b-input
          type="password"
          v-model="password"
          required
          validation-message="Password must be at least 12 characters long"
          pattern="\w{12,}"
        >
        </b-input>
      </b-field>
      <b-field label="Confirm password">
        <b-input
          type="password"
          v-model="confirmPassword"
          required
          validation-message="Password must be at least 12 characters long"
          pattern="\w{12,}"
        >
        </b-input>
      </b-field>
      <b-field label="Which description best fits your role?">
        <b-radio v-model="role" native-value="FIRST_RESPONDER">
          <b-icon icon="car-emergency" size="is-small" />
          <strong>Public safety</strong>
          <p>I am a first responder or work in public safety</p>
        </b-radio>
      </b-field>
      <b-field>
        <b-radio v-model="role" native-value="JOURNALIST">
          <b-icon icon="notebook-edit-outline" size="is-small" />
          <strong>Journalism</strong>
          <p>I am a journalist, publisher, editor, or blogger</p>
        </b-radio>
      </b-field>
      <b-field>
        <b-radio v-model="role" native-value="RESEARCHER">
          <b-icon icon="microscope" size="is-small" />
          <strong>Research</strong>
          <p>I conduct public safety research</p>
        </b-radio>
      </b-field>
      <b-field>
        <b-radio v-model="role" native-value="ADVOCATE">
          <b-icon icon="account-child-circle" size="is-small" />
          <strong>Advocacy</strong>
          <p>I am an advocate for street safety</p>
        </b-radio>
      </b-field>
      <b-field>
        <b-radio v-model="role" native-value="OTHER">
          <b-icon icon="selection-ellipse" size="is-small" />
          <strong>Other</strong>
          <p>None of the above roles fit me</p>
        </b-radio>
      </b-field>
      <b-button type="is-primary" @click="submit" class="is-pulled-right">Submit</b-button>
      <p style="clear:both;"></p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      failedRegistration: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    }
  },
  methods: {
    submit() {
      // const { email, password } = this.$data
      // console.log(this.$store.state.user)
      // this.$axios.post('/login', { email, password })
      // .then((response) => {
      //   this.$store.dispatch('checkSession')
      // })
      // .catch((e) => {
      //   this.failedLogin = true
      // })
    }
  }
}
</script>

<style scoped>
section {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: auto;
}
</style>

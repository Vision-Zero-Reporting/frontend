<template>
  <article>
    <section class="content">
      <h1 class='title is-2'>Register</h1>
      <b-message v-if="failedRegistration" type="is-warning">
        Failed to register. Please check that all fields are filled out properly. If this error persists,
        please contact support at <a href="mailto:visionzeroreporting@gmail.com">visionzeroreporting@gmail.com</a>
      </b-message>
      <b-message v-if="validationErrors.length" type="is-warning">
        The following issues should be addressed to register:
        <ul>
          <li v-for="errorMsg in validationErrors">{{ errorMsg }}</li>
        </ul>
        Please check that all fields are filled out properly. If you need help,
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
          <p>I am a journalist, publisher, or editor</p>
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
      validationErrors: [],
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    }
  },
  methods: {
    validate() {
      const validationErrors = []
      const { firstName, lastName, email, password, confirmPassword, role } = this.$data

      // Presence of data
      if (!firstName) validationErrors.push('Please enter your first name')
      if (!lastName) validationErrors.push('Please enter your last name')
      if (!email) validationErrors.push('Please enter your email address')
      if (!password) validationErrors.push('Please enter a password')
      if (!confirmPassword) validationErrors.push('Please confirm your password')
      if (!role) validationErrors.push('Please select a role')

      // Email format (see https://emailregex.com/)
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      if (!email.match(emailRegex)) validationErrors.push('Please enter a valid email')

      // Password checks
      if (password && confirmPassword && password !== confirmPassword) validationErrors.push('Passwords do not match')
      if (password.length < 12) validationErrors.push('Password must be at least 12 characters long')

      this.validationErrors = validationErrors
      return validationErrors.length === 0
    },
    submit() {
      if (!this.validate()) return

      const { firstName, lastName, email, password, confirmPassword, role } = this.$data
      this.$axios.post('/user', { firstName, lastName, email, password, confirmPassword, role })
      .then((response) => {
        if (response.ok) {
          this.$store.dispatch('checkSession')
          // TODO: redirect to dashboard
        } else {
          throw Error('Something went wrong during registration')
        }
      })
      .catch((e) => {
        this.failedRegistration = true
      })
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

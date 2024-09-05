<template>
  <article>
    <section class="content">
      <h1 class='title is-2'>Log in</h1>
      <b-message v-if="failedLogin" type="is-warning">
        Failed to log in: email or password is incorrect! If you need assistance logging in, contact support at 
        <a href="mailto:visionzeroreporting@gmail.com">visionzeroreporting@gmail.com</a>
      </b-message>
      <b-field label="Email">
        <b-input
          type="email"
          v-model="email"
        >
        </b-input>
      </b-field>
      <b-field label="Password">
        <b-input
          type="password"
          v-model="password"
        >
        </b-input>
      </b-field>
      <b-button type="is-primary" @click="submit" class="is-pulled-right">Login</b-button>
      <p style="clear:both;"></p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      failedLogin: false,
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      const { email, password } = this.$data
      this.$axios.post('/login', { email, password })
      .then((response) => {
        if (response.status == 200) {
          this.$store.dispatch('checkSession')
          this.$router.push({ path: 'dashboard' })
        } else {
          throw Error('Error logging in')
        }
      })
      .catch((e) => {
        this.failedLogin = true
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

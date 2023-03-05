<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form ref="form" v-model="valid">
          <h3>Log In</h3>
          <v-text-field
            v-model="email"
            type="email"
            placeholder="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            placeholder="Password"
          ></v-text-field>
          <v-btn :disabled="!valid" @click="onSubmit"> Login </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'isLoggedIn',
  data: () => ({
    valid: true,
    email: 'admin@admin.com',
    password: '123456',
  }),

  methods: {
    async onSubmit(event) {
      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }

      try {
        await this.$auth.loginWith('local', payload)
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
      // this.$refs.form.validate()
      event.preventDefault()
    },
  },
}
</script>

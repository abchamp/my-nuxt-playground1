<template>
  <v-app-bar app flat>
    <v-container class="py-0 fill-height">
      <v-btn text to="/" nuxt> Home </v-btn>
      <v-btn text to="/blog" nuxt> Blog </v-btn>
      <v-btn text to="/profile" nuxt> Profile </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuth === false" text to="/login" nuxt> Login </v-btn>
      <v-btn v-if="isAuth === true" text to="/logout" nuxt> Logout </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isAuth: function () {
      return this.$store.state.auth.loggedIn
    },
  },
}
</script>

<style scoped></style>

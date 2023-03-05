<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>My Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="user.avatar_url" alt="ProfileImage"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list-item v-for="repo in repos" :key="repo.id">
          <v-list-item-title class="text-h6">
            {{ repo.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Star : {{ repo.stargazers_count }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    $axios.setHeader('Authorization', null)
    const [user, repos] = await Promise.all([
      $axios.$get('https://api.github.com/users/abchamp'),
      $axios.$get(
        'https://api.github.com/users/abchamp/repos?sort=pushed&per_page=100'
      ),
    ])

    return { user, repos }
  },
}
</script>

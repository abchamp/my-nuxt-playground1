<template>
  <v-container>
    <v-row>
      <v-col
        v-for="photo in photos"
        :key="photo.id"
        class="d-flex child-flex"
        cols="4"
      >
        <nuxt-link :to="{ path: `photos/${photo.id}` }">
          <v-img
            :src="photo.download_url"
            :lazy-src="photo.download_url"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PhotosIndexPage',
  middleware: ['isLoggedIn'],
  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=19')
    return { photos }
  },
}
</script>

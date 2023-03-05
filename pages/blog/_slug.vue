<template>
  <div class="container">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <nuxt-content :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  middleware: 'isLoggedIn',
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    // $content return object
    // where return array
    return {
      post,
    }
  },
}
</script>

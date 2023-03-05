<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Nuxt Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt.js Workshop - Building Portfolio with Nuxt.js',
        },
      ],
    }
  },
}
</script>

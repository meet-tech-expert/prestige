<template>
  <div>
    <h4>{{ title }}</h4>
    <div class="mt-3 blog-content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
}
</script>

<style lang="scss" scoped>
</style>
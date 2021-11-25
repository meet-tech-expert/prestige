<template>
  <div class="post-related">
    <h5>Related Posts</h5>
    <div class="row row-20">
      <div class="col-md-6" v-for="(post, index) in relatedPosts" :key="index">
        <PostListItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relatedPosts: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
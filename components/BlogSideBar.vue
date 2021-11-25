<template>
  <div class="col-lg-4">
    <div class="post-single-sidebar">
      <div class="row row-30 row-xl-60">
        <BlogLatestPosts :latest-posts="relatedPosts" />

        <div class="col-md-6 col-lg-12">
          <BlogTags :tags="tags" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    relatedPosts: [Array, Object],
    tags: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="col-md-6 col-lg-12">
    <div class="post-single-sidebar-item text-center">
      <h5>Latest Posts</h5>
      <div class="post-minimal-wrap">
        <nuxt-link
          v-for="(post, index) in latestPosts"
          :key="index"
          class="post-minimal"
          :to="`/blog/${slug(post.title)}/`"
          ><span class="post-minimal-image"
            ><img
              :src="getAssetsUrl()+post.image"
              alt=""
              width="92"
              height="78" /></span
          ><span class="post-minimal-body"
            ><span class="post-minimal-title">{{ post.title }}</span
            ><span class="post-minimal-time"
              >{{ new Date(post.publish_on) | dateFormat('MMMM DD, YYYY') }}</span
            ></span
          ></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    latestPosts: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <article class="news-recent">
    <div class="news-recent-image">
      <nuxt-link :to="`/blog/${slug(post.title)}/`"
        ><img :src="getAssetsUrl()+post.image" alt="" width="736" height="464"
      /></nuxt-link>
    </div>
    <div class="news-recent-body">
      <h5 class="news-recent-title">
        <nuxt-link :to="`/blog/${slug(post.title)}/`">{{
          post.title
        }}</nuxt-link>
      </h5>
      <ul class="list-inline-divided">
        <li>
          <span
            class="icon icon-xs icon-primary mdi mdi-clock novi-icon"
          ></span>
          <nuxt-link :to="`/blog/${slug(post.title)}/`">{{             new Date(post.publish_on) | dateFormat('MMMM DD, YYYY')          }}</nuxt-link>
        </li>
        <!--<li>
          <span
            class="icon icon-xs icon-primary mdi mdi-thumb-up-outline novi-icon"
          ></span>
          <a href="#">{{ post.likes }}</a>
        </li>
        <li>
          <span
            class="icon icon-xs icon-primary mdi mdi-message-outline novi-icon"
          ></span>
          <nuxt-link :to="`/blog/${slug(post.title)}/`">0</nuxt-link>
        </li>-->
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="post-single-sidebar-item text-center">
    <h5>Tags</h5>
    <ul class="list-tags">
      <li v-for="(tag,i) in tags" :key="i">
        <nuxt-link :to="`/tag/${tag.key}/`">{{ tag.value }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tags: [Object, Array],
  },
}
</script>

<style lang="scss" scoped>
</style>
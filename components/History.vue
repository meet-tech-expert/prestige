<template>
  <div class="tab-pane fade show active" id="tabs-2-1">
    <h3>Who We Are</h3>
    <div class="mt-4" v-html="history"></div>
  </div>
</template>

<script>
export default {
  props: {
    history: [Array, Object, String],
  },
}
</script>

<style lang="scss" scoped>
</style>
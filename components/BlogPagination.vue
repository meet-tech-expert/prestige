<template>
  <div class="pagination-media-wrap">
    <ul class="pagination-media">
      <li v-for="(page, index) in totalPages" :key="page">
        <a
          :class="{ 'pagination-media-active': index + 1 == currentPage }"
          @click.prevent="goToPage(index + 1)"
          href="#"
          >{{ index + 1 }}</a
        >
      </li>
      <!-- <li><span class="pagination-media-disabled">...</span></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: Number,
    currentPage: Number,
    postsPerPage: Number,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts / this.postsPerPage)
    },
  },
  methods: {
    goToPage(page) {
      page != this.currentPage ? this.$emit('goToPage', page) : ''
    },
    prev(page) {
      if (this.currentPage == 1) {
        return
      }
      this.$emit('goToPage', page - 1)
    },
    next(page) {
      if (this.currentPage == Math.ceil(this.posts / this.postsPerPage)) {
        return
      }
      this.$emit('goToPage', page + 1)
    },
  },
}
</script>


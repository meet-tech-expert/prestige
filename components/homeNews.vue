<template>
  <section class="section bg-gray-100 section-lg text-center">
    <div class="container">
      <h2>{{heading}}</h2>
      <div class="row row-30">
        <div class="col-md-6" v-for="(post, index) in blogs" :key="index">
          <PostListItem :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
	heading: String,
	blogs: [Array, Object],
  },
  data() {
    return {
      news: [
        {
          title: 'Related Posts No 1',
          thumbnail: 'images/post-recent-01-736x464.jpg',
          meta: {
            date: 'February 16, 2020',
            likes: 20,
            comments: 25,
          },
        },
        {
          title: 'Related Posts No 2',
          thumbnail: 'images/post-recent-01-736x464.jpg',
          meta: {
            date: 'February 16, 2020',
            likes: 20,
            comments: 25,
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
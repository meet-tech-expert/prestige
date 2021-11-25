<template>
  <div>
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      v-bind:style="{
        backgroundImage:
          'url(' +
          getAssetsUrl() +
          $config[0].blog.blogData.background_image.id +
          ')',
      }"
    >
    <BackgroundOverlay :status="$config[0].blog.blogData.background_overlay" :color="$config[0].blog.blogData.background_overlay_color" :opacity="$config[0].blog.blogData.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">Tag</h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/blog/">Blog</nuxt-link></li>
          <li class="active">{{ $route.params.tag.toUpperCase().replace(/-/g,' ') }}</li>
        </ul>
      </div>
    </section>
    <!-- Media-->
    <section class="section section-lg bg-gray-100">
      <div class="container">
        <div class="row row-30 justify-content-center">
          <div
            class="col-sm-11 col-md-10 col-lg-6"
            v-for="(post, index) in currentPagePosts"
            :key="index"
          >
            <article class="news-full-width">
              <div class="news-full-width-image">
                <nuxt-link :to="`/blog/${slug(post.title)}/`"
                  ><img
                    :src="getAssetsUrl() + post.image"
                    alt=""
                    width="572"
                    height="612"
                /></nuxt-link>
              </div>
              <div class="news-full-width-body">
                <h4>
                  <nuxt-link :to="`/blog/${slug(post.title)}/`">{{
                    post.title
                  }}</nuxt-link>
                </h4>
                <ul class="list-inline-divided">
                  <li>
                    <span
                      class="
                        icon icon-xs icon-primary
                        mdi mdi-clock
                        novi-icon
                        text-green
                      "
                    ></span
                    ><nuxt-link :to="`/blog/${slug(post.title)}/`">{{
                      new Date(post.publish_on) | dateFormat('MMMM DD, YYYY')
                    }}</nuxt-link>
                  </li>
                </ul>
                <p>
                  {{ post.excerpt }}
                </p>
              </div>
            </article>
          </div>

          <div class="gallery-load-more text-center mt-4">
            <div
              v-infinite-scroll="loadMore"
              infinite-scroll-distance="100"
              infinite-scroll-disabled="busy"
            >
              <div
                class="text-center"
                v-if="currentPage * postsPerPage < blogs.length"
              >
                <DotsLoader />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [],
      postsPerPage: 6,
      currentPage: 1,
      initialBlogs: 6,
      busy: false,
    }
  },
  computed: {
    currentPagePosts() {
      let blogsToShow =
        this.initialBlogs + this.postsPerPage * (this.currentPage - 1)
      return this.blogs.slice(0, blogsToShow)
    },
  },
  methods: {
    loadMore() {
      if (!this.currentPagePosts.length) return
      this.busy = true
      setTimeout(() => {
        this.currentPage = this.currentPage + 1
        this.busy = false
      }, 500)
    },
    findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return true
        }
      }
      return false
    },
  },
  async fetch() {
    const tagName = this.$route.params.tag
    console.log(tagName)
    //console.log(this.$config[0].blog.blogs)
    var that = this
    if (this.$config[0].blog.blogs.length > 0) {
      let Blog = that.$config[0].blog.blogs.filter(function (e) {
        let k = that.findWithAttr(e.tags, 'key', tagName)
        //console.log(k)
        return k
      })
      this.blogs = Blog
      //console.log(this.blogs)
    }
  },
  head() {
    return this.getHeadData(this.$config[0].blog.blogData, this.$route.params.tag)
  },
}
</script>

<style lang="scss" scoped>
</style>
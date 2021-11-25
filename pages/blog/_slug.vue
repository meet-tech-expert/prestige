<template>
  <div>
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      :style="`background-image: url(${getAssetsUrl() + blog.image})`"
    >
    <BackgroundOverlay :status="blog.background_overlay" :color="blog.background_overlay_color" :opacity="blog.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">{{ blog.title }}</h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/blog/">Blog</nuxt-link></li>
          <li class="active">{{ blog.title }}</li>
        </ul>
      </div>
    </section>
    <!-- Media Post-->
    <section class="section section-lg bg-gray-100">
      <div class="container">
        <div class="row row-30">
          <div class="col-lg-8">
            <div class="post-single">
              <BlogThumbnail :src="getAssetsUrl() + blog.image" />
              <div class="post-single-body">
                <BlogContent :title="blog.title" :content="blog.description" />
                <BlogPostMeta
                  :date="blog.publish_on"
                  :id="blog.id"
                  :comments="totalCount"
                  :blogslug="blog.slug"
                />
              </div>
            </div>
            <BlogRelatedPostsGrid :related-posts="relatedBlogs.slice(0, 2)" />
            <BlogComments
              v-if="commentObject.length"
              :comments="commentObject"
              :totalComments="totalComments"
              :postid="blog.id"
              defaultStatus="approved"
              @newCommentAdded="updateComments()"
              :totalCount="totalCount"
            />
          </div>
          <BlogSideBar :related-posts="relatedBlogs" :tags="blog.tags" />
        </div>
      </div>
    </section>
    <Login v-if="showLogin" />
    <Signup v-if="showSignup" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      blog: [],
      relatedBlogs: [],
      commentObject: [],
      totalComments: '0 Comments',
      totalCount: 0,
    }
  },
  computed: {
    showLogin() {
      return this.$store.state.showLogin
    },
    showSignup() {
      return this.$store.state.showSignup
    },
  },
 async mounted() {
    this.fetchApiData()
  },
  methods: {
    updateComments() {
      /* Fetch comments again when a new comment added */
      console.log('comments updated!')
      this.fetchApiData()
    },
    async fetchApiData() {
      //console.log(this.$nuxt.$route.meta.global);
      //if (this.$nuxt.$route.meta.global.comments == 'enable') {
      var id = this.blog.id
      const comments = await this.getPostComments(id);
      //console.log(comments);
      this.commentObject = comments[0]
      this.totalComments = comments[1] > 1 ? comments[1] + ' Comments' : comments[1] + ' Comment';
      this.totalCount = comments[1]
      // axios({
      //   url: 'https://0707.io/comments/getPrestigeComments.php',
      //   method: 'POST',
      //   data: 'id=' + id,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-type': 'application/x-www-form-urlencoded',
      //   },
      // })
      //   .then((response) => {
      //     this.commentObject = response.data.data
      //     this.totalCount = response.data.total
      //     if (response.data.total == '0') {
      //       this.totalComments = response.data.total + ' Comments'
      //     } else if (response.data.total == '1') {
      //       this.totalComments = response.data.total + ' Comment'
      //     } else {
      //       this.totalComments = response.data.total + ' Comments'
      //     }
      //   })
      //   .catch((e) => {
      //     //this.errors.push(e)
      //     console.log(e)
      //     this.showNotification(e, 'error')
      //   })
      //}
    },
  },
  async fetch() {
    const blogSlug = this.$route.params.slug
    //console.log(this.$config[0].blog.blogs)
    if (this.$config[0].blog.blogs.length > 0) {
      let singleBlog = this.$config[0].blog.blogs.filter(function (e) {
        return e.slug == blogSlug
      })
      //console.log(singleBlog[0].title)
      this.blog = singleBlog[0]
      let relatedBlog = this.$config[0].blog.blogs.filter(function (e) {
        return e.slug != blogSlug
      })
      //console.log(relatedBlog)
      this.relatedBlogs = relatedBlog
    }
  },
  head() {
    if (this.$config[0].blog.blogs.length) {
      return this.getHeadData(this.blog)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
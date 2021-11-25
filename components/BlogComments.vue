<template>
  <div class="post-comments" id="post-comments">
    <h5>{{totalComments}}</h5>
	<a
      href="#"
      v-if="$store.state.isAuthenticated"
      @click.prevent="logout()"
      class="log-out-button"
    >
      <span>Log out</span>
    </a>
    <div class="row" v-if="totalCount > 0">
      <div class="col-lg-12">
        <div class="comment-wrap">
          <BlogCommentItem
            v-for="(comment, index) in orderedComments"
            :key="index"
            :replies="comment.replies"
            :comment="comment"
            @newCommentAdded="newCommentAdded()"
            :postid="postid"
            :defaultStatus="defaultStatus"
          />
        </div>
      </div>
    </div>
	 <div class="row">
	  <div class="col-lg-12">
      <form class="text-left">
        <div class="form-wrap">
          <label class="form-label" for="comment-message">Message</label>
          <textarea
            class="form-input"
            id="comment-message"
            name="comment_text"
            v-model.trim="comment_text"
            @focus="checkAuthentication()"
          ></textarea>
        </div>
        <div class="form-button group-sm text-center text-lg-left">
          <button
            class="button button-primary button-circle"
            type="button"
            @click="sendCommentHandler()"
            :disabled="!$store.state.isAuthenticated"
          >
            Leave Comment
          </button>
        </div>
      </form>
    </div>
    </div>
	
  </div>
</template>


<script>
import _ from 'lodash'
export default {
  props: {
    comments: [Array, Object],
    totalComments: String,
    postid: [String, Number],
    defaultStatus: String,
	totalCount: Number,
  },
  computed: {
    orderedComments() {
      return _.orderBy(this.$props.comments, ['id'], ['desc'])
    },
  },
  mounted() {
    // console.log(this.$props.comments)
   },
  data() {
    return {
      comment_text: '',
    }
  },
  methods: {
    newCommentAdded() {
      this.$emit('newCommentAdded')
    },
    async sendCommentHandler() {
      if (this.comment_text != '') {
        let response = await this.sendComments(
          this.$props.postid,
          this.comment_text,
          0,
          this.$props.defaultStatus
        )
        //console.log(response)
        if (response) {
          this.comment_text = ''
          // Raise 'newCommentAdded' Event
          this.$emit('newCommentAdded')
          if (response.status == 'pending') {
            this.showNotification(
              'Your comment is under moderation.It will publish when approved. ',
              'info'
            )
          } else {
            this.showNotification('Comment is added successfully', 'success')
          }
        } else {
          this.showNotification(response.data.errors[0].message, 'error')
        }
      } else {
        this.showNotification('Please add comment first.', 'info')
      }
    },
  },
}
</script>



<style lang="scss" scoped>
</style>
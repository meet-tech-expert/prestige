<template>
  <div>
    <div class="comment">
      <div class="comment-image">
        <img :src="comment.user_pic" alt="" width="65" height="65" />
      </div>
      <div class="comment-body">
        <div class="comment-body-header">
          <div class="comment-name">
            <span>{{ comment.user_name }}</span>
          </div>
          <div class="comment-time">
            <a href="#"><timeago :datetime="comment.date_created"></timeago></a>
          </div>
        </div>
        <p>
          {{ comment.comments }}
        </p>
        <ul class="list-inline">
          <li>
            <span class="icon mdi mdi-comment-outline"></span
            ><a @click.prevent="isReplying = true" href="#">Reply</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="comment" v-if="isReplying">
      <div class="comment-image">
        <img :src="comment.user_pic" alt="" width="65" height="65" />
      </div>
      <div class="comment-body">
        <div class="comment-body-header">
          <div class="comment-name">
            <span>{{ comment.user_name }}</span>
          </div>
        </div>
        <form
          class="rd-form rd-mailform"
          data-form-output="form-output-global"
          data-form-type="contact"
          method="post"
        >
          <div class="form-wrap">
            <label class="form-label" for="contact-2-message"
              >Your comment</label
            >
            <textarea
              class="form-input"
              :id="'comment-message-' + comment.id"
              name="message"
              @focus="checkAuthentication()"
              v-model.trim="reply_text"
            ></textarea>
          </div>
		  <button @click.prevent="isReplying = false" class="button button-default button-circle" type="button">
			  Cancel
		  </button>
          <button
            class="button button-primary-light"
            type="submit"
            @click.prevent="sendReplyHandler(comment.id)"
			:disabled="!$store.state.isAuthenticated"
          >
            Leave Reply
          </button>
        </form>
		
      </div>
    </div>
	
	    
		
		<div class="comment reply-comment" :id="'comment-' + reply.id" 
		  v-for="(reply, index) in orderedReplies" :key="index">
		<div class="comment-image">
			<img :src="reply.user_pic" alt="" width="80" height="80" />
		  </div>
		  <div class="comment-body">
			<div class="comment-body-header">
			  <div class="comment-name">
				<span>{{ reply.user_name }}</span>
			  </div>
			  <div class="comment-time">
				<a href="#"><timeago :datetime="reply.date_created"></timeago></a>
			  </div>
			</div>
			<p>
			  {{ reply.comments }}
			</p>
		  </div>
        </div>
	
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      isReplying: false,
      reply_text: '',
    }
  },
   mounted() {
     //console.log(this.$props.comment)
   },
  props: {
    comment: [Array, Object],
    replies: [Array, Object],
    isReply: {
      type: [Boolean, Number],
      default: false,
    },
    postid: [String, Number],
    defaultStatus: String,
  },
  computed: {
    orderedReplies() {
      return _.orderBy(this.$props.replies, ['id'], ['desc'])
    },
  },
  methods: {
    newCommentAdded() {
      this.$emit('newCommentAdded')
    },
    async sendReplyHandler(id) {
      if (this.reply_text != '') {
        console.log('reply ' + id)
        let response = await this.sendComments(
          this.$props.postid,
          this.reply_text,
          id,
          this.$props.defaultStatus
        )
        //console.log(response)
        if (response) {
          this.reply_text = ''
          this.isReplying = false
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
.reply-comment {
    margin-left: 70px;
}
</style>
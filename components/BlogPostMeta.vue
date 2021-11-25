<template>
  <ul class="post-single-meta">
    <li>
      <ul class="list-inline">
        <li>
          <span class="icon icon-xs icon-primary mdi mdi-clock novi-icon"></span
          ><a href="#">{{ new Date(date) | dateFormat('MMMM DD, YYYY') }}</a>
        </li>
        <li>
          <a href="#" @click.prevent="doLikes()"><span
            class="icon icon-xs icon-primary mdi mdi-thumb-up-outline novi-icon"
          ></span> {{ likes }}</a>
        </li>
        <li>
          <a href="#" v-scroll-to="{ el: '#post-comments', offset: -100 }"><span
            class="icon icon-xs icon-primary mdi mdi-message-outline novi-icon"
          ></span> {{ comments }}</a>
        </li>
      </ul>
    </li>
    <li>
      <ul class="list-inline">
        <li>Share this post</li>
        <li>
          <ul class="list-inline-xs">
            <li>
              <a
                class="icon fa-facebook-f novi-icon"
				target="_blank"
                :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
              ></a>
            </li>
            <li>
              <a
                class="icon fa-twitter novi-icon"
				target="_blank"
                :href="`https://twitter.com/intent/tweet?url=${shareUrl}&text=`"
              ></a>
            </li>
            <li>
              <a
                class="icon fa-pinterest-p novi-icon"
				target="_blank"
                :href="`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=&description=`"
              ></a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
   data() {
    return {
      likes: 0,
	}
  },	
  props: {
    date: String,
    blogslug: String,
    id: Number,
    comments: [Number, String],
  },
  methods: {
	async doLikes(){
		let likeData = { 'likes' : ++this.likes};
		let res = await this.updateItem('blogs', this.$props.id ,likeData)
        //console.log(res)
        if (res) {
			this.likes = res.likes;
		}else{
			--this.likes
		}
	},
	async fetchLikes() {
		let token = await this.getToken();
		const blogRes = await fetch(this.getBackendUrl()+"items/blogs/"+this.$props.id+"/?fields=id,likes&access_token="+token);
		const pr = await blogRes.json();
		//console.log(pr.data);
		if(pr.data){
			this.likes = pr.data.likes;
		}
    },
  },
  mounted() {
    this.fetchLikes()
  },
  computed: {
    shareUrl() {
      return this.getFrontendUrl()+"blog/"+this.$props.blogslug+"/";
     },
  },
}
</script>

<style lang="scss" scoped>
</style>
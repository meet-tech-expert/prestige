<template>
  <div>
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      v-bind:style="{ backgroundImage: 'url('+getAssetsUrl()+$config[0].career.careerData.background_image.id+')' }"
    >
    <BackgroundOverlay :status="$config[0].career.careerData.background_overlay" :color="$config[0].career.careerData.background_overlay_color" :opacity="$config[0].career.careerData.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">{{$config[0].career.careerData.heading}}</h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="active">{{$config[0].career.careerData.heading}}</li>
        </ul>
      </div>
    </section>
    <!-- Careers about-->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="row row-30">
          <div class="col-lg-6 text-center">
            <img
              :src="getAssetsUrl()+$config[0].career.careerData.image.id"
              alt=""
              width="570"
              height="368"
            />
          </div>
          <div class="col-lg-6">
            <div class="careers-block">
              <h3>{{$config[0].career.careerData.title}}</h3>
              <div v-html="$config[0].career.careerData.description"></div>
              <ul class="careers-block-list">
                <li v-for="(point, index) in $config[0].career.careerData.points"
              :key="index">{{point.text}}</li>
              </ul>
              <button
                class="button button-lesser button-secondary bg-green"
                type="button"
				v-scroll-to="{ el: '#applyForm', offset: -100 }"
                >{{$config[0].career.careerData.cta_text}}
			  </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Careers table-->
	<Modal @handleModal="closeModal" :open="open" :content="content" /> 
    <section class="section section-lg bg-default">
      <div class="container">
        <h3 class="font-weight-medium">{{$config[0].career.careerData.jobs_heading}}</h3>
        <div class="table-custom-responsive table-careers-wrap">
          <table class="table-custom table-careers">
            <thead>
              <tr>
			    <th>Date</th>
                <th>Job Position</th>
                <th>Location</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(job, index) in $config[0].career.jobs"
              :key="index">
			    <td>{{new Date(job.date) | dateFormat('MMMM DD, YYYY')}}</td>
                <td><a href="#" class="text-underline" @click.prevent="openModal(job.description)">{{job.title}}</a></td>
                <td>{{job.location}}</td>
                <td>{{job.type}}</td>
              </tr>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="section section-lg bg-default" id="applyForm">
      <div class="container">
        <div class="row align-items-md-center row-30">
          <div class="col-lg-8">
            <div v-if="showForm">
              <ApplyForm @sent="showForm = false" />
            </div>
            <div v-if="!showForm">
              <h4 class="h4">
                Thank You!<br />
                We'll be in touch soon.
              </h4>
              <span class="btn-mute"> Message has been sent </span>
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
      showForm: true,
      open: false,
      content: '',
    }
  },
  methods: {
    async closeModal() {
      this.open = false
    },
    openModal(desc) {
      //console.log('clicked')
      this.open = true
      this.content = desc
    },
  },
  head() {
    return this.getHeadData(this.$config[0].career.careerData)
  },
}
</script>

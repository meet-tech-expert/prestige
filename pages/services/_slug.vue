<template>
  <div v-if="services">
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      :style="`background-image: url(${
        getAssetsUrl() + services.hero_background
      })`"
    >
    <BackgroundOverlay :status="services.background_overlay" :color="services.background_overlay_color" :opacity="services.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">
          {{ prettyTitle($route.params.slug) }}
        </h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/services/">Services</nuxt-link></li>
          <li class="active">{{ prettyTitle(services.slug) }}</li>
        </ul>
      </div>
    </section>
    <!-- About-->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="row row-30 align-items-md-center">
          <div class="col-lg-6">
            <div class="img-layout-1">
              <img
                :src="getAssetsUrl() + services.image"
                alt=""
                width="600"
                height="428"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="construction-block">
              <h4 class="heading-divider divider-green mb-3">
                {{ services.heading }}
              </h4>
              <div v-html="services.long_description"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      services: [],
    }
  },
  methods: {
    prettyTitle(title) {
      return _.startCase(title)
    },
  },
  async fetch() {
    const serivceName = this.$route.params.slug
    //console.log(serivceName)
    if (this.$config[0].service.services.length > 0) {
      let singleService = this.$config[0].service.services.filter((e) => {
        return e.slug == serivceName
      })
      //console.log(singleService[0].title)
      this.services = singleService[0]
    }
  },
  head() {
    if (this.$config[0].service.services.length && this.services) {
      return this.getHeadData(this.services)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
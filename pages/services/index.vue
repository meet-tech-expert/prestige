<template>
  <div>
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      v-bind:style="{
        backgroundImage:
          'url(' +
          getAssetsUrl() +
          $config[0].service.servicesData.background_image.id +
          ')',
      }"
    >
    <BackgroundOverlay :status="$config[0].service.servicesData.background_overlay" :color="$config[0].service.servicesData.background_overlay_color" :opacity="$config[0].service.servicesData.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">
          {{ $config[0].service.servicesData.heading }}
        </h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="active">{{ $config[0].service.servicesData.heading }}</li>
        </ul>
      </div>
    </section>
    <section class="section bg-default section-lg">
      <div class="container">
        <div class="row row-90 row-xl-90 justify-content-center">
          <div
            class="col-md-6 col-lg-4"
            v-for="(service, i) in $config[0].service.services"
            :key="i"
          >
            <div class="box-services-simple h-100">
              <div class="box-services-simple-inner h-100">
                <div class="box-services-simple-icon">
                  <img
                    :src="getAssetsUrl() + service.icon"
                    alt=""
                    width="74"
                    height="74"
                  />
                </div>
                <h4 class="box-services-simple-title">
                  <nuxt-link :to="`/services/${service.slug}/`">{{
                    service.title
                  }}</nuxt-link>
                </h4>
                <p class="box-services-simple-text">
                  {{ service.short_description }}
                </p>
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
    return {}
  },
  head() {
    return this.getHeadData(this.$config[0].service.servicesData)
  },
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <!-- Services Box-->
  <section class="section bg-default section-lg sec-home-services">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-md-6 col-lg-4 mb-4"
          v-for="(service, i) in orderedServices"
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
                <nuxt-link :to="`/services/${service.slug}`">{{
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
  <!-- About Us-->
</template>

<script>
import _ from 'lodash'
export default {
  computed: {
    orderedServices() {
      return _.sortBy(this.$config[0].service.services, ['sort'])
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
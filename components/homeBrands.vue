<template>
  <section class="section bg-default section-xs">
    <div class="container">
      <no-ssr>
        <carousel
          :responsive="settings.responsive"
          class="brands-slider"
          :autoplay="true"
          :loop="true"
          :autoplayHoverPause="true"
          :nav="false"
        >
          <div class="" v-for="(brand, i) in brands">
            <a class="brands"
              ><img
                :src="getAssetsUrl() + brand.image"
                :alt="brand.name"
                width="156"
                height="45"
            /></a>
          </div>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  components: { Carousel: () => import('vue-owl-carousel') },
  props: {
    brands: [Array, Object],
  },
  data() {
    return {
      settings: {
        responsive: {
          0: { items: 1, nav: false },
          768: { items: 3, nav: false },
          992: { items: 4, nav: false },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
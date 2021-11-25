<template>
  <!-- Swiper Slider-->
  <section
    class="home-hero-slider section swiper-container swiper-slider swiper-slider-default background-overlay-container"
    data-loop="true"
    data-autoplay="5500"
    data-simulate-touch="false"
    data-slide-effect="fade"
  >
    
    <div class="swiper-wrapper text-center">
      <div
        class="swiper-slide swiper-slide-2 context-dark"
        v-for="(slider, i) in sliderData"
        :key="i"
      >
      <div class="slide-bg" :style="`background-image:url(${getAssetsUrl() + slider.image});`">
        
      </div>

         <!-- <BackgroundOverlay :status="" :color="" :opacity="" /> -->
        <div class="swiper-slide-caption section-lg">
          <div class="container home-slider-headings">
            <h1
              :class="slider.line_font_size"
              :style="slider.first_line_transparency ? 'opacity:0.6' : ''"
              style="overflow: hidden"
            >
              <span style="display: block">{{ slider.first_line }} </span>
            </h1>
            <h2
              :class="slider.line2_font_size"
              :style="slider.second_line_transparency ? 'opacity:0.6' : ''"
              style="overflow: hidden"
            >
              <span style="display: block">{{ slider.second_line }}</span>
            </h2>
            <h3
              :class="slider.line3_font_size"
              :style="slider.third_line_transparency ? 'opacity:0.6' : ''"
              style="overflow: hidden; margin-top: 15px"
            >
              <span style="display: block">{{ slider.third_line }}</span>
            </h3>
            <a
              @click.prevent="scrollTo(slider.cta_url)"
              class="button button-secondary"
              v-bind:class="slider.button_color"
              :href="slider.cta_url"
              >{{ slider.cta_title }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Swiper Pagination-->
    <div v-show="sliderData.length > 1" class="swiper-pagination"></div>
  </section>
</template>

<script>
export default {
  props: {
    sliderData: [Array, Object],
  },
  methods: {
    scrollTo(id) {
      $('body,html').animate(
        {
          scrollTop: $(id).offset().top,
        },
        1000
      )
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
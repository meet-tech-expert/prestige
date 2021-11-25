<template>
  <section
    class="section background-overlay-container"
    :style="`background-image: url(${bgImage}); background-position: center; background-repeat:no-repeat;`"
  >
     <BackgroundOverlay :status="$config[0].global.homePage.background_overlay" :color="$config[0].global.homePage.background_overlay_color" :opacity="$config[0].global.homePage.background_overlay_opacity" />
    <div class="section section-xl parallax-dark context-dark text-center">
      <div class="container position-relative">
        <div class="box-about">
          <h2>{{ title }}</h2>
          <div class="divider divider-secondary divider-green"></div>
          <p>
            {{ description }}
          </p>
          <a class="button button-secondary bg-green" :href="cta_url">{{
            cta_title
          }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    cta_title: String,
    cta_url: String,
    bgImage: String,
  },
}
</script>

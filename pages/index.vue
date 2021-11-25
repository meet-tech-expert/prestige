<template>
  <div>
    <HomeSlider :sliderData="$config[0].global.slider" />
    <HomeServices id="home-services" />
    <HomeAbout
      id="home-about"
      :title="$config[0].global.homePage.about_title"
      :description="$config[0].global.homePage.about_description"
      :cta_title="$config[0].global.homePage.about_cta_title"
      :cta_url="$config[0].global.homePage.about_cta_url"
      :bgImage="getAssetsUrl() + $config[0].global.homePage.about_bg_image.id"
    />
    <HomeProjects :projects="$config[0].global.projects" />
    <HomeFeatures id="home-features" :features="$config[0].global.features" />
    <HomeDownload
      id="home-quote"
      :image="getAssetsUrl() + $config[0].global.homePage.brochure_image.id"
    />
    <HomeNews
      id="home-news"
      :heading="$config[0].global.homePage.news_heading"
      :blogs="$config[0].global.news"
    />
    <HomeBrands id="home-brands" :brands="$config[0].global.brands" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      //news:  [],
    }
  },
  mounted() {},
  head() {
    return this.getHeadData(this.$config[0].global.homePage)
  },
}
</script>
<template>
  <div>
    <!-- Breadcrumbs-->
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      v-bind:style="{
        backgroundImage: 'url(' + tabsData[0].breadcrumbsBg + ')',
      }"
    >
    <BackgroundOverlay :status="$config[0].about.aboutData.background_overlay" :color="$config[0].about.aboutData.background_overlay_color" :opacity="$config[0].about.aboutData.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">
          {{ $config[0].about.aboutData.heading }}
        </h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="active">{{ $config[0].about.aboutData.heading }}</li>
        </ul>
      </div>
    </section>
    <!-- About Us-->
    <section class="section section-lg bg-default">
      <div class="container">
        <!-- Bootstrap tabs-->
        <div class="tabs-custom tabs-about tabs-corporate" id="tabs-2">
          <!-- Nav tabs-->
          <ul class="nav nav-tabs">
            <li
              class="nav-item"
              role="presentation"
              v-for="(tab, index) in tabsData"
              :key="index"
            >
              <a
                class="nav-link"
                :class="{ active: index == 0 }"
                :href="`#tabs-2-${index + 1}`"
                data-toggle="tab"
                :data-breadcrumbs-bg="tab.breadcrumbsBg"
                >{{ tab.title }}</a
              >
            </li>
          </ul>
          <!-- Tab panes-->
          <div class="tab-content">
            <history
              :history="$config[0].about.aboutData.our_history_description"
            ></history>
            <testimonials
              :testimonials="$config[0].about.testimonialsData"
            ></testimonials>
            <team :team="$config[0].about.teamsData"></team>
          </div>
        </div>
      </div>
    </section>
    <OurWork
      id="home-projects"
      :heading="$config[0].global.homePage.project_heading"
      :workData="$config[0].global.workData"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  computed: {
    tabsData() {
      return [
        {
          title: this.$config[0].about.aboutData.history_heading,
          breadcrumbsBg:
            this.getAssetsUrl() +
            this.$config[0].about.aboutData.history_bg_image.id,
        },
        {
          title: this.$config[0].about.aboutData.testimonials_heading,
          breadcrumbsBg:
            this.getAssetsUrl() +
            this.$config[0].about.aboutData.testimonial_bg_image.id,
        },
        {
          title: this.$config[0].about.aboutData.teams_heading,
          breadcrumbsBg:
            this.getAssetsUrl() +
            this.$config[0].about.aboutData.teams_bg_image.id,
        },
      ]
    },
  },
  head() {
    return this.getHeadData(this.$config[0].about.aboutData)
  },
}
</script>
<template>
  <section class="section bg-default section-lg">
    <div class="container">
      <div class="row row-20 justify-content-between align-items-end">
        <div class="col-lg-5">
          <h2 class="slick-main-title">Our Projects</h2>
        </div>
        <div class="col-lg-7">
          <ul
            class="slick-slider-filter list-inline-divided"
            id="slick-filter"
            data-filter-parent="#slick-slider-main"
          >
            <li><a class="active" href="#" data-value=".slide_all">All</a></li>
            <li v-for="cat in categories" :key="cat">
              <a
                href="#"
                :data-value="`.${slug(cat)}`"
                @click="refreshSlider()"
                >{{ cat }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="slick-slider-main-wrap">
        <!--data-fade='true'-->
        <div
          class="slick-slider slick-slider-main"
          id="slick-slider-main"
          data-filter="#slick-filter"
          data-arrows="true"
          data-fade="true"
          data-loop="false"
          data-fraction="#slick-fraction"
          data-dots="false"
          data-swipe="false"
          data-items="1"
          data-sm-items="1"
          data-md-items="1"
          data-lg-items="1"
          data-xl-items="1"
          data-custom-arrows="true"
          data-arrows-class=".custom-slick-arrows"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="slide_all"
          >
            <div class="row justify-content-between row-30">
              <div class="col-lg-4">
                <div class="project-info-wrap">
                  <h4>{{ project.title }}</h4>
                  <p>
                    {{ project.project_description }}
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div
                  class="slick-slider slick-slider-projects"
                  :id="`carousel-parent-${index + 1}`"
                  :data-for="`#child-carousel-${index + 1}`"
                  :data-child="`#child-carousel-${index + 1}`"
                  data-loop="false"
                  data-fade="true"
                  data-select="true"
                  data-draggable="true"
                  data-items="1"
                  data-sm-items="1"
                  data-md-items="1"
                  data-lg-items="1"
                  data-xl-items="1"
                >
                  <div
                    class="item"
                    v-for="(image, index) in project.gallery"
                    :key="index"
                  >
                    <img
                      :src="getAssetsUrl() + image.directus_files_id"
                      alt=""
                      width="668"
                      height="454"
                    />
                  </div>
                </div>
                <div
                  class="slick-slider slick-slider-projects-thumbs"
                  :id="`child-carousel-${index + 1}`"
                  data-arrows="true"
                  data-loop="false"
                  data-dots="false"
                  data-draggable="true"
                  data-swipe="true"
                  data-items="1"
                  :data-for="`#carousel-parent-${index + 1}`"
                  data-xs-items="2"
                  data-sm-items="3"
                  data-md-items="3"
                  data-lg-items="2"
                  data-select="true"
                  data-xl-items="3"
                  data-slide-to-scroll="1"
                >
                  <div
                    class="item"
                    v-for="(image, index) in project.gallery"
                    :key="index"
                  >
                    <img
                      :src="getAssetsUrl() + image.directus_files_id"
                      alt=""
                      width="171"
                      height="126"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(project, index) in filteredProjects"
            :key="index"
            :class="`${slug(project.catName)}`"
          >
            <div class="row justify-content-between row-30">
              <div class="col-lg-4">
                <div class="project-info-wrap">
                  <h4>{{ project.title }}</h4>
                  <p>
                    {{ project.project_description }}
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div
                  class="slick-slider slick-slider-projects"
                  :id="`carousel-parent-${index + 1}`"
                  :data-for="`#child-carousel-${index + 1}`"
                  :data-child="`#child-carousel-${index + 1}`"
                  data-loop="false"
                  data-fade="true"
                  data-select="true"
                  data-draggable="true"
                  data-items="1"
                  data-sm-items="1"
                  data-md-items="1"
                  data-lg-items="1"
                  data-xl-items="1"
                >
                  <div
                    class="item"
                    v-for="(image, index) in project.gallery"
                    :key="index"
                  >
                    <img
                      :src="getAssetsUrl() + image.directus_files_id"
                      alt=""
                      width="668"
                      height="454"
                    />
                  </div>
                </div>
                <div
                  class="slick-slider slick-slider-projects-thumbs"
                  :id="`child-carousel-${index + 1}`"
                  data-arrows="true"
                  data-loop="false"
                  data-dots="false"
                  data-draggable="true"
                  data-swipe="true"
                  data-items="1"
                  :data-for="`#carousel-parent-${index + 1}`"
                  data-xs-items="2"
                  data-sm-items="3"
                  data-md-items="3"
                  data-lg-items="2"
                  data-select="true"
                  data-xl-items="3"
                  data-slide-to-scroll="1"
                >
                  <div
                    class="item"
                    v-for="(image, index) in project.gallery"
                    :key="index"
                  >
                    <img
                      :src="getAssetsUrl() + image.directus_files_id"
                      alt=""
                      width="171"
                      height="126"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-slick-arrows"></div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    projects: [Array, Object],
  },
  data() {
    return {
      // projects: [
      //   {
      //     title: 'First Project',
      //     description:
      //       'Eastwood Center comprises two multi-storey buildings for office and retail use. At the heart of the square is a 1,000m2 landscaped area, overlooked by the office spaces.',
      //     area: '2500',
      //     terms: '35',
      //     terms_period: 'days',
      //     category: 'construction',
      //     gallery: [
      //       'images/projects-slide-04-668x454.jpg',
      //       'images/projects-slide-02-668x454.jpg',
      //       'images/projects-slide-01-668x454.jpg',
      //       'images/projects-slide-06-668x454.jpg',
      //     ],
      //   },
      //   {
      //     title: 'Second Project',
      //     description:
      //       'We built this Business Center in cooperation with Constructo, our longtime partner. Our team of designers and engineers developed the interior design and planning.',
      //     area: '3400',
      //     terms: '40',
      //     terms_period: 'days',
      //     category: 'REMODELING',
      //     gallery: [
      //       'images/projects-slide-06-668x454.jpg',
      //       'images/projects-slide-03-668x454.jpg',
      //       'images/projects-slide-04-668x454.jpg',
      //       'images/projects-slide-06-668x454.jpg',
      //     ],
      //   },
      //   {
      //     title: 'Third Project',
      //     description:
      //       'We built this Business Center in cooperation with Constructo, our longtime partner. Our team of designers and engineers developed the interior design and planning.',
      //     area: '1500',
      //     terms: '30',
      //     terms_period: 'days',
      //     category: 'REMODELING',
      //     gallery: [
      //       'images/projects-slide-05-668x454.jpg',
      //       'images/projects-slide-06-668x454.jpg',
      //       'images/projects-slide-02-668x454.jpg',
      //       'images/projects-slide-06-668x454.jpg',
      //     ],
      //   },
      // ],
    }
  },
  computed: {
    categories() {
      let cats = []
      this.projects.map((p) =>
        p.category.map((c) => cats.push(c.project_categories_id.name))
      )
      return _.uniq(cats)
    },

    filteredProjects() {
      let projects = []
      this.projects.map((p) => {
        p.category.map((c) => {
          projects.push({ ...p, catName: c.project_categories_id.name })
        })
      })

      return projects
    },
  },
  methods: {
    initSlider() {
      if (process.client) {
        var isNoviBuilder = false,
          plugins = {
            slick: $('.slick-slider'),
            lightGallery: $("[data-lightgallery='group']"),
            lightGalleryItem: $("[data-lightgallery='item']"),
            lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
          }
        if (plugins.slick.length) {
          for (var i = 0; i < plugins.slick.length; i++) {
            var $slickItem = $(plugins.slick[i])

            $slickItem.on('init', function (slick) {
              initLightGallery(
                $('[data-lightgallery="group-slick"]'),
                'lightGallery-in-carousel'
              )
              initLightGallery(
                $('[data-lightgallery="item-slick"]'),
                'lightGallery-in-carousel'
              )
            })

            $slickItem.slick({
              adaptiveHeight: false,
              slidesToScroll:
                parseInt($slickItem.attr('data-slide-to-scroll'), 10) || 1,
              asNavFor: $slickItem.attr('data-for') || false,
              dots: $slickItem.attr('data-dots') === 'true',
              infinite: isNoviBuilder
                ? false
                : $slickItem.attr('data-loop') === 'true',
              focusOnSelect: $slickItem.attr('data-select') === 'true',
              draggable: isNoviBuilder
                ? false
                : $slickItem.attr('data-draggable') === 'true',
              arrows: $slickItem.attr('data-arrows') === 'true',
              fade: $slickItem.attr('data-fade') === 'true',
              appendArrows: $slickItem.attr('data-arrows-class') || $slickItem,
              nextArrow:
                $slickItem.attr('data-custom-arrows') === 'true'
                  ? '<button type="button" class="slick-next">' + '</button>'
                  : '<button type="button" class="slick-next"></button>',
              prevArrow:
                $slickItem.attr('data-custom-arrows') === 'true'
                  ? '<button type="button" class="slick-prev">' + '</button>'
                  : '<button type="button" class="slick-prev"></button>',
              swipe: $slickItem.attr('data-swipe') === 'true',
              autoplay: $slickItem.attr('data-autoplay') === 'true',
              vertical: $slickItem.attr('data-vertical') === 'true',
              centerMode: $slickItem.attr('data-center-mode') === 'true',
              centerPadding: $slickItem.attr('data-center-padding')
                ? $slickItem.attr('data-center-padding')
                : '0.50',
              mobileFirst: true,
              responsive: [
                {
                  breakpoint: 0,
                  settings: {
                    slidesToShow:
                      parseInt($slickItem.attr('data-items'), 10) || 1,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow:
                      parseInt($slickItem.attr('data-sm-items'), 10) || 1,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow:
                      parseInt($slickItem.attr('data-md-items'), 10) || 1,
                  },
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow:
                      parseInt($slickItem.attr('data-lg-items'), 10) || 1,
                  },
                },
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow:
                      parseInt($slickItem.attr('data-xl-items'), 10) || 1,
                  },
                },
              ],
            })
          }

          // Filtering Slick Slider
          if (plugins.slick.attr('data-filter')) {
            var link = $(plugins.slick.attr('data-filter')).find('a')
            var slickSliderMain = $(
              $(plugins.slick.attr('data-filter')).attr('data-filter-parent')
            )

            link.on('click', function (event) {
              var filter = $(this).attr('data-value')

              event.preventDefault()
              link.removeClass('active')
              $(this).addClass('active')

              slickSliderMain.css({
                opacity: 0,
              })

              setTimeout(function () {
                slickSliderMain.slick('slickUnfilter')
                slickSliderMain.slick('slickFilter', filter)
                slickSliderMain.slick('slickGoTo', 0)
                slickSliderMain.find(plugins.slick).slick('slickGoTo', 0)

                slickSliderMain.css({
                  opacity: 1,
                })

                slickSliderMain.trigger('aftereChange')
              }, 200)
            })
          }
        }

        // lightGallery
        if (plugins.lightGallery.length) {
          for (var i = 0; i < plugins.lightGallery.length; i++) {
            initLightGallery(plugins.lightGallery[i])
          }
        }

        // lightGallery item
        if (plugins.lightGalleryItem.length) {
          // Filter carousel items
          var notCarouselItems = []

          for (var z = 0; z < plugins.lightGalleryItem.length; z++) {
            if (
              !$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length &&
              !$(plugins.lightGalleryItem[z]).parents('.swiper-slider')
                .length &&
              !$(plugins.lightGalleryItem[z]).parents('.slick-slider').length
            ) {
              notCarouselItems.push(plugins.lightGalleryItem[z])
            }
          }

          plugins.lightGalleryItem = notCarouselItems

          for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
            initLightGalleryItem(plugins.lightGalleryItem[i])
          }
        }

        // Dynamic lightGallery
        if (plugins.lightDynamicGalleryItem.length) {
          for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
            initDynamicLightGallery(plugins.lightDynamicGalleryItem[i])
          }
        }
        function initLightGallery(itemsToInit, addClass) {
          if (!isNoviBuilder) {
            $(itemsToInit).lightGallery({
              thumbnail: $(itemsToInit).attr('data-lg-thumbnail') !== 'false',
              selector: "[data-lightgallery='item']",
              zoom: $(itemsToInit).attr('data-zoom') === 'true',
              autoplay: $(itemsToInit).attr('data-lg-autoplay') === 'true',
              pause:
                parseInt($(itemsToInit).attr('data-lg-autoplay-delay')) || 5000,
              addClass: addClass,
              mode: $(itemsToInit).attr('data-lg-animation') || 'lg-slide',
              loop: $(itemsToInit).attr('data-lg-loop') !== 'false',
            })
          }
        }

        function initDynamicLightGallery(itemsToInit, addClass) {
          if (!isNoviBuilder) {
            $(itemsToInit).on('click', function () {
              $(itemsToInit).lightGallery({
                thumbnail: $(itemsToInit).attr('data-lg-thumbnail') !== 'false',
                selector: "[data-lightgallery='item']",
                autoplay: $(itemsToInit).attr('data-lg-autoplay') === 'true',
                pause:
                  parseInt($(itemsToInit).attr('data-lg-autoplay-delay')) ||
                  5000,
                addClass: addClass,
                mode: $(itemsToInit).attr('data-lg-animation') || 'lg-slide',
                loop: $(itemsToInit).attr('data-lg-loop') !== 'false',
                dynamic: true,
                dynamicEl:
                  JSON.parse($(itemsToInit).attr('data-lg-dynamic-elements')) ||
                  [],
              })
            })
          }
        }

        function initLightGalleryItem(itemToInit, addClass) {
          if (!isNoviBuilder) {
            $(itemToInit).lightGallery({
              selector: 'this',
              addClass: addClass,
              counter: false,
              youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0,
              },
              vimeoPlayerParams: {
                byline: 0,
                portrait: 0,
              },
            })
          }
        }
      }
    },
    refreshSlider() {
      console.log('refresh')

      setTimeout(() => {
        $('.slick-slider').slick('refresh')
      }, 200)
    },
  },

  mounted() {
    this.initSlider()
    setTimeout(() => {
      $('.slick-slider').slick('refresh')
    }, 200)
    setTimeout(() => {
      $('a[data-value=".slide_all"]').click()
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
</style>
<template>
  <section class="section bg-default section-lg">
    <div class="container">
      <div class="row row-20 justify-content-center align-items-end">
        <h2 class="slick-main-title text-center">{{ heading }}</h2>
      </div>
      <div class="slick-slider-main-wrap">
        <div class="mb-3">
          <ul class="slick-slider-filter list-inline-divided text-center">
            <li>
              <a
                :class="{ active: 'all' == currentAlbum }"
                href="#"
                @click.prevent="setAlbum('all')"
                >All</a
              >
            </li>
            <li v-for="(album, index) in workData" :key="index">
              <a
                :class="{ active: album.title == currentAlbum }"
                href="#"
                @click.prevent="setAlbum(album.title)"
                >{{ album.title }}</a
              >
            </li>
          </ul>
        </div>

        <!--data-fade='true'-->

        <div class="row justify-content-between row-30" v-if="filteredAlbums">
          <div class="col-lg-8 mx-auto">
            <div
              class="slick-slider slick-slider-projects"
              :id="`carousel-parent-1`"
              :data-for="`#child-carousel-1`"
              :data-child="`#child-carousel-1`"
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
                v-for="(image, index) in filteredAlbums"
                :key="index"
              >
                <div class="item-wrapper">
                  <div
                    class="item-img"
                    :style="`background-image:url(${
                      getAssetsUrl() + image.directus_files_id
                    });`"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="slick-slider slick-slider-projects-thumbs"
              :id="`child-carousel-1`"
              data-arrows="true"
              data-loop="false"
              data-dots="false"
              data-draggable="true"
              data-swipe="true"
              data-items="1"
              :data-for="`#carousel-parent-1`"
              data-xs-items="2"
              data-sm-items="3"
              data-md-items="3"
              data-lg-items="4"
              data-select="true"
              data-xl-items="5"
              data-slide-to-scroll="1"
            >
              <div
                class="item"
                v-for="(image, index) in filteredAlbums"
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
  </section>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    heading: String,
    workData: [Array, Object],
  },
  data() {
    return {
      currentProject: null,
      currentAlbum: null,
      updating: true,
      filteredAlbums: null,
    }
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
    setAlbum(album) {
      this.filteredAlbums = null
      this.currentAlbum = album
      if (album == 'all') {
        let gallery = []
        this.workData.map((p) => p.gallery.map((img) => gallery.push(img)))
        setTimeout(() => {
          this.filteredAlbums = gallery
        }, 0)
      } else {
        let gallery = []
        this.workData
          .filter((p) => p.title == this.currentAlbum)
          .map((p) => p.gallery.map((img) => gallery.push(img)))
        setTimeout(() => {
          this.filteredAlbums = gallery
        }, 0)
      }
      setTimeout(() => {
        this.initSlider()
      }, 0)
    },
  },
  mounted() {
    this.setAlbum('all')
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
</style>
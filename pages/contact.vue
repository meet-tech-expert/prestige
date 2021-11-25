<template>
  <div>
    <section
      class="breadcrumbs-custom bg-image context-dark background-overlay-container"
      v-bind:style="{
        backgroundImage:
          'url(' +
          getAssetsUrl() +
          $config[0].contact.background_image.id +
          ')',
      }"
    >
    <BackgroundOverlay :status="$config[0].contact.background_overlay" :color="$config[0].contact.background_overlay_color" :opacity="$config[0].contact.background_overlay_opacity" />
      <div class="container">
        <h2 class="breadcrumbs-custom-title">
          {{ $config[0].contact.heading }}
        </h2>
        <ul class="breadcrumbs-custom-path">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="active">{{ $config[0].contact.heading }}</li>
        </ul>
      </div>
    </section>
    <!-- Mailform-->
    <section class="section section-lg bg-default">
      <div class="container">
        <div class="row align-items-md-center row-30">
          <div class="col-lg-8" v-if="showForm">
            <div class="block-md text-center">
              <h3>{{ $config[0].contact.form_heading }}</h3>
              <p>
                {{ $config[0].contact.form_description }}
              </p>
              <ContactForm @sent="showForm = false" />
            </div>
          </div>
          <div class="col-lg-8" v-if="!showForm">
            <h2 class="h2">
              Thank You!<br />
              We'll be in touch soon.
            </h2>
            <span class="btn-mute"> Message has been sent </span>
          </div>
          <div class="col-lg-4">
            <div class="contact-box-wrap">
              <div class="contact-box">
                <div class="contact-box-item">
                  <p class="contact-box-title">Get social</p>
                  <ul class="list-inline">
                    <li v-if="$config[0].footer.homeadvisor_url">
                      <a
                        target="_blank"
                        class="
                          icon icon-xl icon-gray-500
                          novi-icon
                          homeadvisor_url
                        "
                        :href="$config[0].footer.homeadvisor_url"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 743 583"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="#9b9b9b">
                            <path
                              fill="#9b9b9b"
                              opacity="1.00"
                              d=" M 246.65 0.00 L 498.51 0.00 L 498.20 1.39 L 499.46 1.35 C 499.06 3.18 502.12 2.30 501.58 4.40 L 502.49 4.60 C 566.58 68.82 630.80 132.91 694.91 197.08 C 709.49 211.81 724.46 226.28 738.81 241.23 C 740.59 241.93 740.79 244.21 743.00 244.37 L 743.00 244.65 C 659.42 244.67 575.83 244.68 492.25 244.64 C 463.04 214.89 433.30 185.61 403.89 156.04 C 363.93 116.08 323.95 76.13 284.00 36.15 C 214.01 106.18 143.96 176.17 73.97 246.21 C 49.52 246.53 25.02 246.20 0.55 246.37 L 0.00 246.62 L 0.00 245.34 L 0.95 246.23 C 1.47 244.43 3.33 243.75 4.37 242.34 C 85.11 161.55 165.95 80.83 246.65 0.00 Z"
                            />
                            <path
                              fill="#9b9b9b"
                              opacity="1.00"
                              d=" M 278.42 92.37 C 278.87 92.39 279.77 92.44 280.22 92.47 L 280.61 93.54 C 344.11 156.97 407.58 220.51 471.07 283.98 C 472.26 285.46 474.10 286.36 474.84 288.19 C 476.87 288.50 477.34 289.77 476.24 292.00 L 477.55 290.38 C 523.50 290.48 569.46 290.44 615.42 290.40 C 615.11 311.94 615.37 333.49 615.29 355.03 C 615.40 372.59 615.05 390.17 615.47 407.71 L 614.34 407.16 C 614.82 409.94 614.42 412.77 614.49 415.59 L 613.36 415.20 C 613.24 416.45 614.48 419.40 612.38 419.55 C 613.00 421.25 612.62 422.26 611.24 422.57 C 611.37 423.07 611.64 424.07 611.78 424.56 L 610.23 424.31 C 610.39 424.88 610.69 426.00 610.84 426.56 L 609.27 426.26 C 609.40 426.81 609.67 427.90 609.81 428.45 L 608.25 428.12 L 608.98 429.66 L 607.24 429.34 C 607.37 429.89 607.62 430.99 607.75 431.54 L 606.28 431.28 C 607.08 432.81 604.81 435.27 603.26 434.37 C 603.36 434.92 603.56 436.04 603.66 436.60 L 602.18 436.32 L 602.55 437.92 L 601.54 437.60 C 598.18 432.22 602.96 441.82 598.42 439.40 C 598.74 441.08 598.02 441.76 596.25 441.43 L 596.45 442.77 C 595.89 442.63 594.75 442.33 594.19 442.18 L 594.90 443.60 C 594.43 443.82 593.49 444.25 593.02 444.47 C 591.05 443.88 590.66 446.83 588.41 445.30 L 588.56 446.76 C 587.99 446.61 586.84 446.32 586.27 446.18 L 586.67 447.52 C 585.80 447.49 584.07 447.42 583.20 447.39 L 583.56 448.39 C 581.79 448.47 579.95 448.80 578.23 448.26 L 578.66 449.43 C 551.89 449.62 525.08 449.72 498.32 449.38 C 498.65 455.14 497.91 460.93 498.46 466.69 L 497.28 466.21 C 498.19 482.33 496.92 498.55 497.45 514.69 L 496.29 514.20 C 497.17 530.33 495.94 546.55 496.45 562.70 L 495.30 562.20 C 495.92 569.09 495.37 576.07 495.60 583.00 L 495.29 583.00 C 493.87 580.13 490.97 578.45 488.97 576.03 C 487.69 574.31 484.60 573.95 486.85 570.93 C 486.25 571.42 485.05 572.40 484.45 572.90 L 484.80 571.22 L 483.28 571.78 L 483.83 570.19 L 482.24 570.75 L 482.83 569.16 L 481.23 569.75 L 481.85 568.17 L 480.24 568.77 L 480.85 567.19 L 479.30 567.73 L 479.71 566.21 C 476.10 568.69 479.22 561.98 476.34 564.88 L 476.66 563.34 C 474.84 563.74 474.20 563.05 474.72 561.28 L 473.49 561.55 C 469.45 557.83 465.95 553.30 461.49 550.17 C 461.58 549.36 461.77 547.76 461.86 546.96 C 461.26 547.44 460.05 548.40 459.44 548.87 L 459.79 547.21 L 458.29 547.78 L 458.82 546.19 L 457.24 546.74 L 457.84 545.16 L 456.23 545.76 L 456.86 544.17 L 455.25 544.79 L 455.86 543.22 L 454.28 543.70 L 454.69 542.15 C 452.89 542.83 452.23 542.21 452.72 540.30 C 451.26 541.06 448.83 538.75 449.75 537.28 L 448.45 537.52 C 444.49 533.49 440.24 529.29 436.34 525.53 L 436.81 523.01 C 436.22 523.48 435.03 524.40 434.43 524.86 L 434.78 523.20 L 433.29 523.79 L 433.83 522.19 L 432.26 522.76 L 432.84 521.17 L 431.24 521.77 L 431.87 520.18 L 430.25 520.79 L 430.86 519.23 L 429.28 519.71 L 429.71 518.17 L 428.29 518.54 C 428.10 518.28 427.72 517.76 427.53 517.50 L 427.77 516.28 L 426.42 516.81 L 426.58 515.45 C 424.80 515.65 424.18 514.92 424.74 513.27 L 423.51 513.56 C 419.85 509.86 416.13 506.23 412.47 502.55 L 411.14 502.09 C 411.59 501.62 412.50 500.69 412.95 500.22 C 412.07 500.37 410.32 500.66 409.44 500.80 L 409.80 499.25 L 408.28 499.76 L 408.83 498.18 L 407.24 498.76 L 407.84 497.17 L 406.24 497.77 L 406.86 496.18 L 405.26 496.80 L 405.86 495.23 L 404.28 495.70 L 404.70 494.16 C 401.35 496.71 403.99 490.38 401.47 492.76 L 401.46 491.57 C 399.75 491.54 399.18 490.77 399.77 489.27 L 398.50 489.56 C 394.46 485.61 390.49 481.30 386.32 477.68 L 386.82 474.93 C 386.23 475.42 385.04 476.39 384.44 476.88 L 384.78 475.20 L 383.27 475.78 L 383.84 474.18 L 382.26 474.77 L 382.84 473.18 L 381.25 473.77 L 381.86 472.18 L 380.25 472.78 L 380.86 471.21 L 379.30 471.73 L 379.71 470.20 C 376.17 472.69 379.16 466.06 376.40 468.87 L 376.63 467.40 C 374.81 467.69 374.19 466.99 374.76 465.30 L 373.48 465.54 C 369.44 461.81 365.94 457.28 361.47 454.16 C 361.56 453.37 361.75 451.79 361.84 450.99 C 361.25 451.47 360.06 452.41 359.46 452.89 L 359.75 451.21 L 358.26 451.76 L 358.83 450.22 L 357.21 450.73 L 357.89 449.38 C 348.59 449.80 339.25 449.45 329.93 449.57 C 276.73 449.47 223.53 449.76 170.34 449.42 L 170.78 448.27 C 168.68 448.87 166.48 448.43 164.34 448.35 L 164.87 446.73 C 163.34 448.50 158.59 447.85 161.15 443.76 L 160.34 446.80 C 159.83 446.72 158.81 446.56 158.30 446.48 L 158.85 445.38 C 157.99 445.41 156.27 445.46 155.41 445.48 L 155.64 444.14 C 155.11 444.33 154.06 444.72 153.53 444.91 L 153.65 443.22 C 153.11 443.38 152.04 443.71 151.50 443.87 L 151.70 442.28 C 151.17 442.39 150.10 442.62 149.56 442.74 L 149.73 441.35 C 149.15 441.13 147.98 440.67 147.40 440.44 L 146.07 440.54 L 146.84 439.11 L 145.08 439.69 C 144.92 439.36 144.61 438.71 144.45 438.39 L 143.29 438.51 L 143.77 437.22 L 142.45 437.53 C 139.47 434.50 136.38 431.57 133.47 428.49 L 133.60 427.18 L 131.99 427.50 C 132.53 426.82 133.62 425.45 134.17 424.77 C 130.43 428.11 131.34 423.49 129.35 422.92 L 129.77 421.25 L 128.25 421.67 C 128.36 420.78 128.57 418.99 128.67 418.09 L 127.06 419.94 L 127.33 418.64 L 128.83 417.16 L 126.29 417.80 C 126.38 417.17 126.57 415.92 126.66 415.30 L 125.11 415.49 C 125.29 414.95 125.65 413.88 125.82 413.34 L 124.50 413.57 C 124.54 412.72 124.63 411.02 124.67 410.18 L 123.46 410.68 C 123.50 409.81 123.57 408.07 123.60 407.20 L 122.63 407.56 C 122.44 406.22 122.43 404.88 122.59 403.55 C 120.82 402.90 121.88 400.39 121.46 398.98 C 121.39 349.11 121.46 299.24 121.43 249.36 C 124.26 246.89 126.78 244.09 129.48 241.48 C 179.10 191.75 228.95 142.24 278.42 92.37 Z"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li v-if="$config[0].footer.facebook_url">
                      <a
                        target="_blank"
                        class="
                          icon icon-xl icon-gray-500
                          fa-facebook-f
                          novi-icon
                        "
                        :href="$config[0].footer.facebook_url"
                      ></a>
                    </li>
                    <li v-if="$config[0].footer.twitter_url">
                      <a
                        target="_blank"
                        class="icon icon-xl icon-gray-500 fa-twitter novi-icon"
                        :href="$config[0].footer.twitter_url"
                      ></a>
                    </li>
                    <li v-if="$config[0].footer.google_url">
                      <a
                        target="_blank"
                        class="icon icon-xl icon-gray-500 fa-google novi-icon"
                        :href="$config[0].footer.google_url"
                      ></a>
                    </li>
                    <li v-if="$config[0].footer.instagrm_url">
                      <a
                        target="_blank"
                        class="
                          icon icon-lg icon-gray-500
                          fa-instagram
                          novi-icon
                        "
                        :href="$config[0].footer.instagrm_url"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="contact-box-item">
                  <p class="contact-box-title">Phone</p>
                  <div class="link-inline">
                    <span
                      class="
                        icon icon-xl icon-primary-light
                        material-icons-local_phone
                        novi-icon
                        text-purp
                      "
                    ></span
                    ><a :href="'tel:' + $config[0].footer.phone_text">{{
                      $config[0].footer.phone_text
                    }}</a>
                  </div>
                </div>
                <div class="contact-box-item">
                  <p class="contact-box-title">E-mail</p>
                  <div class="link-inline">
                    <span
                      class="
                        icon icon-xl icon-primary-light
                        mdi-email-outline
                        novi-icon
                        text-purp
                      "
                    ></span
                    ><a :href="'mailto:' + $config[0].footer.email_text">{{
                      $config[0].footer.email_text
                    }}</a>
                  </div>
                </div>
                <div class="contact-box-item">
                  <p class="contact-box-title">Address</p>
                  <div class="link-inline link-inline-top">
                    <span
                      class="
                        icon icon-xl icon-primary-light
                        material-icons-location_on
                        novi-icon
                        text-purp
                      "
                    ></span
                    ><a
                      target="_blank"
                      :href="$config[0].footer.address_link"
                      >{{ $config[0].footer.address_text }}</a
                    >
                  </div>
                </div>
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
    return {
      showForm: true,
    }
  },
  head() {
    return this.getHeadData(this.$config[0].contact)
  },
}
</script>
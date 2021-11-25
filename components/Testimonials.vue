<template>
  <div class="tab-pane fade pr-lg-5 mr-lg-5" id="tabs-2-2">
    <h3>Reviews</h3>
    <div class="reviews-top mt-4">
      <p>
        We're one of the highest rated companies on Home Advisor. Please check
        some of our reviews below or click on our home advisor badges to see our
        profile there.
      </p>
      <div class="reviews-top-grid mt-4">
        <div>
          <h3><strong>100%</strong> <span>Recommended</span></h3>
        </div>
        <div>
          <a target="_blank" :href="$config[0].footer.homeadvisor_url"
            ><img src="uploads/reviews-icons.png" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="testimonial-wrap">
      <div
        class="testimonial"
        v-for="(item, index) in $config[0].about.reviewsData"
        :key="index"
      >
        <h6 class="text-green">
          {{ item.taskDescription }}
        </h6>
        <span class="mt-1 d-block">
          {{ new Date(item.statusDate) | dateFormat('MMMM DD, YYYY') }}
        </span>
        <div class="d-flex align-items-center">
          <svg
            v-for="i in rating(item.consumerOverallScore)"
            id="color"
            enable-background="new 0 0 24 24"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z"
              fill="#ffc107"
            />
          </svg>
          <span class="ml-2">{{ item.consumerOverallScore }}/5</span>
        </div>
        <p>
          {{ item.comment }}
        </p>
        <ul class="list-inline-divided">
          <li>
            <span class="testimonial-name">{{ item.consumerDisplayName }}</span>
          </li>
          <li>
            <span class="testimonial-office text-green">
              {{ item.location }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    rating(rate) {
      return Math.floor(rate)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
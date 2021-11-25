<template>
  <div>
    <div class="preloader">
      <!-- <div class="preloader-body">
        <div class="cssload-container">
          <div class="cssload-speeding-wheel"></div>
        </div>
        <p>Loading...</p>
      </div> -->
    </div>
    <div class="page">
      <section
        class="section breadcrumbs-custom bg-image context-dark"
        style="background-image: url(images/bg-image-12-1920x595.jpg)"
      >
        <div class="container">
          <h1 class="breadcrumbs-custom-title">404</h1>
        </div>
      </section>
      <section class="section section-lg bg-default text-center">
        <div class="container">
          <div class="error-404">
            <h3>Sorry, but the page was not found</h3>
            <h5>
              You may have mistyped the address or the page may have moved
            </h5>
            <ul class="error-404-buttons">
              <li>
                <nuxt-link class="button button-less button-gray-700" to="/"
                  >Go to home page</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  class="button button-secondary-light bg-green"
                  to="/contact"
                  >Contact us</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="snackbars" id="form-output-global"></div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
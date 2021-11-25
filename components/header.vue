<template>
  <!-- Header Default-->
  <header class="page-header">
    <!-- RD Navbar-->
    <div class="rd-navbar-wrap">
      <nav
        class="rd-navbar rd-navbar-classic"
        data-layout="rd-navbar-fixed"
        data-sm-layout="rd-navbar-fixed"
        data-md-layout="rd-navbar-fixed"
        data-md-device-layout="rd-navbar-fixed"
        data-lg-layout="rd-navbar-fixed"
        data-lg-device-layout="rd-navbar-fixed"
        data-xl-layout="rd-navbar-static"
        data-xl-device-layout="rd-navbar-static"
        data-lg-stick-up-offset="46px"
        data-xl-stick-up-offset="46px"
        data-xxl-stick-up-offset="46px"
        data-lg-stick-up="true"
        data-xl-stick-up="true"
        data-xxl-stick-up="true"
      >
        <div class="rd-navbar-main-outer">
          <div class="rd-navbar-main">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->

              <!-- RD Navbar Brand-->
              <div class="rd-navbar-brand">
                <!--Brand--><nuxt-link class="brand brand-logo" to="/"
                  ><img
                    src="uploads/logo-pentagon.svg"
                    alt=""
                    width="282"
                    height="141" /></nuxt-link
                ><nuxt-link class="brand brand-logo-stuck d-xl-none" to="/"
                  ><img src="uploads/Logo.svg" alt="" width="115" height="62"
                /></nuxt-link>
                <div class="rd-navbar-brand-triangle"></div>
              </div>
              <button
                class="rd-navbar-toggle"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              >
                <span></span>
              </button>
            </div>
            <div class="rd-navbar-main-element">
              <!-- RD Navbar Nav-->
              <Nav />

              <!-- RD Navbar Search-->
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.rd-navbar-panel {
  justify-content: space-between;
}
</style>
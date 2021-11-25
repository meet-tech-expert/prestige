<template>
  <div class="post-single-sidebar-item">
    <div class="post-single-newsletter">
      <h5>Newsletter</h5>
      <p>Enter your e-mail to get the latest news.</p>
      <form
        class="rd-form rd-mailform"
        data-form-output="form-output-global"
        data-form-type="subscribe"
        method="post"
        action="bat/rd-mailform.php"
      >
        <div class="form-wrap">
          <input
            class="form-input"
            id="subscribe-form-email"
            type="email"
            name="email"
            data-constraints="@Email @Required"
          />
          <label class="form-label" for="subscribe-form-email"
            >Your e-mail address...</label
          >
        </div>
        <div class="form-button">
          <button class="button button-block button-gray-600" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
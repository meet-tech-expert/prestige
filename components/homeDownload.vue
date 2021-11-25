<template>
  <section class="section bg-default section-lg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="text-center">
            <h3>Get A Quote</h3>
          </div>
          <div class="mt-3">
            <div v-if="showForm">
              <ContactForm @sent="showForm = false" />
            </div>
            <div v-if="!showForm" class="py-5 my-5">
              <h4 class="h4">
                Thank You!<br />
                We'll be in touch soon.
              </h4>
              <span class="btn-mute"> Message has been sent </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showForm: true,
    }
  },
  props: {
    image: String,
  },
}
</script>

<style lang="scss" scoped>
</style>
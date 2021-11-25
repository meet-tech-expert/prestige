<template>
  <form
    class="rd-form rd-mailform"
    data-form-output="form-output-global"
    data-form-type="contact"
    method="post"
    action="#"
    @submit.prevent="submit"
  >
    <div class="row row-20">
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="contact-name">First Name</label>
          <input
            class="form-input"
            id="contact-name"
            type="text"
            name="first_name"
            v-model.trim="$v.first_name.$model"
            :class="{ warning: $v.first_name.$error }"
          />
          <span
            class="form-warning"
            v-if="!$v.first_name.required && $v.first_name.$error"
            >First name is required</span
          >
          <span class="form-warning" v-if="!$v.first_name.minLength"
            >First name must have at least
            {{ $v.first_name.$params.minLength.min }} letters.</span
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="contact-name">Last Name</label>

          <input
            class="form-input"
            id="contact-name"
            type="text"
            name="last_name"
            v-model.trim="$v.last_name.$model"
            :class="{ warning: $v.last_name.$error }"
          />
          <span
            class="form-warning"
            v-if="!$v.last_name.required && $v.last_name.$error"
            >Last name is required</span
          >
          <span class="form-warning" v-if="!$v.last_name.minLength"
            >Last name must have at least
            {{ $v.last_name.$params.minLength.min }} letters.</span
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="contact-phone">Phone</label>
          <input
            class="form-input"
            id="contact-phone"
            type="text"
            name="phone"
            v-mask="'(###) ### ####'"
            v-model.trim="$v.phone.$model"
            :class="{ warning: $v.phone.$error }"
          />
          <span
            class="form-warning"
            v-if="!$v.phone.required && $v.phone.$error"
            >Phone is required</span
          >
          <span class="form-warning" v-if="!$v.phone.phoneFormat"
            >10 digits. No special characters. No Country Code.</span
          >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="contact-email">E-mail</label>
          <input
            class="form-input"
            id="contact-email"
            type="email"
            name="email"
            v-model.trim="$v.email.$model"
            :class="{ warning: $v.email.$error }"
          />
          <span
            class="form-warning"
            v-if="!$v.email.required && $v.email.$error"
            >Email is required</span
          >
          <span class="form-warning" v-if="!$v.email.email">Invalid email</span>
        </div>
      </div>
      <div class="col-12">
        <div class="form-wrap">
          <label for="contact-message">Your Message</label>
          <textarea
            class="form-input"
            id="contact-message"
            name="message"
            v-model.trim="$v.message.$model"
            :class="{ warning: $v.message.$error }"
          ></textarea>
          <span
            class="form-warning"
            v-if="!$v.message.required && $v.message.$error"
            >Message is required</span
          >
        </div>
      </div>

      <div class="col-md-6">
        <button
          class="button button-block button-secondary-light bg-green"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
Vue.use(Vuelidate)
Vue.use(VueMask)
import {
  required,
  email,
  minLength,
  numeric,
  helpers,
} from 'vuelidate/lib/validators'
const phoneFormat = helpers.regex(
  'phoneFormat',
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
)
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
      phone: '',
      submitStatus: null,
    }
  },
  props: {
    showForm: {
      type: Boolean,
      default: true,
    },
  },
  validations: {
    first_name: {
      required,
      minLength: minLength(2),
    },
    last_name: {
      required,
      minLength: minLength(2),
    },
    phone: {
      required,
      phoneFormat,
    },
    message: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    async submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        console.log('ERROR')
      } else {
        this.submitStatus = 'PENDING'
        console.log('form is validated')
        let payload = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }
        let form = await this.postItem('contacts', payload)
        console.log(form)
        if (form) {
          this.submitStatus = 'OK'
          this.$emit('sent')
          this.showNotification('Sent successfully', 'success')
        } else {
          this.submitStatus = null
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
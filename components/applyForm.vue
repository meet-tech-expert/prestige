<template>
  <form
    class="rd-form rd-mailform"
    data-form-output="form-output-global"
    data-form-type="contact"
    method="post"
    action="#"
    @submit.prevent="submit"
  >
    <h3 class="font-weight-medium">Apply Now</h3>
    <div class="row row-20">
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="first_name">First Name *</label>
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
          <label for="last_name">Last Name *</label>

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
          <label for="contact-email">E-mail *</label>

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
      <div class="col-md-6">
        <div class="form-wrap">
          <label for="contact-phone">Phone *</label>

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
      <div class="col-12">
        <label for="">Position applying for? *</label>

        <div class="form-wrap select-dropdown">
          <select
            class="form-input"
            id="contact-position"
            name="position"
            v-model.trim="$v.position.$model"
            :class="{ warning: $v.position.$error }"
            @change="handlePosition($event)"
          >
            <option selected="selected" value="">Choose an option</option>
            <option
              :value="job.id"
              v-for="(job, index) in $config[0].career.jobs"
            >
              {{ job.title }}
            </option>
          </select>
          <span
            class="form-warning"
            v-if="!$v.position.required && $v.position.$error"
            >This field is required</span
          >
        </div>
      </div>
      <div class="col-12">
        <div class="form-wrap">
          <label for="contact-message">Tell us about yourself? </label>
          <textarea
            class="form-input"
            id="contact-message"
            name="message"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="col-12">
        <div class="form-wrap">
          <label class="mb-2" for="contact-resume">Upload Resume </label>
          <input
            type="file"
            class="form-input"
            id="contact-resume"
            name="resume"
            ref="resume"
            v-on:change="handleFileUpload()"
          />
        </div>
      </div>

      <div class="col-md-6">
        <button
          class="button button-block button-secondary-light bg-green"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
        >
          {{ submitMessage }}
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
      position: '',
      job_title: '',
      message: '',
      phone: '',
      submitStatus: null,
      resume: null,
      submitMessage: 'Submit Application',
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
    position: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    async handleFileUpload() {
      this.resume = this.$refs.resume.files[0]
      console.log(this.resume)
    },
    handlePosition(e) {
      //console.log(e.target.options.selectedIndex)
      if (e.target.options.selectedIndex != '0') {
        //console.log(e.target.options[e.target.options.selectedIndex].innerText)
        this.job_title =
          e.target.options[e.target.options.selectedIndex].innerText
      } else {
        this.job_title = ''
      }
    },
    async submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        console.log('ERROR')
      } else {
        this.submitStatus = 'PENDING'
        this.submitMessage = 'Please wait...'
        console.log('form is validated')
        let payload = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          message: this.message,
          position: this.position,
          job_title: this.job_title,
        }
        if (this.resume) {
          let formData = new FormData()
          formData.append('resume', this.resume)
          let file = await this.uploadFiles(formData)
          if (file) {
            payload.resume = file.id
          } else {
            this.submitMessage = 'Submit Application'
            this.submitStatus = null
            this.showNotification(
              'There was a problem uploading your resume!',
              'error'
            )
            return false
          }
        }

        let form = await this.postItem('job_applications', payload)
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
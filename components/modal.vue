<template>
  <div>
    <vue-modaltor :visible="open" @hide="open = false" :default-width="'80%'">
      <template #header>
        <!--    add your custom header     -->
        <div>
          <i class="close-icon" @click.prevent="closeModal">x</i>
        </div>
      </template>
      <template #body>
        <div v-html="content"></div>
      </template>
    </vue-modaltor>
  </div>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    content: String,
  },
  methods: {
    closeModal() {
      this.$emit('handleModal')
    },
  },
}
</script>
<style lang="scss">
.modaltor .modaltor__header i.close-icon {
  position: absolute;
  top: 40px;
  right: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 20px;
}
.modaltor__content {
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 24px;
  padding-bottom: 24px;
  line-height: 1.5;
  margin-top: 15px;
}
</style>
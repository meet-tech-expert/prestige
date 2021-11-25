<template>
  <div class="tab-pane fade" id="tabs-2-4">
    <h3>Community Involvement</h3>
    <div class="community-wrap">
      <div class="community" v-for="(item, index) in items" :key="index">
        <div class="community-inner">
          <div class="community-image">
            <img :src="getAssetsUrl()+item.image" alt="" width="364" height="341" />
          </div>
          <div class="community-content">
            <h4>
              <a :href="item.url">{{ item.name }}</a>
            </h4>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
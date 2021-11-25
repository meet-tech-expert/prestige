<template>
  <div class="tab-pane fade" id="tabs-2-3">
    <h3>Our Team</h3>
    <div class="team-wrap">
      <div class="team" v-for="(item, index) in team" :key="index">
        <div class="team-inner">
          <div class="team-image">
            <div
              :style="`background-image:url(${getAssetsUrl() + item.image});`"
            ></div>
          </div>
          <div class="team-content">
            <h5>{{ item.name }}</h5>
            <div class="team-office">
              <span>{{ item.profile }}</span>
            </div>
            <div class="team-divider divider-purp"></div>
            <div
              class="team-description text-muted"
              v-html="item.description"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
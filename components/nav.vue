<template>
  <div class="rd-navbar-nav-wrap">
    <ul class="rd-navbar-nav rd-navbar-nav-left">
      <li class="rd-nav-item" v-for="(menu, i) in $config[0].header.left_menu">
        <nuxt-link class="rd-nav-link" :to="menu.link">{{menu.text}}</nuxt-link>
      </li>
    </ul>
    <ul class="rd-navbar-nav rd-navbar-nav-right">
      <li class="rd-nav-item" v-for="(menu, i) in $config[0].header.right_menu">
        <nuxt-link class="rd-nav-link" :to="menu.link">{{menu.text}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	data() {
		return {
			//menus:  [],
		}
  },

}
</script>

<style lang="scss" scoped>
</style>
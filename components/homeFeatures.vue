<template>
  <section class="section section-xs bg-gray-700 box-features-section">
    <div class="container">
      <div class="row row-30">
	  
        <div class="col-md-4" v-for="(feature, i) in features">
          <div class="box-features">
            <div class="box-features-image">
              <img
                :src="getAssetsUrl()+feature.image"
                alt=""
                width="69"
                height="75"
              />
            </div>
            <h4 class="box-features-title">{{feature.title}}</h4>
            <div class="divider divider-secondary divider-green"></div>
            <p class="box-features-text">
              {{feature.description}}
            </p>
          </div>
        </div>
       
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    features: [Array, Object],
  },
}
</script>

<style lang="scss" scoped>
</style>
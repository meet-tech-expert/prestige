<template>
    <div class="background-overlay" 
        :style="status==='enabled' && `background-color:${color}; opacity:${opacity/100};`"
      ></div>
</template>

<script>
    export default {
        props: {
            status:String,
            color:String,
            opacity:Number
        },
    }
</script>

<style lang="scss" scoped>

</style>
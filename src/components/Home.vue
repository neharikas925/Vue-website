<template>
  <div>
    <app-carou></app-carou>
    <app-card></app-card>
    <app-img></app-img>
  </div>
</template>

<script>
import carou from './carou'
import card from './card'
import img from './img'
export default {

  components: {
   
    
    'app-carou':carou,
    'app-card': card,
    'app-img': img
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

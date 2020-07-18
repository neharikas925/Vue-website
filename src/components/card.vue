<template>
  <div class="cont">
    <div class="card" style="width: 60rem;">
    <div class="card-body">
        <h5 class="card-title">About </h5>
        <h6 class="card-subtitle mb-2 text-muted">my</h6>
        <p class="card-text">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. </p>
        <a href="#" class="card-link">click here to </a>
        <a href="#" class="card-link">click here to find </a>
    </div>
</div>
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
        
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
.card {
  box-shadow: -3px 6px 5px 0px rgba(176,164,176,1);
  transition: all .3s ease-in-out;
}

.card:hover {
  box-shadow: -3px 18px 20px 0px rgba(99,89,99,1);
}
.cont {
    padding-top: 3%;

}

</style>

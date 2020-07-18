<template>
  <div>
      <div class="row">
        <div class="column">
            <img src="https://www.anime-planet.com/images/characters/itachi-uchiha-705.jpg" alt="Snow" style="width:100%">
        </div>
        <div class="column">
            <img src="https://i.pinimg.com/originals/52/74/0f/52740f7a75720a4576d1bd0613e3a3a1.jpg" alt="Forest" style="width:100%">
        </div>
        <div class="column">
            <img src="https://i.pinimg.com/originals/15/3a/93/153a9354afc5f9790f717a6ee82072dd.jpg" alt="Mountains" style="width:100%">
        </div>
        </div>
  </div>
</template>

<script>
export default {
 
}
</script>


<style scoped>
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.row {
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
}

.column {
  flex: 33.33%;
  padding: 5px;
}

</style>

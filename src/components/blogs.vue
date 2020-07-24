<template>
  <div>
   <div id="show-blogs">
     <h1>ALL BLOG ARTICLES</h1>
     <div v-for-bind="" class="single-blog">
       <!-- <h2>{{blog.title}}</h2> -->
       <!-- c<article>{{blog.body}}</article> -->
     </div>
   </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      // bloggs:[]
    }

  },
  methods:{

  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      // this.bloggs=data.body.slice(0,10);
    })
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

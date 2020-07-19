<template>
  <div>
    <app-Navbar></app-Navbar>
    <app-Home></app-Home>
    <router-view></router-view>
    <app-footer></app-footer>

    
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Home from './components/Home'
import Navbar from './components/Navbar'
import footer from './components/footer'


export default {
  name: 'App',
  components: {
    'app-Home': Home,
    'app-Navbar':Navbar,
    'app-footer': footer,
    
  }
}
</script>

<style>


</style>

<template>
  <div>
    <app-Navbar></app-Navbar>
    <app-carou></app-carou>
    <app-card></app-card>
    <app-img></app-img>
    <app-footer></app-footer>

    <app-Home></app-Home>
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Home from './components/Home'
import Navbar from './components/Navbar'
import carou from './components/carou'
import card from './components/card'
import img from './components/img'
import footer from './components/footer'



export default {
  name: 'App',
  components: {
    'app-Home': Home,
    'app-Navbar':Navbar,
    'app-carou':carou,
    'app-card': card,
    'app-img': img,
    'app-footer': footer
  }
}
</script>

<style>


</style>

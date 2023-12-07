<template>
  <Nav/>
  <SideBarCompVue/>
  <router-view />

  <footerComp/>
</template>
<script>
import Nav from './components/Nav.vue';
import footerComp from './components/footerComp.vue';
import SideBarCompVue from './components/SideBarComp.vue';

// note to self remove the media query lines on the nav when done
export default {
  components:{
Nav,
footerComp,
SideBarCompVue,
  },
  name: 'App',
}

</script>
<style>


</style>

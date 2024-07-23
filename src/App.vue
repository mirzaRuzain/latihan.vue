<template>
  <div>
    <header-component/>
  </div>
  <div class="kls">
  <main-home/>
  <foot-er/>
  </div>
</template>
<script>
import header from './components/header.vue'
import main from './components/mainWeb.vue'
import footer from './components/footer.vue'
export default {
  components:{
    'header-component': header,
    'main-home': main,
    'foot-er': footer
  }
}
</script>
<style>
  #app{
    color: white;
    background-color: black;
  }
  #app > .kls{
    margin: 0 200px;
  }
</style>
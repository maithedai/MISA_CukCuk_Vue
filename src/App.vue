<template>
  <div id="app">
    <Menu></Menu>
    <TheContent></TheContent>
  </div>
</template>

<script>
import Menu from './components/Menu/Menu.vue'
import TheContent from './components//TheContent.vue'

export default {
  name: 'App',
  components: {
    Menu,
    TheContent,
  }
}
</script>

<style>
@import url("./css/common.css"); 
#app {
    width: 100%;
    height: 100vh;
    display: flex;
}

</style>

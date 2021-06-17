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
    TheContent
  }
}
</script>

<style>
#app {
    width: 100%;
    height: 100vh;
    display: flex;
}
@font-face {
    font-family: GoogleSans;
    src: url('assets/Icon/font/GoogleSans-Medium.otf');
 }
 
 * {
    font-family: GoogleSans;
 }
body {
    margin: 0;
    font-family: 'GoogleSans';
    font-size: 13px;
}

:root {
    --menu-bar-width: 250px;
}

/* * {
    transition: 0.3s;
}
     */

.menu-bar-small {
    --menu-bar-width: 52px;
}
</style>

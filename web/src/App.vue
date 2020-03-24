<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box;}
html { height: 100%;}
body { font-size: 0.32rem; height: 100%;}
#app { height: 100%;}
img { width: 100%; height: auto; vertical-align:middle;}
</style>

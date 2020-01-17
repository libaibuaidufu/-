<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    /*overflow: scroll;*/
    /*overflow-y: scroll;*/
        background: #fff;
  }
   #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    /* width: 1080px; */
    /* margin: 0px auto; */

  }
</style>
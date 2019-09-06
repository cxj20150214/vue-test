<template>

  <div id="app">
     <!--头部导航-->
     <banner></banner>
     <router-view></router-view>
  </div>
</template>
<script>
import banner from './components/banner'
export default {
  name: 'App',
  components:{
    banner
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

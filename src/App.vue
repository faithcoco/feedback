<template>
  <div id="app" width="100px">
     <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
   
    </header>
    <router-view></router-view>   
  </div>
  
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;


  
}
</style>

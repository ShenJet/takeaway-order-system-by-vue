<template>
  <div id="app">
    <transition name="fade" mode="out-in">
  	  	<router-view/>
    </transition>
  	<leftNav></leftNav>
  	<rightNav></rightNav>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import rightNav from '@/components/common/rightNav'
export default {
  name: 'App',
  components:{
  	leftNav,
  	rightNav
  }
}
</script>

<style>
html,body{
	height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: floralwhite;
  height: 100vh;
  position: fixed;
}
.fade-enter{
	opacity: 0;
}
.fade-leave{
	opacity: 1;
}
.fade-enter-active{
	transition: all .3s ease;
}
.fade-leave-active{
	transition: all .3s ease;
}
a{
  color: #42b983;
}
</style>

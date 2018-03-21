<template>
  <div class="pos">
  	<div id="title">
  		<div>
  			<a href=""><i class="icon iconfont icon-jinrudianpu"></i></a>
		  	<i class="icon iconfont icon-gongnengjianyi"></i>
		  	<i class="icon iconfont icon-shouji"></i><br />
		  	<span>Hello pos demo</span><i class="icon iconfont icon-hua"></i>
  		</div>
  	</div>
  	 <transition name="fade" mode="out-in">
  		<router-view></router-view>
  	</transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	name:'pos',
	data(){
		
	}
}
</script>

<style scoped>
.pos{
	width: 90vw;
	margin: 0 5vw;
	height: 100vh;
}
#title{
	transition: .3s;
	width: 100%;
	height: 60px;
}
#title>div{
	transition: .3s;
	opacity: 1;
	display: block;
}
.icon-hua{
	color: #FA8072;
	font-size: 20px;
}

</style>

<template>
  <div class="right-nav">
  	<ul>
  		<li>
  			<i class="icon iconfont icon-jinrudianpu"></i>
  			<div>堂食</div>
  		</li>
  		<li>
  			<i class="icon iconfont icon-shouji"></i>
  			<div>外卖</div>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'rughtNav'
}
</script>

<style scoped>
.right-nav{
	position: fixed;
	transition: .3s;
	right: 0;
	top: 0;
	width: 5vw;
	height: 100vh;
	color: seashell;
	font-size: 10px;
	background-color: salmon;
}
.right-nav>ul{
	width: 100%;
	margin: 0;
	padding: 0;
}
.right-nav>ul>li{
	cursor: pointer;
	transition: .2s;
	list-style: none;
	text-align: center;
	padding: 10px;
	border-bottom: 1px solid seashell;
}
.right-nav>ul>li:hover{
	background-color: indianred;
}
.right-nav>ul>li>i{
	font-size: 24px;
	color: seashell;
}
@media only screen and (min-width: 280px) and (max-width: 1000px) {
	.right-nav{
		width: 10vw;
	}
}
</style>

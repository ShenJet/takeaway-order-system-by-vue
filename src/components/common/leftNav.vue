<template>
  <div class="left-nav">
  	<ul>
  		<li v-for="(x,index) in lis" @click="changeClass(index)" :class="{active:x.classJudge}">
  			<i class="icon iconfont" :class="x.icon"></i>
  			<div>
  				<router-link :to="x.route"><span>{{x.name}}</span></router-link>
  			</div>
  		</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data(){
  	return{
  		lis:[
  			{
  				classJudge:true,
  				icon:"icon-hanbao",
  				route:'/pos/order',
  				name:"点餐"
  			},
  			{
  				classJudge:false,
  				icon:"icon-jinrudianpu",
  				route:'/pos/dianpu',
  				name:"店铺"
  			},
  			{
  				classJudge:false,
  				icon:"icon-gongnengjianyi",
  				route:'/pos/manage',
  				name:"管理"
  			},
  			{
  				classJudge:false,
  				icon:"icon-huiyuanqia",
  				route:'/pos/vip',
  				name:"会员"
  			},
  			{
  				classJudge:false,
  				icon:"icon-goumai",
  				route:'/pos/buy',
  				name:"结账"
  			}
  		]
  	}
  },
  methods:{
  	changeClass(v){
		for (let i=0;i<lis.length;i++) {
			this.lis[i].classJudge==false
		}
		this.lis[v].classJudge==true
  	}
  }
}
</script>

<style scoped>
a{
	color: white;
	text-decoration: none;
}
.active{
	background-color: indianred;
}
.left-nav{
	position: fixed;
	transition: .3s;
	left: 0;
	top: 0;
	width: 5vw;
	height: 100vh;
	color: seashell;
	font-size: 10px;
	background-color: salmon;
}
.left-nav>ul{
	width: 100%;
	margin: 0;
	padding: 0;
}
.left-nav>ul>li{
	cursor: pointer;
	transition: .2s;
	list-style: none;
	text-align: center;
	padding: 10px;
	border-bottom: 1px solid seashell;
}
.left-nav>ul>li:hover{
	background-color: indianred;
}
.left-nav>ul>li>i{
	font-size: 24px;
	color: seashell;
}
@media only screen and (min-width: 280px) and (max-width: 1000px) {
	.left-nav{
		width: 10vw;
	}
}
</style>

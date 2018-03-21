<template>
  <div class="order">
  	<div style="border-top:1px solid lightgrey ;">
  		<el-row>
  			<el-col :span='8' class="pos-order" id="pos_order">
  				<span>订单栏</span>
  						<el-tabs type="border-card"  v-model="activeName">
							<el-tab-pane label="当前订单" name="first" style="transition: .3s ease;">
								<el-table :data="evenTableData0" max-height="550"  align="center" sort-method="paixu">
									<el-table-column prop="goodsName" label="商品名称"></el-table-column>
									<el-table-column prop="count" label="数量" width='90' sortable></el-table-column>
									<el-table-column prop="price" label="价格" width='90' sortable></el-table-column>
									<el-table-column label="操作" fixed="right" width='120'>
										<template slot-scope='scope'>
											<el-button @click="delTb0Single(scope.row)" type="text" size='small'>删除</el-button>
											<el-button @click="reduceTb0Single(scope.row)" type="text" size='small'>-</el-button>
											<el-button @click="addTb0Single(scope.row)" type="text" size='small'>+</el-button>
										</template>
									</el-table-column>
								</el-table>
								<el-row>
									<el-col :span="12">
										<span>总数:</span>
									</el-col>
									<el-col :span="12">
										<span>总金额:</span>
									</el-col>
								</el-row>
								<div class="pay-btns">
									<el-button type="success">结账</el-button>
									<el-button type="warning">挂起</el-button>
									<el-button type="danger">删除</el-button>
								</div>
							</el-tab-pane>
							<el-tab-pane label="挂单中" name="second" style="transition: .3s ease;">
								<el-table :data="tableData1" max-height="600"  align="center">
									<el-table-column prop="orderNum" label="单号" width='90'></el-table-column>
									<el-table-column prop="tableNum" label="桌号" width='90'></el-table-column>
									<el-table-column prop="price" label="金额" width='90'></el-table-column>
									<el-table-column label="操作" fixed="right">
										<template slot-scope='scope'>
											<el-button type="text" size='small'>删除</el-button>
											<el-button type="text" size='small'>修改</el-button>
											<el-button type="text" size='small'>结账</el-button>
										</template>
									</el-table-column>
								</el-table>
								<div class="pay-btns">
									<el-button type="warning">重置</el-button>
									<el-button type="danger">删除</el-button>
								</div>
							</el-tab-pane>
							<el-tab-pane label="已付款" name="third" style="transition: .3s ease;">
								<el-table :data="tableData2" max-height="600"  align="center">
									<el-table-column prop="orderNum" label="单号" width='90'></el-table-column>
									<el-table-column prop="tableNum" label="桌号" width='90'></el-table-column>
									<el-table-column prop="price" label="金额" width='90'></el-table-column>
									<el-table-column label="操作" fixed="right">
										<template slot-scope='scope'>
											<el-button type="text" size='small'>删除</el-button>
											<el-button type="text" size='small'>详情</el-button>
										</template>
									</el-table-column>
								</el-table>
							</el-tab-pane>
							<el-tab-pane label="取消的订单" name="" style="transition: .3s ease;">
								<el-table :data="tableData3" max-height="600"  align="center">
									<el-table-column prop="orderNum" label="单号" width='90'></el-table-column>
									<el-table-column prop="tableNum" label="桌号" width='90'></el-table-column>
									<el-table-column prop="price" label="金额" width='90'></el-table-column>
									<el-table-column label="操作" fixed="right">
										<template slot-scope='scope'>
											<el-button type="text" size='small'>删除</el-button>
											<el-button type="text" size='small'>详情</el-button>
											<el-button type="text" size='small'>恢复</el-button>
										</template>
									</el-table-column>
								</el-table>
								<div class="pay-btns">
									<el-button type="danger">清空</el-button>
								</div>
							</el-tab-pane>
						</el-tabs>
  			</el-col>
  			<el-col :span='16' class="pos-order" id="pos_products">
  				<span>产品栏</span>
  				<div>
  					<div>
  						<el-tabs type="border-card">
  							<el-tab-pane label="常点食品" name="">
  								<el-row>
				  					<el-col class="usual" :span='6'>
				  						<div class="usual_title"><span>饮料</span></div>
				  						<ul style="padding: 0;margin: 0;margin-top: 33px;">
				  							<li v-for="(x,index) in foods.drink" class="usual_li">
				  								<img :src="x.src" alt="" style="width: 100px;height: 100px;"/>
				  								<div>
				  									<span>{{x.goodsName}}</span>
				  									<span>{{x.price}}</span><br />
				  									<el-input-number size="mini" v-if="x.count!=0" v-model="x.count" style="margin-top: 10px;"></el-input-number>
				  									<el-button v-else @click="addOrderList(x)" type="danger" style="margin-top: 10px;"><span style="font-size: 13px;color: white;">点击添加</span></el-button>
				  								</div>
				  							</li>
				  						</ul>
				  					</el-col>
				  					<el-col class="usual" :span='6'>
				  						<div class="usual_title"><span>主食</span></div>
				  						<ul style="padding: 0;margin: 0;margin-top: 33px;">
				  							<li v-for="(x,index) in foods.main"  class="usual_li">
				  								<img :src="x.src" alt="" style="width: 100px;height: 100px;"/>
				  								<div>
				  									<span>{{x.goodsName}}</span>
				  									<span>{{x.price}}</span><br />
				  									<el-input-number size="mini" v-if="x.count!=0" v-model="x.count" style="margin-top: 10px;"></el-input-number>
				  									<el-button @click="addOrderList(x)" v-else type="danger" style="margin-top: 10px;"><span style="font-size: 13px;color: white;">点击添加</span></el-button>
				  								</div>
				  							</li>
				  						</ul>
				  					</el-col>
				  					<el-col class="usual" :span='6'>
				  						<div class="usual_title"><span>小食</span></div>
				  						<ul style="padding: 0;margin: 0;margin-top: 33px;">
				  							<li v-for="(x,index) in foods.snack"  class="usual_li">
				  								<img :src="x.src" alt="" style="width: 100px;height: 100px;"/>
				  								<div>
				  									<span>{{x.goodsName}}</span>
				  									<span>{{x.price}}</span><br />
				  									<el-input-number size="mini" v-if="x.count!=0" v-model="x.count" style="margin-top: 10px;"></el-input-number>
				  									<el-button @click="addOrderList(x)" v-else type="danger" style="margin-top: 10px;"><span style="font-size: 13px;color: white;">点击添加</span></el-button>
				  								</div>
				  							</li>
				  						</ul>
				  					</el-col>
				  					<el-col class="usual" :span='6'>
				  						<div class="usual_title"><span>甜品</span></div>
				  						<ul style="padding: 0;margin: 0;margin-top: 33px;">
				  							<li v-for="(x,index) in foods.sweet" class="usual_li">
				  								<img :src="x.src" alt="" style="width: 100px;height: 100px;"/>
				  								<div>
				  									<span>{{x.goodsName}}</span>
				  									<span>{{x.price}}</span><br />
				  									<el-input-number size="mini" v-if="x.count!=0" v-model="x.count" style="margin-top: 10px;"></el-input-number>
				  									<el-button @click="addOrderList(x)" v-else type="danger" style="margin-top: 10px;"><span style="font-size: 13px;color: white;">点击添加</span></el-button>
				  								</div>
				  							</li>
				  						</ul>
				  					</el-col>
				  				</el-row>
  							</el-tab-pane>
  							<el-tab-pane id="main_menu" label="	主菜单" name="" style="overflow: scroll;">
  								<el-row class="foods" v-for="(x,index) in allFoods" :key="x.goodsId" style="width: 23%;position: relative;display: inline-block;max-width: 400px;max-height: 400px;margin: 0 3px;padding: 10px 12px;">
  									<el-col :span="12"><img style="width: 100%;" :src="x.goodsImg"/></el-col>
  									<el-col :span="12">
  										<div style="position: relative;top: 0;right: 0;"><span style="font-size: 13px;">{{x.goodsName}}</span></div>
  										<div style="position: relative;margin-top: 40px;margin-left: 50px;"><span>¥{{x.price}}</span></div>
  									</el-col>
  								</el-row>
  							</el-tab-pane>
  						</el-tabs>
  					</div>
  				</div>
  			</el-col>
  		</el-row>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'order',
  data() {
		return {
			allFoods:"",
			tableData0:[],
			tableData1:[
				{
					orderNum:"001",
					tableNum:"01",
					price:220
				},
				{
					orderNum:"201",
					tableNum:"02",
					price:120
				},
				{
					orderNum:"021",
					tableNum:"03",
					price:102
				},
				{
					orderNum:"233",
					tableNum:"23",
					price:78
				},
				{
					orderNum:"099",
					tableNum:"011",
					price:80
				},
				{
					orderNum:"012",
					tableNum:"22",
					price:128
				}
			],
			tableData2:[
				{
					orderNum:"001",
					tableNum:"01",
					price:220
				},
				{
					orderNum:"201",
					tableNum:"02",
					price:120
				},
				{
					orderNum:"021",
					tableNum:"03",
					price:102
				},
				{
					orderNum:"233",
					tableNum:"23",
					price:78
				},
				{
					orderNum:"099",
					tableNum:"011",
					price:80
				},
				{
					orderNum:"012",
					tableNum:"22",
					price:128
				}
			],
			tableData3:[
				{
					orderNum:"001",
					tableNum:"01",
					price:220
				},
				{
					orderNum:"201",
					tableNum:"02",
					price:120
				},
				{
					orderNum:"021",
					tableNum:"03",
					price:102
				},
				{
					orderNum:"233",
					tableNum:"23",
					price:78
				},
				{
					orderNum:"099",
					tableNum:"011",
					price:80
				},
				{
					orderNum:"012",
					tableNum:"22",
					price:128
				}
			],
			foods:{
				main:[
					{
						count:0,
						multi:false,
						goodsName:"藤香鸡腿堡",
						goodsId:100,
						price:18,
						kind:"main",
						src: '/static/img/hamburger.jpeg'
					},
					{
						count:0,
						multi:false,
						goodsName:"奥尔良鸡腿堡",
						goodsId:101,
						price:18,
						kind:"main",
						src:"/static/img/aoerliangham.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"鸡腿堡",
						goodsId:102,
						price:15,
						kind:"main",
						src:"/static/img/jituiham.jpeg"
					},
					{
						count:0,
						multi:false,
						goodsName:"鳕鱼堡",
						goodsId:103,
						price:20,
						kind:"main",
						src:"/static/img/xueyuham.jpeg"
					}
				],
				drink:[
					{
						count:0,
						multi:false,
						goodsName:"可口可乐",
						goodsId:104,
						price:7,
						kind:"drinks",
						src:"/static/img/coco.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"雪碧",
						goodsId:105,
						price:7,
						kind:"drinks",
						src:"/static/img/spirit.jpeg"
					},
					{
						count:0,
						multi:false,
						goodsName:"芬达",
						goodsId:106,
						price:7,
						kind:"drinks",
						src:"/static/img/fenda.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"椰汁",
						goodsId:107,
						price:10,
						kind:"drinks",
						src:"/static/img/yezhi.jpeg"
					}
				],
				snack:[
					{
						count:0,
						multi:false,
						goodsName:"大薯",
						goodsId:108,
						price:16,
						kind:"snack",
						src:"/static/img/shutiaoL.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"中薯",
						goodsId:109,
						price:10,
						kind:"snack",
						src:"/static/img/shutiaoM.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"小薯",
						goodsId:110,
						price:6,
						kind:"snack",
						src:"/static/img/shutiaoS.jpeg"
					},
					{
						count:0,
						multi:false,
						goodsName:"上校鸡块",
						goodsId:111,
						price:12,
						kind:"snack",
						src:"/static/img/jikuai.jpeg"
					}
				],
				sweet:[
					{
						count:0,
						multi:false,
						goodsName:"提拉米苏蛋糕",
						goodsId:112,
						price:16,
						kind:"sweet",
						src:"/static/img/tilamisu.jpeg"
					},
					{
						count:0,
						multi:false,
						goodsName:"马卡龙",
						goodsId:113,
						price:10,
						kind:"snack",
						src:"/static/img/makalong.jpg"
					},
					{
						count:0,
						multi:false,
						goodsName:"甜筒",
						goodsId:114,
						price:6,
						kind:"snack",
						src:"/static/img/tiantong.jpeg"
					}
				]
			},
			activeName: 'first',
			totalCount:0,
			totalMoney:0
		};
  },
  computed:{
  	//当前订单列表自动过滤count为0的物品
  	evenTableData0: function () {
		return this.tableData0.filter(function(x){
			return x.count != 0
		})
	}
  },
  created:function(){
  	axios.post('http://jspang.com/DemoApi/typeGoods.php')
  	.then(res=>{
  		 this.allFoods = [...res.data[0], ...res.data[1], ...res.data[2], ...res.data[3]] 
  	})
  	.catch(err=>{
  		console.log(err)
  	})
  },
  mounted:function(){
  	$("#pos_order").height(parseInt(document.body.clientHeight))
	$(".usual").height(550)
	$("#main_menu").height(550)
	$(".usual").css({
		overflow:"scroll"
	})
	$("#main_menu").css({
		overflow:"scroll"
	})
  	$("#pos_products").height(parseInt(document.body.clientHeight))
	setTimeout(function(){
		$("#title").height("0px")
		$("#title>div").css({
			opacity:0
	  	})
		setTimeout(function(){
			$("#title>div").css({
		  		display:'none'
		  	})
		},200)
	},1200)
  },
  methods: {
  	paixu(a,b){
  		return function(a,b){a>b?1:-1}
  	},
  	addOrderList(x){
  		let haha = false
		if(this.tableData0.length==0){
			x.count++;
			this.tableData0.push(x);
			console.log("tableData0 length == 0")
		}else{
			for(let i = 0 ; i < this.tableData0.length ; i++){
				if(x.goodsId==this.tableData0[i].goodsId){
					this.tableData0[i].count++;
					haha = true
				}
			}
			if(haha==false){
				x.count++;
				this.tableData0.push(x);
			}
		}
 	 },
	  delTb0Single(x){
	  	x.count=0;
	  },
	  addTb0Single(x){
	  	x.count++;
	  },
	  reduceTb0Single(x){
	  	x.count--;
	  }
  },
}
</script>

<style scoped>
.pos-order{
	background-color: rgba(255,255,255,.6);
	border-right: 1px solid lightgrey;
}
.pos-order>span{
	color: grey;
}
@media only screen and (min-width: 280px) and (max-width: 1000px) {
	.pos{
		width: 80vw;
		margin: 0 10vw;
	}
}
.pay-btns{
	margin-top: 10px;
}
.usual_title{
	position: fixed;width:14.4%;height: 33px;line-height: 33px; text-align: center;background-color:#f5f7fa ;
}
.usual_title>span{
	color: grey;
}
.usual_li{
	list-style: none;padding: 25px;background-color:#f5f7fa;border:2px solid transparent;
}
.usual_li:hover{
	border:2px solid rgba(255,100,82,.9);
}
.foods{
	cursor: pointer;
	transition: .3s;
}
.foods>span{
	transition: .3s;
}
.foods:hover{
	 background-color:rgba(255,100,82,.9);
}
.foods:hover span{
	color: white;
}
</style>

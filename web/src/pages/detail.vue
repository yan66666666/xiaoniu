<template>
	<div class="detail">
		<my-header2>商品详情</my-header2>
		<div class="banner">
			<img :src="obj.pic"/>
		</div>
		<main>
			<div class="title">
				名称：{{obj.goodsName}}
			</div>
			<div class="price">
				价格：￥{{obj.price}}
			</div>
			<div class="color">
				颜色：{{obj.color}}
			</div>
			<div class="count">
				数量：
				<button @click="num>1 && num--">-</button>
				<input type="text" v-model="num" />
				<button @click="num<obj.store && num++">+</button>
			</div>
			
		</main>
		<div class="content">
			{{obj.detail}}
		</div>
		<footer>
			<div class="total">合计：￥{{num*obj.price}}</div>
			<div class="shopcar" @click="addCar()">加入购物车</div>
			<div class="pay">立即购买</div>
		</footer>
	</div>
</template>

<script>
import {mapState} from "vuex"
//console.log(mapState)
export default {
	data(){
		return {
			obj:{},
			num:1
		}
		
	},
	computed:{
		...mapState(["userName"])
	},
	async created(){
		let res=await this.$http.get("/detail?id="+this.$route.query.id);
		console.log(res)
		this.obj = res.data;
	},
	methods:{
		async addCar(){
			if(this.userName){
				let obj = {
					id:this.obj._id,
					pic:this.obj.pic,
					goodsName:this.obj.goodsName,
					count:this.num,
					price:this.obj.price,
					user:this.userName
				}
				
				let res = await this.$http.post("/car",obj)
				console.log(res)
				this.$toast("已加入到购物车")
			}else{
				this.$store.commit("changeBack",this.$route.fullPath)
				this.$router.push("/login")
			}
		}
	}
}
</script>

<style lang="less" scoped="scoped">
.detail {
	main {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		padding: 0.2rem 0;
		
		& > div {
			padding:0.1rem 0.25rem;
		}
		
		.title {
			font-weight: bold;
		}
		.price { color: #f9080e;}
		.count {
			display: flex;
			
			button { width: 0.5rem; height: 0.5rem; font-size: 0.32rem; 
			background: #efefef; border: 1px solid #ddd;}
			input { height: 0.5rem; font-size: 0.32rem; width: 0.6rem;
			text-align: center;border: 1px solid #ddd;}
			button:nth-child(1) { border-radius:.1rem 0 0 .1rem;}
			button:nth-child(3) { border-radius:0 .1rem .1rem 0;}
		}
	}
	.content {
		padding: 0.24rem; line-height: 0.54rem;
		text-indent: 2em; margin-bottom: 1.4rem;
	}
	
	footer {
		display: flex; position: fixed; left: 0; bottom: 0; width: 100%;
		background: #eee; height: 1rem;
		div { height: 100%;}
		.total { width: 45%; color: #F9080E; padding-left: 0.16rem; line-height: 1rem;}
		.shopcar { width: 25%; background: #fa0; color: #fff; text-align: center;
		color: #fff; line-height: 1rem;}
		.pay {width: 30%; background: #F9080E; color: #fff; text-align: center;
		color: #fff; line-height: 1rem;}
	}
}
</style>
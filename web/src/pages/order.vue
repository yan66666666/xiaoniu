<template>
	<div class="orderbox">
		<my-header2>订单</my-header2>
		<div class="order-content" v-if="userName" v-for="(i,j) in list" :key="j">
			<div>
				<div class="content-top">
					<div>订单编号：{{i._id}}</div>
					<div>已支付</div>
				</div>
				<div class="content-md">
					<div class="md-pic">
						<img :src="i.pic"/>
					</div>
					<div class="md-info">
						<p>{{i.goodsName}}</p>
						<p>颜色：红色</p>
						<p>数量：{{i.count}}</p>
					</div>
					<div class="md-pay">
						￥{{i.count * i.price}}
					</div>
				</div>
				<div class="content-bt">
					合计：<span>￥{{i.count * i.price}}</span>（含运费0.00）
				</div>
			</div>
		</div>
		<div v-else>查看订单页，
			<a href="javascript:;" @click="login()">请先登录</a>
		</div>
		
		<my-footer></my-footer>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data(){
		return {
			list:[]
		}
	},
	computed:{
		...mapState(["userName"])
	},
	async created(){
		if(this.userName){
			let res = await this.$http.get("/order?user="+this.userName)
			console.log(res)
			this.list = res.data
		}
	},
	methods:{
		login(){
			this.$store.commit("changeBack",this.$route.fullPath)
			this.$router.push("/login")
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.orderbox {
	.order { font-size: 0.3rem;}
	.content-top { display: flex; justify-content: space-between; padding: 0.2rem;}
	.content-md { display: flex; background: #eee;}
	.content-md > div { flex: 1;}
	.md-pic img{ width: 100%; height: auto; vertical-align: top;}
	.md-info { padding: 0.2rem;}
	.md-info p{ line-height: 0.5rem;}
	.md-pay { display: flex; justify-content: center; align-items: center; color: #F9080E;}
	.content-bt { background: #eee; padding: 0.2rem; border-top:0.04rem solid #fff; display: flex; justify-content: flex-end;}
	.content-bt span { color: #F9080E;}
	
	.order-content { margin-bottom: 1.2rem;}
}
</style>
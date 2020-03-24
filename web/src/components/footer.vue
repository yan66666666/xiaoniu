<template>
	<footer>
    <router-link to="/" tag="div" :class="$route.path=='/' && active">
	 <div>
			<img src="../assets/shop.png"/>
		</div>
		<span>商城</span>
	</router-link>
	<router-link to="/shopcar" tag="div" :class="$route.path=='/shopcar' && active">
		<div>
			<img src="../assets/server.png"/>
		</div>
		<span>购物车</span>
	</router-link>
	<router-link to="/order" tag="div" :class="$route.path=='/order' && active">
		<div>
			<img src="../assets/order.png"/>
		</div>
		<span>订单</span>
	</router-link>
	<router-link to="/my" tag="div" :class="$route.path=='/my' && active">
		<div>
			<img src="../assets/my.png"/>
		</div>
		<span>我的</span>
	</router-link>
	</footer>
</template>

<script>
export default {
	data(){
		return {
			active:"active"
		}
	}
}
</script>

<style scoped="scoped" lang="less">
footer {
	 position: fixed; left: 0; bottom: 0; width: 100%;
		background: #000; height: 1.1rem; color: #999;
		font-size: 0.24rem;
		display: flex; justify-content: space-around; align-items: center;
		
		& > div {
			flex: 1; text-align: center;
			div {
				width: 26%;
				margin: 0 auto;	
				margin-bottom: 0.1rem;
			}
			
		}
	.active {
		color: #fff;
		img {
			filter: brightness(1.5);
		}
	}
}
</style>
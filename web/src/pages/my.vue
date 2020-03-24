<template>
	<div class="my">
		<my-header2>用户中心</my-header2>
		<div class="user_content">
			<div class="user_info">
				<div>
					<div>
						<div><img src="../assets/main_03.png"/></div>
						<div>qq</div>
					</div>
				</div>
				<button>退出</button>
			</div>
			<div>
				<div>电话号码</div>
				<div>1389067893</div>
			</div>
			<div @click="$router.push('/shor')">
				<div>购物车</div>
				<div>32 > </div>
			</div>
			<div @click="$router.push('/order')">
				<div>单订列表</div>
				<div>12 > </div>
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
.my {
	.user_content > div{
	display: flex; justify-content: space-between; border-bottom: 1px solid #ddd;
	line-height: 1rem; font-size: 0.32rem; padding: 0 0.2rem;
	}
	.user_content .user_info { padding: 0.3rem;}
	.user_content .user_info div div { display: flex;}
	.user_content .user_info div div img{ width: 1rem; height: 1rem; border-radius:0.5rem ;}
	.user_content .user_info button { width: 1.5rem; border: none; height: 0.7rem; color: #333; background: #ddd; font-size: .3rem; }
}
</style>
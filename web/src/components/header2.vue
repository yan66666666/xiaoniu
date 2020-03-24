<template>
	<div class="header2">
		<div class="left" @click="$router.back()">
			<img src="../assets/back.png"/>
		</div>
		<h1><slot></slot></h1>
		<div class="left"></div>
	</div>
</template>
<script>
</script>
<style lang="less" scoped="scoped">
.header2 {
	background: #f9080e; height: 1rem; display: flex;
	
	.left {
		width: 1rem; height: 100%; display: flex;
		justify-content: center; align-items: center;
		
		img {
			width: 30%; height: auto;
		}
	}
	h1 {
		flex: 1; text-align: center; line-height: 1rem;
		font-size:0.42rem; font-weight:normal; color: #fff;
	}
}
</style>
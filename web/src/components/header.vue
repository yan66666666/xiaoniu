<template>
	<header>
			<div class="logo">
				<img src="../assets/logo.png"/>
			</div>
			<div class="head_right">
				<router-link to="/login" tag="div" class="user">
					<img src="../assets/user.png" alt="" />
				</router-link>
				<div class="star">
					<img src="../assets/star.png" alt="" />
				</div>
			</div>
		</header>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
header{
		display: flex; justify-content: space-between;
		height: 1rem; background: #eee; align-items: center;
		
		.logo {
			width: 30%; margin-left: 0.1rem;
		}
		.head_right {
			width: 20%; display: flex; justify-content: space-between;
			margin-right: 0.1rem;
			div {
				width: 0.66rem;
			}
		}
	}	
</style>
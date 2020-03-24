<template>
	<div class="top">
		<div class="left">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item :to="{ path: '/manage' }"><b>首页</b></el-breadcrumb-item>
			  <el-breadcrumb-item v-for="i in $route.meta" :key="i">{{i}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="right">
			<el-dropdown>
			  <span class="el-dropdown-link">
			     <img src="../assets/default.jpg"/>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>小明</el-dropdown-item>
		    	<div @click="logout()">
		    		 <el-dropdown-item>退出</el-dropdown-item>
		    	</div>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		logout(){
			this.$router.push("/")
		}
	}
}
</script>

<style lang="less">
.top {
	display: flex; justify-content: space-between;
	align-items: center;
	.left {
		
	}
	.right {
		display: flex; align-items: center;height: 60px;
		.el-dropdown-link {
			width: 40px; height: 40px; display: block;
			
			img {
				width: 100%; height: auto;border-radius:20px;
			}
		}
	}
}
</style>
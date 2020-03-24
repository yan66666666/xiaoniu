<template>
	<div class="pop">
		<transition name="bg">
			<div class="bg" v-if="value" @click="close()"></div>
		</transition>
		<transition name="pop">
			<div class="content" v-if="value">
				<span class="close" @click="close()"> x </span>
				<div style="height:100%;overflow:scroll ;">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props:["value"],
	methods:{
		close(){
			this.$emit("input",false)
		}
	}
}
</script>

<style lang="less" scoped="scoped">
.pop {
	.bg { width: 100%; height: 100%; position: fixed; left: 0; top: 0;
		background: rgba(0,0,0,0.6); z-index: 1000;}
	.bg-enter,.bg-leave-to { opacity: 0;}
	.bg-enter-active,.bg-leave-active { transition:all 0.4s};
	
	.content {
		width: 500px; padding: 20px; margin:auto;
		background: #FFFFFF; position: fixed; left: 0; top: 0;right: 0; bottom: 0;
		height:80%;z-index: 1001; border-radius: 8px;
		overflow:hidden;
		
		.close {
			display: block; text-align: right;
		}
	}
	
	.pop-enter,.pop-leave-to {transform: translateY(-200px); opacity: 0;}
	.pop-enter-active,.pop-leave-active { transition:all 0.4s};
	
}
</style>
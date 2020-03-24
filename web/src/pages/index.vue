<template>
	<div class="home">
		<my-header></my-header>
		<div class="banner">
			<img src="../assets/sw03.901a267.png"/>
		</div>
		<nav>
			<router-link to="/list" tag="div">
				<div>
					<img src="../assets/main_03.png"/>
				</div>
				<span>整车热卖</span>
			</router-link>
			<div>
				<div>
					<img src="../assets/main_05.png"/>
				</div>
				<span>热卖配件</span>
			</div>
			<div>
				<div>
					<img src="../assets/main_07.png"/>
				</div>
				<span>线下门店</span>
			</div>
			<div>
				<div>
					<img src="../assets/main_09.png"/>
				</div>
				<span>文化周边</span>
			</div>
		</nav>
		<main>
			<h2>整车热卖</h2>
			<div class="content">
				<img src="../assets/n1s.jpg"/>
				<img src="../assets/n1s01.jpg"/>
				<img src="../assets/n1s02.jpg"/>
				<img src="../assets/n1s03.jpg"/>
			</div>
		</main>
		
		<my-footer></my-footer>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
.home {
	
	nav {
		background: #eee; height: 1.6rem;
		display: flex; justify-content: space-around; align-items: center;
		
		& > div {
			flex: 1; text-align: center;
			
			div {
				width: 40%;
				margin: 0 auto;	
				margin-bottom: 0.1rem;
			}
			
		}
	}
	
	main {
		h2 {
			height: 1rem; line-height: 1rem;
			color: #f00; padding-left: 0.15rem;
			font-size: 0.32rem;
		}
	}
}
</style>
<template>
	<div class="reg">
		<div class="logo">
			<img src="../assets/logo.png"/>
		</div>
		<div class="main">
			<h2>用户登录</h2>
			<div class="mian_form">
				<div>
					<label for="user">用户名</label>
					<input type="text" id="user" v-model="obj.userName" placeholder="请输入您的......" />
				</div>
				<div>
					<label for="pwd">密码</label>
					<input type="text" id="pwd" v-model="obj.pwd" placeholder="请输入您的......" />
				</div>
			</div>
			<div class="btn">
				<button class="submit" @click="login()">登录</button>
				<button class="reset">重置</button>
			</div>
			<router-link to="/reg" tag="div" class="goLogin">
				还没账号？
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			obj:{
				userName:"",
				pwd:""
			}
		}
	},
	methods:{
		async login(){
			if(!this.obj.userName || !this.obj.pwd){
				this.$toast("用户名或密码不能为空")
				return false
			}
			
			let res = await this.$http.post("/login",this.obj)
			console.log(res)
			this.$toast(res.data)
			if(res.data=="登录成功"){
				this.$store.commit("changeUser",this.obj.userName)
				this.$router.push(this.$store.state.back)
			}
		}
	}
}
	
</script>

<style scoped="scoped">
.logo { text-align: center; margin-top:1.5rem;}
.logo img { width: 70%; height: auto;}
.main {font-size: 0.3rem;}
.main h2 { text-align: center; font-weight: normal; margin-top: 0.5rem;
  font-size: 0.4rem; margin-bottom: 0.3rem;
}
.mian_form div { border-top: 1px solid #eee; height: 1rem; margin:0 1rem;
display: flex; align-items: center;}
.mian_form label { width: 30%; text-align: center;}
.mian_form input { border: none; height: 0.8rem; font-size: 0.3rem;}
.btn { text-align: center;}
.btn button { border: none; border-radius: 4px; width: 1rem; height: 0.6rem; color: #fff;
 margin: 0.3rem; font-size: 0.3rem;}
.btn .submit { background: #00aaff;}
.btn .reset { background: #ff3300;}
.goLogin { text-align: center; margin: 0.2rem;}
</style>
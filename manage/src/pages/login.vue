<template>
	<div class="login">
		<transition name="slide">	
			<div class="content" v-if="flag">
				<h1>小牛后台管理系统</h1>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
					<el-form-item label="" prop="userName">
					    <el-input v-model="ruleForm.userName" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item label="" prop="pwd">
					    <el-input v-model="ruleForm.pwd" placeholder="密码"></el-input>
					</el-form-item>
					<el-button @click="submit()" type="primary" style="width: 100%;">立即登录</el-button>
				</el-form>
				<div>
					温馨提示：未登录过的新用户，自动注册
					注册过的用户可凭账号密码登录
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data(){
		
	 var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(value.split("").every(i=>/\w/.test(i))){
          	callback();
          }else{
          	 callback(new Error('不可以使用特殊符号'));
          }
          
        }
      };
      
		return {
			flag:false,
			ruleForm:{
				userName:"",
				pwd:""
			},
			rules:{
				userName:[
					{required:"true",message:"请输入用户名",trigger:"blur"},
					{ min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				pwd:[
					{ validator: validatePass, trigger: 'blur' }
				]
			}
		}
	},
	mounted(){
		this.flag = true
	},
	methods:{
		submit(){
			this.$refs.ruleForm.validate(async (valid)=>{
				if(valid){
					let res = await this.$http.post("/admin",this.ruleForm);
					console.log(res.data)
					if(res.data!="密码错误"){
						this.$message({
			       		   message:res.data,
			         	   type: 'success'
			            });
			 sessionStorage.setItem("admin",this.ruleForm.userName)
			            this.$router.push("/manage")
					}else{
						this.$message({
			       		   message:res.data,
			         	   type: 'error'
			            });
					}
					
				}else{
					this.$message.error('错了哦，这是一条错误消息');
				}
			})
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.login {
	background: #324057; width: 100%; height: 100%;
	
	.content {
		position: fixed; left: 50%; top: 50%;
		background: #fff; border-radius:10px;
		width: 360px; height:240px ; transform: translate(-50%,-50%);
		padding:30px 22px;
		
		h1 {
			position: absolute; top:-80px; left: 45px; color: #fff;
			font-size: 32px; font-family: "微软雅黑"; font-weight: normal;
		}
	}
	
	.slide-enter,.slide-leave-to { opacity: 0; transform: translate(-50%,-100%);}
.slide-enter-active,.slide-leave-active { transition:all .5s}
}
</style>
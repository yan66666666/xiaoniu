<template>
	<div class="manage">
		<el-container>
		  <el-aside width="200px">
		  	<el-menu
		      default-active="/manage"
		      class="el-menu-vertical-demo"
		      background-color="rgb(50, 64, 87)"
		      text-color="#bfcbd9"
		      active-text-color="#20a0ff"
		      router>
		      
		      <el-menu-item index="/manage" id="home">
		        <i class="el-icon-menu"></i>
		        <span slot="title">首页</span>
		      </el-menu-item>
		      
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="el-icon-s-platform"></i>
		          <span>数据管理</span>
		        </template>
		        
			      <el-menu-item index="/manage/admin">
			        <i class="el-icon-user-solid"></i>
			        <span slot="title">管理员管理</span>
			      </el-menu-item>
			      <el-menu-item index="/manage/user">
			        <i class="el-icon-s-custom"></i>
			        <span slot="title">用户管理</span>
			      </el-menu-item>
			       <el-menu-item index="/manage/order">
			        <i class="el-icon-s-claim"></i>
			        <span slot="title">订单管理</span>
			      </el-menu-item>
			       <el-menu-item index="/manage/goods">
			        <i class="el-icon-s-shop"></i>
			        <span slot="title">商品管理</span>
			      </el-menu-item>
		      </el-submenu>
	
	
				<el-submenu index="7">
		        <template slot="title">
		          <i class="el-icon-edit"></i>
		          <span>数据添加</span>
		        </template>
		        
			       <el-menu-item index="/manage/addGoods">
			        <i class="el-icon-s-goods"></i>
			        <span slot="title">添加商品</span>
			      </el-menu-item>
			      
		      </el-submenu>
		    </el-menu>
		  	
		  </el-aside>
		  <el-container>
		    <el-header>
		    	<my-header></my-header>
		    </el-header>
		    <el-main>
		    	<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import header from "@/components/header";
export default {
	components:{"my-header":header},
	watch:{
		$route:function(n){
			console.log(n)
		}
	}
}
</script>

<style>
.el-menu-item { text-align: left; background:#1f2d3d !important;}
#home { background: rgb(50, 64, 87) !important;}
/*.el-menu-item:hover { background:#53647b }*/
.el-submenu { text-align: left;}
.el-submenu__title:hover { background:#53647b !important;  }
.manage { height: 100%;}	
.el-header, .el-footer {
    background-color: #eff2f7;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color:rgb(50, 64, 87);
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #fff;
  }
  
  .el-container {
     height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
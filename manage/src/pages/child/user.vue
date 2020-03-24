<template>
	<div>
		<el-table
		    :data="tableData"
		    style="width: 100%"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    >
		    <el-table-column
		      prop="regTime"
		      label="注册时间"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="userName"
		      label="用户名"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="tel"
		      label="电话"
			>
		    </el-table-column>
		  </el-table>
		  <el-pagination
		  background
		  layout="prev, pager, next"
		  :total="total"
		  :page-size="size"
		  @current-change="change"
		  >
		</el-pagination>
	</div>
</template>

<script>
 export default {
    data() {
      return {
      	 size:2,
         total:100,
         tableData: []
      }
    },
   async created(){
    	let res = await this.$http.get("/user");
    	this.tableData = res.data;
    }
  }
</script>

<style>
</style>
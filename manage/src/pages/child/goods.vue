<template>
	<div>
		<el-table
      	:data="tableData"
     	 style="width: 100%">
	      <el-table-column
	        prop="time"
	        label="注册日期"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="goodsName"
	        label="商品名称"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="color"
	        label="颜色"
	        width="120">
	      </el-table-column>
	       <el-table-column
	        prop="price"
	        label="价格"
	         width="120">
	      </el-table-column>
	       <el-table-column
	        prop="store"
	        label="库存"
	         width="120">
	      </el-table-column>
	       <el-table-column
	        label="图片"
	         width="120">
	        <template slot-scope="scope">
	          <img @click="scope.row.flag=true" :src="scope.row.pic" style="width: 40px;height: 40px;" /> 
	          <my-pop v-model="scope.row.flag">
	          	<img :src="scope.row.pic" style="width:100%;height:auto;" /> 
	          </my-pop>
	        </template>
	      </el-table-column>
	       <el-table-column
	        label="操作"
	         width="200">
	        <template slot-scope="scope">
	        	 <el-button
		          size="mini"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		    	<el-button
		          size="mini"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
	        </template>
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
          tableData: [],
          size:2,
          total:1
        }
      },
     created(){
      	 this.getData(1)
      },
      methods:{
      	  format(time){
      	  	time = new Date(time)
      	  	return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()
      	  },
      	  change(current){
      	  	  this.getData(current)
      	  },
      	  async getData(current){
      	  	let res = await this.$http.get("/goods",{
      	  		params:{size:this.size,current}
      	  	});
      	  	console.log(res)
      	  	this.total = res.data.total;
    	    this.tableData = res.data.data.map(i=>{
	    		i.time = this.format(i.time);
	    		i.flag = false;
	    		return i
	    	});
      	  },
      	  handleEdit(index, row) {
	        console.log(index, row);
	        this.$router.push({name:"updateGoods",params:{row}})
	      },
	      async handleDelete(index, row) {
	         //console.log(index, row);
	        let res =await this.$http.delete(
	        	"/goods?id="+row._id);
	        this.$message({
		          message: res.data,
		          type: 'success'
		        });
	        this.getData(1)
	      }
      }
      
    }
</script>

<style>
</style>
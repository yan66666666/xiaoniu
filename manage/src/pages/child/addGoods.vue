<template>
	<div class="add">
		<h1>添加商品</h1>
		<div class="add_content">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="85px" class="demo-ruleForm">
		  <el-form-item label="商品名称" prop="goodsName" required>
		    <el-input v-model="ruleForm.goodsName"></el-input>
		  </el-form-item>
		  <el-form-item label="商品价格">
		  	<el-input-number v-model="ruleForm.price"  :min="1" :max="10000"></el-input-number>
		  </el-form-item>
		  <el-form-item label="商品颜色" required>
		    <el-radio-group v-model="ruleForm.color" size="medium">
		      <el-radio-button label="红色"></el-radio-button>
		      <el-radio-button label="白色"></el-radio-button>
		      <el-radio-button label="蓝色"></el-radio-button>
		      <el-radio-button label="黑色"></el-radio-button>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="商品详情" prop="detail" required>
		    <el-input type="textarea" rows="5" v-model="ruleForm.detail"></el-input>
		  </el-form-item>
		  <el-form-item label="商品库存">
		  	<el-input-number v-model="ruleForm.store"  :min="1" :max="10000"></el-input-number>
		  </el-form-item>
		  <el-form-item label="商品图片" required>
		  	<el-upload
			  class="avatar-uploader"
			  :action="$URL"
			  :show-file-list="false"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		  </el-form-item>	
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
      	 imageUrl:"",
         ruleForm: {
         	goodsName:"",
         	price:"",
         	color:"红色",
         	detail:"",
         	store:"",
         	pic:""
        },
        rules: {
          goodsName: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
          ],
          price: [
            { required: true, type: 'number',message: '请输入商品价格', trigger: 'blur' },
            { min: 1, max: 50000, message: '价格必须在合理的价格区间', trigger: 'blur' }
          ],
          detail:[
            { required: true, message: '请输入商品详情', trigger: 'blur' },
            { min: 10, max: 50000, message: '字数不符合规则', trigger: 'blur' }
          ],
          store: [
            { required: true,message: '请输入商品价格', trigger: 'blur' },
            { min: 1, max: 20000, message: '价格必须在合理的价格区间', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       handleAvatarSuccess(res, file) {
       //	console.log(res)
       	this.ruleForm.pic = this.$URL+"/"+res;
       //	console.log(this.ruleForm.pic)
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
      	
        const isJPG = /\.(jpg|jpeg|gif|png)$/i.test(file.name);
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
          	if(this.ruleForm.pic){
          		//alert('submit!');
          		let res = await this.$http.post("/goods",this.ruleForm);
          		console.log(res)
          		//for(let i in this.ruleForm){this.ruleForm[i]=""}
          		this.$confirm('添加成功，是否继续添加商品?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	
		        }).catch(() => {
		           this.$router.push("/manage/goods")    
		        });
          		
          	}else{
          		this.$message.error('请上传图片');
          	}
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less">
.add {
	h1 {
		text-align: center; font-weight: normal; color: #333;
		font-size: 26px; margin-bottom: 15px;
	}
	.add_content {
		width: 600px; margin: 0 auto;
		border: 1px solid #eee; border-radius:5px;
		padding: 30px 30px 30px 10px;
	}
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>
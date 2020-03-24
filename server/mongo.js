let mongo = require("mongoose");
// mongod --dbpath=C:data/xx/
mongo.connect("mongodb://127.0.0.1/xiaoniu02",{useUnifiedTopology: true,useNewUrlParser:true})
mongo.connection.on("connected",err=>{
	console.log("连接成功")
})
let adminHead = mongo.Schema({
	time:{
		type:Date,
		default:new Date()
	},
	userName:String,
	pwd:String,
	address:{
		type:String,
		default:"信阳"
	}
})
let admin = mongo.model("admin",adminHead)

let userHead = mongo.Schema({
	userName:String,
	pwd:String,
	tel:Number,
	regTime:{
		type:Date,
		default:new Date()
	}
})
let user = mongo.model("user",userHead)

let goodsHead = mongo.Schema({
	goodsName:String,
 	price:Number,
 	color:String,
 	detail:String,
 	store:Number,
 	pic:String,
 	time:{
		type:Date,
		default:new Date()	
 	}
})
let goods = mongo.model("goods",goodsHead)

let carHead = mongo.Schema({
	id:String,
	pic:String,
	goodsName:String,
	count:Number,
	price:Number,
	user:String,
 	time:{
		type:Date,
		default:new Date()	
 	}
})
let car = mongo.model("car",carHead)

let orderHead = mongo.Schema({
	pic:String,
	goodsName:String,
	count:Number,
	price:Number,
	user:String,
 	time:{
		type:Date,
		default:new Date()	
 	}
})
let order = mongo.model("order",orderHead)



module.exports = {admin,user,goods,car,order}


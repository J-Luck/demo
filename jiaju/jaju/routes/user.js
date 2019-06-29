const express=require('express');
//创建路由器对象
var router=express.Router();
//引入连接池对象
const pool=require('../pool.js');

//用户注册
router.post("/reg",(req,res)=>{
	var obj=req.body;
	pool.query("insert into j_user  set ?",[obj],(err,result)=>{
		if(err) throw err;
		if (result.affectedRows>0)
		{
			res.send('注册成功');
		}else{
			res.send('注册失败');
		}
	});
});
//用户名交互
router.post('/reg_user',(req,res)=>{
	var $uname=req.body.uname;
	pool.query("select uname from j_user where uname=?",[$uname],(err,result)=>{
		if(err)throw err;
		if (result.length>0)
		{
			res.send('用户名重复');
		}else{
			res.send('用户名可用');
		}
	});

});
//登录 
router.post('/login',function(req,res){
	var $uname=req.body.uname;
		if (!$uname)
		{
			res.send('登录失败，请输入用户名');
			return;
		}
	var $upwd=req.body.upwd;
		if (!$upwd)
		{
			res.send('登录失败，请输入密码');
			return;
		}
	pool.query("select uname,upwd from j_user where uname=? and upwd=?",[$uname,$upwd],function(err,result){
		if(err) throw err;
		if (result.length>0)
		{
			res.send('登录成功');
		}else{
			res.send('登录失败');
		}
	});
});



//导出路由
module.exports=router;


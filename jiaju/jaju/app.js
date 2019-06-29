//引入express
const express=require('express');
//创建web服务器
var server=express();
server.listen(8080);

//托管静态资源到public文件
server.use(express.static('public'));

//引入body_parser
const bodyParser=require('body-parser');
//使用body-parser中间件，将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({
	extended:false
}));



//引入路由器
const userRouter=require('./routes/user.js');
//使用路由
server.use('/user',userRouter);








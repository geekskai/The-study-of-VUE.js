# 如何读取文件 #

![](./imgs/2018-11-09_212940.png)

# 写入文件 #

`var fs = require('fs');

fs.writeFile('./data/你好.md','大家好，我是大师兄！',function(error){
	console.log('文件写入成功！！！！')
})
`
# 简单的http服务器 #

`	var http = require('http')

	var server = http.createServer()

	server.on('request',function(request,response){
	
	var url = request.url;
	// response.end(url)
	if(url==='/login'){
		
	response.end('welcome!login');
	}else if(url=='/register'){
		
		response.end('register');
	}else if(url=='/hellow'){
		
		response.end('hahah');
	}else{
		response.end('404 not found');
	}
	})

	server.listen(3000,function(){
	console.log('服务服务器启动成功,可以通过http://127.0.0.1:3000/来进行访问')
	})`
**相应内容只能是二进制数据或者字符串,其他的都不行**





























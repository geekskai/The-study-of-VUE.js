var http = require('http')

var server = http.createServer()

server.on('request',function(request,response){
	
	var url = request.url;
	// response.end(url)
	if(url==='/login'){
		
	response.end('welcome!login');
	}else if(url=='/register'){
		
		response.end('register');
	}else if(url=='/products'){
		var products = [
		{
			name:'张三',
			age:25,
			address:'深圳市'
		},
		{
			name:'李四',
			age:26,
			address:'北京市'
		},
		{
			name:'张三',
			age:28,
			address:'上海市'
		},
		]
		response.end(JSON.stringify(products));
	}else{
		response.end('404 not found');
	}
})

server.listen(3000,function(){
	console.log('服务服务器启动成功,可以通过http://127.0.0.1:3000/来进行访问')
})
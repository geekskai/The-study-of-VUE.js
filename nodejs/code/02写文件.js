var fs = require('fs');

fs.writeFile('./data/你好.md','大家好，我是大师兄！',function(error){
	console.log('文件写入成功！！！！')
})


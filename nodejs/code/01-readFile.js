var fs = require('fs')

fs.readFile('./data/readme.txt',function(error,data){
	console.log(data.toString())
	  //console.log('错误',error)
})
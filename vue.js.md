# vue.js

## 2019年1月1日00:24:49  001

<h3>1.1 mvvm的分层思想</h3>

![](imgs/01.MVC和MVVM的关系图解.png)

    var vm = new Vue({
    	el:'#app',
    	data:{
    		msg:'这是个消息!',
    		intervalId:null,//在data上定义一个定时器,
    	}
    })

<h3>1.2 v-block 能解决插值表达式在网速慢的时候,页面渲染的时候的闪烁问题.</h3>

<b>用法:</b>

    <style>
    	[v-block]{
    		display:none;
    	}
    </style>

    <p v-block>{{msg1}} 这里的内容不会被覆盖</p>
    <h4 v-text='msg2'>这里的内容会被覆盖</h4>  默认v-text是没有闪烁问题的.
    <h4 v-html='msg3'>这里如果写内容,也会被覆盖.</h4>

<h3>1.3 对于ES6中的this指向问题:</h3>

    一般写法:
    methods:{
    	lang(){
    		let _this = this
    		setInterval(function () {
    			console.log('打印日志...',_this.msg3);
    			},400)
    	}
    }

    ES6中的箭头函数写法:
    methods:{
    	lang(){
    		this.intervalId = setInterval(() => {
    			console.log('打印日志...',this.msg);
    			// 这个内部的this 就指向外部的this,箭头函数内部的this 始终和外部的this保持一致.
    			},400)
    	},
    	stop(){
    		clearInterval(this.intervalId);
    	}
    }

<h3>1.4 事件修饰符</h3>

    <div @click='handleDiv'>
    	<button @click.stop='handleClick'></button> // .stop阻止这个事件向外冒泡,这个是从里到外的事件.
    </div>
    <div @click.capture='handleDiv'>
    	<button @click='handleClick'></button> // .capture捕获里面的这个按钮的事件,这个是从外到里的事件
    </div>
    <div @click.self='handleDiv'>
    	<button @click='handleClick'></button> // .self只有点击自己才会出发的事件
    </div>

**.stop和.self的区别:**

.stop会阻止从本身开始,一直向外冒泡的事件,但是.self只会阻止本身事件,不会自身以外的事件.

    //使用.prevent阻止默认行为
    <a @click.prevent='handleLink'>点击去百度</a>
    //使用.once只触发一次事件处理函数,会阻止一次默认行为,第二次就是回复原样,这两个事件之间,没有联系.
    <a @click.prevent.once='handleLink'>点击去百度查询</a>
**对于 eval()方法,将字符串解析成表达式**

	var codeStr = 'parseInt(this.val1)' + this.pot + 'parseInt(this.val2)'
	this.result = eval(codeStr);
<h4>简单的计算器</h4>

	<!DOCTYPE html>
	<html lang="en">

	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title>Document</title>
	  <script src="./lib/vue-2.4.0.js"></script>
	</head>

	<body>
	  <div id="app">
	    <input type="text" v-model="n1">

	    <select v-model="opt">
	      <option value="+">+</option>
	      <option value="-">-</option>
	      <option value="*">*</option>
	      <option value="/">/</option>
	    </select>

	    <input type="text" v-model="n2">

	    <input type="button" value="=" @click="calc">

	    <input type="text" v-model="result">
	  </div>

	  <script>
	    // 创建 Vue 实例，得到 ViewModel
	    var vm = new Vue({
	      el: '#app',
	      data: {
	        n1: 0,
	        n2: 0,
	        result: 0,
	        opt: '+'
	      },
	      methods: {
	        calc() { // 计算器算数的方法  
	          // 逻辑：
	          /* switch (this.opt) {
	            case '+':
	              this.result = parseInt(this.n1) + parseInt(this.n2)
	              break;
	            case '-':
	              this.result = parseInt(this.n1) - parseInt(this.n2)
	              break;
	            case '*':
	              this.result = parseInt(this.n1) * parseInt(this.n2)
	              break;
	            case '/':
	              this.result = parseInt(this.n1) / parseInt(this.n2)
	              break;
	          } */

	          // 注意：这是投机取巧的方式，正式开发中，尽量少用
	          var codeStr = 'parseInt(this.n1) ' + this.opt + ' parseInt(this.n2)'
	          this.result = eval(codeStr)
	        }
	      }
	    });
	  </script>
	</body>

	</html>

<h4>通过设置绑定class 样式</h4>

	在数组中使用三元表达式:
	<h1 :class="['thin', 'italic', flag?'active':'']">这是一个很大很大的H1</h1>
	也可以传入一个对象,在数组中使用 对象来代替三元表达式，提高代码的可读性
	<h1 :class="['thin', 'italic', {'active':flag} ]">这是一个很大很大的H1</h1>

<h4>通过设置绑定style 样式</h4>

	 <h1 :style="[ styleObj1, styleObj2 ]">这是一个h1</h1>
	 <script>
	 // 创建 Vue 实例，得到 ViewModel
	 var vm = new Vue({
		 el: '#app',
		 data: {
			 styleObj1: { color: 'red', 'font-weight': 200 },
			 styleObj2: { 'font-style': 'italic' }
		 },
		 methods: {}
	 });
 	</script>
<h4>v-for 循环对象</h4>

	// 创建 Vue 实例，得到 ViewModel
	var vm = new Vue({
	 el: '#app',
	 data: {
		 user: {
			 id: 1,
			 name: '张三',
			 gender: '男'
		 }
	 },
	 methods: {}
	});
**注意：在遍历对象身上的键值对的时候,除了有value key,在第三个位置还有一个索引  **

	 <p v-for="(val, key, i) in user">值是： {{ val }} --- 键是： {{key}} -- 索引： {{i}}</p>

**注意：如果使用 v-for 迭代数字的话，前面的 count 值从 1 开始 **

	<p v-for="count in 10">这是第 {{ count }} 次循环</p>

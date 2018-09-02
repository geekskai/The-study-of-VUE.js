# jQuery #
jquery  1x支持ie678 国内一般用第一版  比如1.1.24.min.js压缩版本,一般用于生产环境.

jQuery的两个入口函数

1. $(document).ready(function(){$("#btn").click(function(){})};);
2. $(function(){};);		//无需等页面加载,即可执行,执行效率比jQuery高.
	
js的入口函数是:window.onload(function(){};); 			 // 必须等页面加载完成才执行,

**jQuery对象其实就是一个伪数组(伪数组就是,没有数组的方法,但是他有自己的方法),里面装着很多的js对象**	
DOM无法调用jQuery的方法,因为是两个不同的对象,但是DOM对象可以转换为jQuery对象,他们之间可以互相转换.

DOM对象转jQuery对象:

`var domObj=document.getElementById('id');`

`转换成jQuery对象:$(domObj).text("呵呵");`

jQuery对象转换成DOM对象:

直接从伪数组中取出来就行,通过下标取出来就行:

`var $li=$('li');`

`$li[0].style.backgroundColor='red';` //取出伪数组对象中的第一个DOM对象
或者也可以用第二种方法:$li.get(1);  //获取第二个li标签对象

## $符号的类型本质上是一个函数 ##

$的中参数的不同,用法不同,分别是以下三种用法:

1. 作为jQuery的入口函数:$(function(){};);
2. 作为将DOM对象转换为jQuery对象的方法;
3. 用来找到页面中的对象:$('#id');

## CSS操作 ##
 
1. 操作css属性,$('li').css('backgroundColor','red');
2. 同时也可以传入一个对象$('li').css.({'backgroundColor':"pink",'fondSize':"18px"})
3. 可以用来获取对象,$('div').css('backgroundColor');

## class操作 ##

addClass('basic');	//添加class

removeClass('basic'); //移除

hasClass('basic') ;//判断是否存在这个类.返回true/false 

toggleClass('basic'); 判断一个类是否存在,存在就移除,不存在就添加.


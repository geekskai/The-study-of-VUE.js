#vue.js 学习笔记

## 2018-12-16 19:30:01 ##
1. vue 中的方法不要使用箭头函数 否则绑定的this就是Window ;
2. `<input @keydown.enter='handleClick'>` 按下回车就执行某个方法
3. v-bind 可以用来动态绑定一个属性值,比如class ,`<i :class={demo:it.done}>` 给了一个对象:对象的key就是类名,对象的value就是一个布尔值,当这个布尔值为true ,这个类名属性生效.
4. 
(function () {
  var elements = [];//存放小蛇的每个身体的部分
  //蛇的构造函数
  function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right";
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'orange' },
      { x: 1, y: 2, color: 'orange' }
    ];
  }
  //为小蛇添加初始化的方法
  Snake.prototype.init = function (map) {
    remove();
    for (let i = 0; i < this.body.length; i++) {
      var obj = this.body[i];
      var div = document.createElement('div');
      map.appendChild(div);
      div.style.position = 'absolute';
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = obj.x * this.width + 'px';
      div.style.top = obj.y * this.height + 'px';
      div.style.backgroundColor = obj.color;
      elements.push(div);
    }
  };
  //为原型添加方法,让小蛇动起来.

  Snake.prototype.move = function (food, map) {
    //改变小蛇的身体的坐标位置
    var i = this.body.length - 1;
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    //判断小蛇的头的方向
    switch (this.direction) {
      case 'right': this.body[0].x += 1;
        break;
      case 'left': this.body[0].x -= 1;
        break;
      case 'top': this.body[0].y -= 1;
        break;
      case 'bottom': this.body[0].y += 1;
        break;
    }
    //判断是否迟到食物-小蛇头的坐标和食物的坐标一致
    var headX = this.body[0].x * this.width;
    var headY = this.body[0].y * this.height;
    //判断小蛇的横纵坐标是否和食物的一致
    if (headX == food.x && headY == food.y) {
      //获取小蛇的最后的尾巴
      var last = this.body[this.body.length - 1];
      //把蛇尾重新复制一个,添加到尾巴最后面
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      });
      //把食物删除,从新初始化食物.
      food.init(map);
    }
  };

  //删除小蛇的私有函数
  function remove() {
    //获取数组
    var i = elements.length - 1;
    for (; i >= 0; i--) {
      //先从当前的子元素中找到其父元素,然后,让父元素将子元素删除
      var element = elements[i];
      element.parentNode.removeChild(element);
      elements.splice(i, 1);
    }
  }

  window.Snake = Snake;
}());

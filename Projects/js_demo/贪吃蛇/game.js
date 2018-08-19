(function () {
  var that = null;
  //游戏的构造函数
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  };

  Game.prototype.init = function () {
    //初始化游戏
    //食物初始化
    this.food.init(this.map);
    //小蛇初始化
    this.snake.init(this.map);
    //调用自动移动小蛇的方法
    this.runSnake(this.food, this.map);
    //调用按键的方法
    this.bindKey();
  };

  //添加原形方法--设置小蛇可以自由跑起来
  Game.prototype.runSnake = function (food, map) {
    // 自动的去移动
    var timeId = setInterval(function () {
      // 此时的this是window

      //移动小蛇
      this.snake.move(food, map);
      //初始化小蛇
      this.snake.init(map);
      //横坐标的最大值
      var maxX = map.offsetWidth / this.snake.width;  //  40
      //纵坐标的最大值
      var maxY = map.offsetHeight / this.snake.height;  //  40
      //小蛇的头的坐标
      var headX = this.snake.body[0].x;
      var headY = this.snake.body[0].y;
      //横坐标
      if (headX < 0 || headX >= maxX) {
        //撞墙了 停止定时器
        clearInterval(timeId);
        alert('Game Over!')
      }
      //纵坐标
      if (headY < 0 || headY >= maxY) {
        //撞墙了 停止定时器
        clearInterval(timeId);
        alert('Game Over!')
      }

    }.bind(that), 150);
  };

  Game.prototype.bindKey = function () {
    //获取用户的按键,改变小蛇的方向.
    document.addEventListener('keydown', function (e) {
      //这里的this应该是触发keydown的事件的对象--document
      //获取按键的值
      switch (e.keyCode) {
        case 37: this.snake.direction = 'left'; break;
        case 38: this.snake.direction = 'top'; break;
        case 39: this.snake.direction = 'right'; break;
        case 40: this.snake.direction = 'bottom'; break;
      }
    }.bind(that), false);
  };
  window.Game = Game;
}());

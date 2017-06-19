# The Beauty of Math

> 这个项目只是为了帮助自己从零开始学习数学在程序中的应用。

## 公式

* 平方

```js
var num = 100;
Math.pow(num, 2); // 100 的 2 次方
```

* 平方根

```js
Math.sqrt(4); // 4 的平方根 ---> 2
```

* Math.cos()和Math.acos()

```js
var a = Math.cos(.5);
var b = Math.acos(a);
console.log(b) // --->0.4999999999999999 从数学上b应该等于0.5，但是从计算机上并不等于，因为丢失了精度
```

* 两点之间的距离(distance)

```js
var x1 = 100, y1 = 100;
var x2 = 300, y2 = 300;
var distance = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
```

* 三角形

* 圆形

* 角度(angle)--->弧度(radian)

```js
var angle = 30;
var radian = 2 * Math.PI / 360 * angle;
var radian = angle / 180 * Math.PI;
```

* 弧度--->角度

```js
var angle = radian * 180 / Math.PI;
```

* 由两点以及半径（也就是距离distance）得出弧度 或 角度

```js
var x1 = 100, y1 = 100;
var x2 = 300, y2 = 300;
var distance = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

var radian = Math.acos((x2 - x1) / distance);
var angle = Math.acos((x2 - x1) / distance) * 180 / Math.PI;
if (y2 < y1) angle = -angle
/* 
注意角度是相对于圆心水平向右为0deg
圆心右侧水平 东：0deg
圆心左侧水平 西：180deg / -180deg
圆心正上方 北：-90deg
圆心正下方 南：90deg
*/
```

* 由圆心、半径、角度或弧度求圆上的点

```js
var center = [100, 100]
function getCirclePoint(center, distance, angle) {
  var radian = angle / 180 * Math.PI;

  var x1 = center[0] + Math.cos(radian) * distance;
  var y1 = center[1] + Math.sin(radian) * distance;

  return [x1.toFixed(1), y1.toFixed(1)];
}
```

## 函数[查看详细](Tween/README.md)

* 匀速运动
* 匀加速运动
* 二阶贝塞尔曲线

> 我们可以发现二阶贝塞尔曲线的 easeIn 跟 匀加速运动一致，为什么呢？
还有我们经常会听到各种各样的关于函数的称呼，他们之间怎么区分，怎么理解，是否是一样的呢？

> 匀速运动也好，加速运动也好，贝塞尔曲线也好，timing function 也好，路径公式也好，都只是一个称呼，本质均是以x作为变量，求该函数模型下y的变化曲线。

> 在某些情况下我们为了方便理解，而把x称为时间，其实x只是一个为了计量y的参考点——我们总是需要一个参考的变量的，否则y怎么变化呢？而任何曲线，其参数拆分到最底层，也依然是以一个均匀变化的x为参数 而变化的y的曲线，这时这个均匀变化的x，就像时间。

> 所以这些名词其实都是某个函数模型的应用，我们传入x之后得出y做功能封装，便得出了不同的概念。

结论：避开各种概念，而去深刻的理解各个函数模型，并且熟悉他们的应用场景。

* 三阶贝塞尔曲线

[@see Tween Curve](http://codepen.io/dongxl/pen/LWrxVj)

* [矩阵动画](https://www.villainhr.com/page/2017/05/01/SVG%20%E5%8A%A8%E7%94%BB%E7%B2%BE%E9%AB%93?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io&from=timeline)

## 例子

* [codepen](http://codepen.io/dongxl/pen/zozLXj)
* [codepen](http://codepen.io/dongxl/pen/jAzoZY)

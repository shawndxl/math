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

## 例子

* [codepen](http://codepen.io/dongxl/pen/zozLXj)
* [codepen](http://codepen.io/dongxl/pen/jAzoZY)

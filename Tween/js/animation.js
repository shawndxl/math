(function() {
    /**
     * 动画函数封装  (不足：目前只传递了一个执行函数即对应的时间函数，待增加针对同时进行的多个动画使用多个时间函数)
     * 
     * @param number form 初始位置 必须
     * @param number to 最终位置 必须
     * @param number during 动画时间 大于0 单位 秒 必须
     * @param function animateFn 动画内容  必须 其参数是通过内部取出来的，所以在使用上需要注意
     * @param function mathFn 动画函数  非必须 默认 linear
     */
    window.mathAnimation = function(from, to, during, animateFn, mathFn) {
        if (arguments.length < 4) return console.error('至少需要4个参数');
        if (typeof from !== 'number') return console.error('请传入有效的参数 #1');
        if (typeof to !== 'number') return console.error('请传入有效的参数 #2');
        if (typeof during !== 'number' || during <= 0) return console.error('请传入有效的参数 #3');
        if (typeof animateFn !== 'function') return console.error('请传入有效的参数 #4');
        if (typeof mathFn !== 'function') return console.error('请传入有效的参数 #5');
        if (!window.Tween) return console.error('缺少Teeen对象');

        if (!window.requestAnimationFrame) {
            requestAnimationFrame = function(fn) {
                setTimeout(fn, 1000 / 60);
            };
        }

        mathFn = mathFn || Tween.Linear;

        var start = Date.now();

        var _step = function() {
            var cur = (Date.now() - start) / 1000;
            var value = mathFn(cur, from, to - from, during); // Tween中需求的第三个参数是变化的量，而非终点值
            if (cur <= during) {
                animateFn(value)
                requestAnimationFrame(_step);
            } else {
                animateFn(to, true);
            }
        }
        _step();
    }
})()
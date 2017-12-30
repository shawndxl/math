// var a = (x, y, n)=> {
// 	if (n == 1) { // 2
// 		return x + y;
// 	}

// 	if (n == 2) { // 3
// 		return a(x, y, n - 2) + a(x, y, n - 1)
// 	}

// 	if (n == 3) { // 5

// 		return a(x, y, n - 2) + a(x, y, n - 1)
// 	}

// }


var a = (x, y, n) => {
    if (n <= 0) return 1;
    if (n == 1) {
        return x+ y;
    }
    return a(x, y, n - 2) + a(x, y, n - 1);
    //if (n == 3) return a(x,y,n - 2) + a(x,y, n - 1)
}

var a = (n) => {
    if (n <= 0) return 1;
    return a(n - 2) + a(n - 1);
}

var x = 1;
var y = 1;

var c = (n, x, y) => {
    if (n <= 1) return y;
    var temp = y;
    console.log(temp, y, x)
    y = x + y;
    x = temp;
    console.log(temp, y, x)
    return c(n - 1, y, x + y);
}


var a = (n, x, y) => {
    if (!x) x = 1;
    if (!y) y = 1;
    if (n <= 1) return y; // 1
    return a(n - 1, y, x + y); // 2
}

var a = (n, x = 1, y = 1) => {
    if (n <= 1) return y; // 1
    return a(n - 1, y, x + y);
}

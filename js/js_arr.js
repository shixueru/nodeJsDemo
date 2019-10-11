'use strict';
// 如何消除一个数组里面重复的元素？
var arr1 = [1, 2, 3, 3, 4, 4, 5];
var arr2 = [];
for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);

// 去除数组的重复成员,使用es6的set数据结构
let set = new Set(arr1);
let arr3 = Array.from(set);
console.log(arr3);


// 在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
// 伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象
function log(){
    var args = Array.prototype.slice.call(arguments);  
    //为了使用unshift数组方法，将argument转化为真正的数组
    args.unshift('(app)');
    console.log.apply(console, args);
};
log();


// 























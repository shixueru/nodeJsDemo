// 构造函数
// function MathHandle(x, y) {
//     this.x = x;
//     this.y = y;
// }
// MathHandle.prototype.add = function () {
//     return this.x + this.y;
// }
// var m = new MathHandle(1, 2);
// console.log('构造函数', m.add());


// class
// 语法上更加贴合面向对象的写法
// 实现继承更加易读、易理解
// 本质是语法糖，使用prototype
class MathHandle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
}
var m = new MathHandle(1, 2);
console.log(m.add());
console.log(typeof MathHandle); // function
console.log(MathHandle.prototype.constructor === MathHandle); // true
console.log(m.__proto__ === MathHandle.prototype); // true


// 继承
// es6语法
// function Animal(){
//     this.eat = function(){
//         alert('animal eat');
//     }
// }
// function Dog() {
//     this.bark = function () {
//         alert('dog bark');
//     }
// }
// Dog.prototype = new Animal();
// var hashiqi = new Dog();
// hashiqi.bark();
// hashiqi.eat();
// class语法
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    say() {
        console.log(`${this.name} say`);
    }
}
const dog = new Dog('哈士奇');
dog.say();
dog.eat();


// promise
// new promiss实例要return;
// new promiss时要传入函数，函数有resolve, reject两个参数；

// function loadImg(src, callback, fail) {
//     var img = document.createElement('img');
//     img.onload = function () {
//         callback(img);
//     }
//     img.onerror = function () {
//         fail();
//     }
//     img.src = src;
// }
var src = 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1577759731,3108671782&os=2168136789,2055456153&simid=3371538566,286331251&pn=1&rn=1&di=231000&ln=1701&fr=&fmq=1545978697503_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fpic1.nipic.com%2F2008-12-30%2F200812308231244_2.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined';
// loadImg(src, function (img) {
//     console.log(img.width);
// }, function () {
//     console.log('failed');
// })

function loadImg(src) {
    const promiss = new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function () {
            resolve(img);
        }
        img.onerror = function () {
            reject();
        }
        img.src = src;
    })
    return promiss;
}
var result = loadImg(src);
result.then(function (img) {
    console.log(img.width, img.height);
}, function () {
    console.log('failed');
})




// 内置函数： object\array\boolean\string
// 内置对象： math\json


// call apply bind
// function fn1(name, age) {
//     alert(name);
//     console.log(this); //{x: 100}
// }
// fn1.call({x: 100}, 'zhangsan', 20); // 常用call来改变this的值
// // fn1.apply({x: 100}, ['zhangsan', 20]);

// var fn2 = function (name, age) {
//     alert(name);
//     console.log(this); // {y: 200}
// }.bind({y: 200});
// fn2('lisi', 10);


// js没有块级作用域，函数和全局作用域
// 作用域链——从本级作用域开始，找父级直至最后的window的this对象
// var a = 100;
// function fn1() {
//     var b = 200;
//     function fn2() {
//         var c = 300;
//         console.log(a); // 100 
//         console.log(b); // 200
//         console.log(c); // 300
//     }
//     fn2();
// }
// fn1();


// 闭包
// 1.函数作为返回值
// function Fn1() {
//     var a = 100;
//     return function () {
//         console.log(a); //自由变量，父作用域寻找
//     }
// }
// var fn1 = Fn1();
// var a = 200;
// fn1(); // 100
// // 2.函数作为参数传递
// function Fn1() {
//     var a = 100;
//     return function () {
//         console.log(a);
//     }
// }
// function Fn2(fn) {
//     var a = 200;
//     fn();
// }
// Fn2(Fn1());
// 闭包世纪应用中主要用于封装变量，收敛权限
// function isFirtLoad(){
//     var list = [];
//     return function (id) {
//         if (list.indexOf(id) >= 0) {
//             return false;
//         } else {
//             list.push(id);
//             return true;
//         }
//     }
// }
// var firstLoad = isFirtLoad();
// firstLoad(10); // 
// firstLoad(10);
// firstLoad(20);


// 
// for(var i = 0; i < 10; i++){
//     (function (i){
//         var a = document.createElement('a');
//         a.innerHTML = i + '<br>';
//         a.width = '50px';
//         a.height = '50px';
//         // a.fontSize = '40px';
//         // a.color = 'red';
//         // a.textAlign = 'center';
//         a.addEventListener('click', function (e) {
//             e.preventDefault();
//             alert(i);
//         })
//         document.body.appendChild(a);
//     })(i);
// }


// 异步和单线程
// console.log(100);
// alert(200); // alert会阻塞单线程
// setTimeout(() => {
//     console.log(300);
// }, 0);
// console.log(400);
// // 100
// // 400
// // 300
// // 异步的使用场景
// // 1. 定时任务：setTimeout、setInterval
// // 2. 网络请求：ajax请求、动态<img>加载
// // 3. 事件绑定
// console.log('start');
// var img = document.createElement('img');
// img.onload = function () {
//     console.log('loaded');
//     document.body.appendChild(img);
// }
// img.src = 'https://images2015.cnblogs.com/blog/1203274/201707/1203274-20170724182117684-1662215887.png';
// console.log('end');


// map
// var arr = [1, 2, 3];
// var arr2 = arr.map(function(item, index) {
//     // 将元素重新组装，并返回
//     return '<b>' + item + '</b>';
// })
// console.log(arr2);
// // filter
// var arr3 = arr.filter(function (item, index) {
//     // 通过某一个条件过滤数组
//     if (item >= 2) {
//         return true;
//     }
// })
// console.log(arr3);


// 事件或事件代理
function bingEvent(elem, type, selector, fn){
    if (fn == null) {
        fn = selector;
        selector = null;
    }
    elem.addEventListener(type, function (e) {
        if (selector) {
            var target = e.target;
            // 
            if (target.matches(selector)) {
                fn.call(target, e);
            }
        } else {
            fn(e);
        }
    })
}


// ajax
// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/api', true); // true为异步
// xhr.onreadystatechange = function () {
//     // 这里的函数异步执行
//     // readyState
//     // 0.未初始化还没有调用send（）方法
//     // 1.（载入）已调用send（）方法，正在发送请求
//     // 2.（载入完成）send（）方法执行完成，已经接收到全部的响应内容
//     // 3.（交互）正在解析响应内容
//     // 4.（完成）响应内容解析完成，可以在客户端调用了
//     if (xhr.readyState == 4) {
//         // status
//         // 2xx: 成功处理请求，200；
//         // 3xx: 需要重定向，浏览器直接跳转
//         // 4xx: 客户端请求错误，404；
//         // 5xx: 服务器端错误；
//         if (xhr.status == 200) {
//             alert(xhr.responseText);
//         }
//     }
// }
// xhr.send(null);

// 跨域 
// 浏览器有同源策略，不允许ajax访问其他域接口 （协议、域名、端口）
// 其中有三个标签允许跨域加载资源 （img、link、script）
// jsonp
// <script src="http://coding.m.imooc.com/api.js"></script>
// window.callback = function (data) {
//     console.log(data);
// }
// 服务器端设置http header


// 存储
// cookie 本身用于客户端和服务器端通信


// AMD\CommonJS
// amd 异步加载js
// 使用了npm之后建议使用commonjs


// 加载一个资源的过程
// 1.浏览器根据dns服务器得到域名的ip地址
// 2.向这个ip的机器发送http请求
// 3.服务器收到、处理并返回http请求
// 4.浏览器得到返回内容


// 浏览器渲染页面的过程
// 1.根据html结构生成dom树
// 2.根据css生成cssom
// 3.将dom的cssom整合形成rendertree
// 4.根据rendertree开始渲染和展示
// 5.遇到script时，会执行并阻塞渲染


// 性能优化
// 1.加载资源优化（静态资源压缩合并、缓存，使用cdn，使用ssr）
// 2.渲染优化（css放前面，js放后面，懒加载，减少dom查询，事件节流）
// 2.减少cpu计算和网络请求


// 







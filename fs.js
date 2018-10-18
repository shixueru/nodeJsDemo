'use strict';
var fs = require('fs');
// 异步读文件
// fs.readFile('demo.txt', 'utf-8', function(err, data) {
//     if (err) {
//         // 出错了
//         console.log(err);
//     } else {
//         // 正常读取
//         console.log(data);
//     }
// })
// fs.readFile('scratch_bg.jpg', function(err, data){
//     // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         // console.log(data.length + ' bytes');
//         // Buffer -> String
//         // var text = data.toString('utf-8');
//         // console.log(text);
//         // 注： String -> Buffer
//         // var buf = Buffer.from(text, 'utf-8');
//         // console.log(buf);
//     }
// })

// 同步读文件
// 除了标准的异步读取模式外，fs也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
// 用fs模块同步读取一个文本文件的代码如下：
// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：
// try {
//     var data = fs.readFileSync('demo.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     // 出错了
// }


// 写文件
// var data = 'Hello, sxr';
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });
// var data = 'Hello, Node.js';
// fs.writeFileSync('output.txt', data);

// stat 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('demo.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})
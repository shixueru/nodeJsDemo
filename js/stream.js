'';

var fs = require('fs');

// 打开一个流:
// var rs = fs.createReadStream('demo.json', 'utf-8');

// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });

// var ws1 = fs.createWriteStream('output.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// // ws1.write('END.');
// ws1.end();

// var ws2 = fs.createWriteStream('output.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// // ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

var rsCurr = fs.createReadStream('demo.txt');
var wsCurr = fs.createWriteStream('demo.json');
var obj = null;
rsCurr.on('data', function(chunk){
    console.log(chunk);
    var str = chunk.toString('utf-8');
    console.log(typeof str);
    var a = str.split(' ');
    console.log(a);
    var p = [{
        id: a[0],
        name: a[1]
    }]
    console.log(p);
    obj = JSON.stringify(p);
})
rsCurr.on('end', function(){
    // wsCurr.write(new Buffer('[{id: 123}, {id: 456}]', 'utf-8'));
    wsCurr.write(new Buffer(obj, 'utf-8'));
})


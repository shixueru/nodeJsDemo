// 导入http模块:
var http = require('http');
const hostname = '0.0.0.0';   //IP地址
const port = 8001;   //端口号
// 创建http server，并传入回调函数:
var server = http.createServer(function (req, res) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write('<script>alert("反射型 XSS 攻击")</script>');
    res.end();
});
// 让服务器监听8080端口:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


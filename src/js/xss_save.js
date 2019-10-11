// 导入http模块:
var http = require('http');
const hostname = '0.0.0.0';   //IP地址
const port = 8002;   //端口号
let userInput = '';
function handleReequest(req, res) {
    const method = req.method;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    console.log(`method: ${method}-----url: ${req.url}`)
    if (method === 'POST' && req.url === '/save'){
        let body = '';
        req.on('data',chunk => {
            console.log(chunk);
            // let b = new Buffer('{val: 123}');
            let d = JSON.stringify(chunk);
            let e = JSON.parse(d);
            let f = new Buffer(e);
            let g = f.toString();
            console.log(g);
            body += g;
        });
        req.on('end', () => {
            console.log(body);
            if (body) {
                userInput = body;
            }
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(userInput);  //将输入的脚本内容返回给前端页面
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.write(userInput);  //将输入的脚本内容返回给前端页面
        res.end();
    }
}
const server = new http.Server();
server.listen(port, hostname);
server.on('request', handleReequest);
console.log(`Server running at http://${hostname}:${port}/`);
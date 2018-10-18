
# 1、module.exports

* 方法一：对module.exports 赋值
、、、
    function hello() {
        console.log('Hello, world!');
    }

    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = {
        hello: hello,
        greet: greet
    };
、、、

* 方法二：直接使用exports
、、、
    function hello() {
        console.log('Hello, world!');
    }

    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    function hello() {
        console.log('Hello, world!');
    }

    exports.hello = hello;
    exports.greet = greet;
、、、


# 2、global

在前面的JavaScript课程中，我们已经知道，JavaScript有且仅有一个全局对象，在浏览器中，叫window对象。
而在Node.js环境中，也有唯一的全局对象，但不叫window，而叫global，这个对象的属性和方法也和浏览器环境的window不同
、、、
    > global.console
    Console {
    log: [Function: bound ],
    info: [Function: bound ],
    warn: [Function: bound ],
    error: [Function: bound ],
    dir: [Function: bound ],
    time: [Function: bound ],
    timeEnd: [Function: bound ],
    trace: [Function: bound trace],
    assert: [Function: bound ],
    Console: [Function: Console] }
、、、

# 3、process

process也是Node.js提供的一个对象，它代表当前Node.js进程。通过process对象可以拿到许多有用信息：
、、、
    > process === global.process;
    true
    > process.version;
    'v5.2.0'
    > process.platform;
    'darwin'
    > process.arch;
    'x64'
    > process.cwd(); 返回当前工作目录
    '/Users/michael'
    > process.chdir('/private/tmp');  切换当前工作目录
    undefined
    > process.cwd();
    '/private/tmp'
、、、

### process.nextTick()
如果我们想要在下一次事件响应中执行代码，可以调用process.nextTick()：
process.nextTick()将在下一轮事件循环中调用:
、、、
    process.nextTick(function () {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');
    nextTick was set!
    nextTick callback!
这说明传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环。
、、、
Node.js进程本身的事件就由process对象来处理。如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数：

# 4、process.on('exit', fn）

程序即将退出时的回调函数:
、、、
    process.on('exit', function (code) {
        console.log('about to exit with code: ' + code);
    });
、、、

# 5、判断JavaScript执行环境

 有很多JavaScript代码既能在浏览器中执行，也能在Node环境执行，但有些时候，程序本身需要判断自己到底是在什么环境下执行的，常用的方式就是根据浏览器和Node环境提供的全局变量名称来判断：
、、、
    if (typeof(window) === 'undefined') {
        console.log('node.js');
    } else {
        console.log('browser');
    }
、、、

# 6、fs 读文件 写文件

# 7、异步还是同步
在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。

# 8、stream
标准输出流（stdout）。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。

### pipe
让我们用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序：
、、、
    'use strict';

    var fs = require('fs');

    var rs = fs.createReadStream('sample.txt');
    var ws = fs.createWriteStream('copied.txt');

    rs.pipe(ws);
、、、

# 9、HTTP
### HTTP服务器
要开发HTTP服务器程序，从头处理TCP连接，解析HTTP是不现实的。这些工作实际上已经由Node.js自带的http模块完成了。应用程序并不直接和HTTP协议打交道，而是操作http模块提供的request和response对象。
request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。
### 文件服务器

# 10、crypto
crypto模块的目的是为了提供通用的加密和哈希算法。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。
### MD5和SHA1
MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示：

### Hmac
Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥：

### AES
AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：

### Diffie-Hellman
DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。

### RSA
RSA算法是一种非对称加密算法，即由一个私钥和一个公钥构成的密钥对，通过私钥加密，公钥解密，或者通过公钥加密，私钥解密。其中，公钥可以公开，私钥必须保密。

### 证书
crypto模块也可以处理数字证书。数字证书通常用在SSL连接，也就是Web的https连接。一般情况下，https连接只需要处理服务器端的单向认证，如无特殊需求（例如自己作为Root给客户发认证证书），建议用反向代理服务器如Nginx等Web服务器去处理证书。

# koa

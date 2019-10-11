// 获取本地网络信息 及返回本地域名
const os = require('os');
let host = '';
const getNetworkIp = function() {
    if (host) return host;
    let newHost = 'localhost';
    try {
        let network = os.networkInterfaces();
        // console.log(network);
        for (let i in network) {
            let iface = network[i];
            for (let j = 0; j < iface.length; j++) {
                let alias = iface[j];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    newHost = alias.address;
                }
            }
        }
    } catch(e) {
        newHost = 'localhost';
    }
    host = newHost;
    return newHost;
}
// getNetworkIp();
console.log(getNetworkIp());
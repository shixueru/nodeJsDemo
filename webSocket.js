const webSocket = require('ws');
// const webSocketServer = webSocket.Server;
// const wss = new webSocketServer({
//     port: 3000
// })
let ws = new webSocket('ws://localhost:3000/test');
// ws.on('open', function() {
//     console.log(`server open()`);
//     ws.send('hello', (err) => {
//         if (err) {
//             console.log(`server error: ${err}`);
//         }
//     });
// })
// ws.on('message', function(message) {
//     console.log(`client received: ${message}`);
// })
ws.on('connection', function(ws) {
    console.log(`[server] connection`);
    ws.on('message', function(message) {
        console.log(`server received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`server error: ${err}`);
            }
        })
    })
})
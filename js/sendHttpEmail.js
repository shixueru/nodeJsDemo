// const http = require('http'); 
const request = require('request');
const fs = require('fs');
// const qs = require('querystring');
var StylinerPkg= require('styliner');  
const SendMail=require('./sendEmail.js');
var ejsExcel = require("ejsExcel");
var fWrite = fs.createWriteStream("./file/result.csv");  
var  ErrorWrite= fs.createWriteStream("./file/error.csv"); 
var  FailWrite= fs.createWriteStream("./file/fail.csv");  
var i=-1;
var stringData;
 //写入文件
function WriteFileSuccess(WriteData){
     fWrite.write(WriteData);
}
function WriteFileFail(WriteData){
     FailWrite.write(WriteData);
}
function WriteFileError(WriteData){
     ErrorWrite.write(WriteData);
}
//获取积分
function _POST()
{
    // i++;
    // if(i===1){
    //     SendMail('result.csv','fail.csv');
    //     return false;
    // }
    console.log(i);
    const url = 'http://www.baidu.com'
    request({
        host: '0.0.0.0',
        url,
        method: 'POST',
        json: true,
        headers: {
            'Content-type': 'application/json',
        },
        body: {
        }
    }, function(error, response, body) {
        // console.log(error, body);
        if (!error && response.statusCode == 200) {
            // console.log(body);
            WriteFileSuccess(JSON.stringify(body));
            var exlBuf = fs.readFileSync("./template1.xlsx");
            let currHtml = "use strict";
            for (let i of body.result.adList) {
                console.log(i);
                currHtml += ('<tr><td>' + i.title + '</td><td>' + i.createDate + '</td></tr>');
            }
            //用数据源(对象)data渲染Excel模板
            ejsExcel.renderExcelCb(exlBuf, data, function(exlBuf2){
                fs.writeFileSync("./report1.xlsx", exlBuf2);
                console.log("生成report1.xlsx");
            });
            const templateHtml =  '<table><tr><th>名称</th><th>开始时间</th></tr>' + currHtml + '</table>';
            console.log(templateHtml);
            var styliner = new StylinerPkg(__dirname);
            // const templateHtml = fs.readFileSync('./index.html', 'utf-8');
            styliner.processHTML(templateHtml).then(function(processedSource) {
                // Send email with processedSource as email body
                SendMail('神测数据', processedSource);
            });
            
            // SendMail('神测数据', processHTML);
            return;
        }
        WriteFileSuccess(JSON.stringify(body));
    });
    
}
// // 异步读取
fs.readFile('./file/test.csv', function (err, data) {
   if (err) {
       return console.error(err);
   }
    _POST();
});

'';
var nodemailer = require('nodemailer');
const fs = require('fs');
function SendMail(title='Hello sir', template='<b>Hello world ?</b>', attach1='result.csv', attach2='error.csv') {
    var transporter = nodemailer.createTransport({
        //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
        service: 'qq',
        port: 123, // SMTP 端口
        secureConnection: true, // 使用 SSL
        auth: {
            user: '123456789@qq.com',
            //这里密码不是qq密码，是你设置的smtp密码
            pass: '123456'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '2829296321@qq.com', // 发件地址
        to: '2791457713@qq.com', // 收件列表
        subject: title, // 标题
        //text和html两者只支持一种
        // text: 'Hello world ?', // 标题
        html: template, // html 内容
        attachments: [
            {   // utf-8 string as an attachment
                filename: attach1,
                content: fs.createReadStream('./file/' + attach1)
            },
             {   // utf-8 string as an attachment
                filename: attach2,
                content: fs.createReadStream('./file/' + attach2)
            }
        ]
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
}
module.exports = SendMail;
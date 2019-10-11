// 写一个function，清除字符串前后的空格。（兼容所有浏览器）
function trim(str) {
    if (str && typeof str === "string") {
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
    }
}
// 使用正则表达式验证邮箱格式
var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
var email = "example@qq.com";
console.log(reg.test(email));  // true  






















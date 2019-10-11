/**
 * 深拷贝
 * @param {*} obj 数组/对象
 */
var deepclone = function (obj) {
    // 判断是否是数组或对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        // 排除原型链上的属性
        if (obj.hasOwnProperty(key)) {
            // 如果obj[key]的值是数组或对象时继续递归
            newObj[key] = typeof obj[key] === 'object' ? deepclone(obj[key]) : obj[key];
        }
    }
    return newObj;
}
console.log(typeof {id: 1, name: 'sxde'});
console.log({id: 1, name: 'sxde'} instanceof Array);
console.log(typeof [{id: 1}, {name: 'scd'}]);
console.log([{id: 1}, {name: 'scd'}] instanceof Array);

/**
 * 数组扁平化
 */
const flatten = (arr) => {
    let result = [];
    arr.forEach((item, i, arr) => {
        if (Array.isArray(item)){
            result = result.concat(flatten(item));
        } else {
            result.push(arr[i]);
        }
    })
    return result;
}
const arr = [1, [2, [3, [4]], [[6], 5]]];
console.log(flatten(arr));
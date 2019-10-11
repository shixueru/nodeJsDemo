var fs    = require('fs')
var path  = require('path')
var filePath = path.resolve(__dirname, '../');
function getBlogList (blogDir, callback) {
  // 以异步的方式读取文件目录
  fs.readdir(blogDir, 'utf8', function(err, files) {
    if (err) {
      // callback(err);
      return;
    }
    // console.log(files);
    // if (files && files.length) {
      files.forEach(function(file, index) {
        // console.log(file);
        if (file === 'replaceFileContent.js' || file === 'node_modules' || file === 'image') {
          return;
        }
        let itemPath = path.join(blogDir, file);
        // console.log(itemPath);
        fs.stat(itemPath, function(err1, stats) {
          if (err1) {
            console.log(err1);
            return;
          }
          if (stats.isDirectory()) {
            getBlogList(itemPath);
          } 
          if (stats.isFile()) {
            handleFile(file);
          }
        })
      })
    // }
    // callback(null, blogList);
  })
}
function handleFile(file) {
  fs.readFile(file, 'utf8', function(err, data) {
    // console.log(data)
    if (err) {
      return
    }

    var idx = data.indexOf("'';")
    console.log(idx);
    if (idx > 0) {
      console.log(file);
      data = data.replace(/'';/g, 'use strict;')

      //不出错将替换后的文本写入文件
      fs.writeFile(file, data, 'utf8', function(err){
        if (err) return console.log(err);
      })
      console.log(data)
    }

  })
}
getBlogList(filePath);

//1,引入模块
var fs = require("fs");
//2,删除文件
fs.unlink('input.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});
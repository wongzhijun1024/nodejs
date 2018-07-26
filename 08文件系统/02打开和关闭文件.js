//1,引入fs
var fs = require("fs");

// 2，异步打开文件
console.log("准备打开文件！");
fs.open('input2.txt', 'a', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");

    // 关闭文件
    fs.close(fd, function(err){
        if (err){
            console.log(err);
        }
        console.log("文件关闭成功");
    });
});
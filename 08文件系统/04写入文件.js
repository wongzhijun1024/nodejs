//1引入fs
var fs = require("fs");

var filePath ="input.txt";

var infor='我是通过写入的文件内容！';
//2,写入文件
fs.writeFile(filePath, infor,  function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("读取写入的数据！");
    fs.readFile(filePath, function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});
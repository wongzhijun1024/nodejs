/**
 * Created by Administrator on 2017/12/24 0024.
 */
//1,引入fs模块
var fs = require("fs");
var data = '';
// 2，创建可读流
var readerStream = fs.createReadStream('input.txt');

// 3，设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 4，读取数据的回调
readerStream.on('data', function(chunk) {
    data += chunk;
});
//5,读取数据结束后的回调
readerStream.on('end',function(){
    console.log(data);
});
//6,读取数据错误的回调
readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
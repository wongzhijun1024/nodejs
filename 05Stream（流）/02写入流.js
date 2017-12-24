/**
 * Created by Administrator on 2017/12/24 0024.
 */
//1,引入fs模块
var fs = require("fs");
//2,设置数据
var data = 'hello world!呵呵';

// 3，创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 4,使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 5,事件完成的回调
writerStream.on('finish', function() {
    console.log("写入完成。");
});

//6,事件错误的回调
writerStream.on('error', function(err){
    console.log(err.stack);
});

// 7,写文件结束
writerStream.end();

console.log("程序执行完毕");
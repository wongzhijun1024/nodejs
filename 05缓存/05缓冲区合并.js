/**
 * Created by Administrator on 2017/12/21 0021.  Buffer 缓冲区合并
 */
//1,创建缓存装载字符串hello
var buffer1 = new Buffer('hello ');
//2,创建缓存装载字符串world
var buffer2 = new Buffer('world!');
//3,合并两个缓存
var buffer3 = Buffer.concat([buffer1,buffer2]);
//4,输出缓存数据
console.log("buffer3 内容: " + buffer3.toString());

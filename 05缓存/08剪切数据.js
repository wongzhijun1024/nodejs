/**
 * Created by Administrator on 2017/12/21 0021.  剪切缓冲区
 */
// 1,创建缓存
var buffer1 = new Buffer('hello world');
// 2，剪切缓冲区
var buffer2 = buffer1.slice(0,2);
//3,输出数据
console.log("buffer2 content: " + buffer2.toString());

/**
 * Created by Administrator on 2017/12/21 0021.  拷贝缓冲区
 */
// 1,创建缓存
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
// 2,拷贝一个缓冲区
buffer1.copy(buffer2);
//3,输出数据
console.log("buffer2 content: " + buffer2.toString());

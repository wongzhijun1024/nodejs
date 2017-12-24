/**
 * Created by Administrator on 2017/12/21 0021.  读取数据
 */
//1,按照字节创建缓存
var buf = new Buffer(256);
//2,向缓存写入数据
len = buf.write("hello world！");
//3,输出数据
console.log( buf.toString('ascii'));       // 输出:
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
/**
 * Created by Administrator on 2017/12/21 0021.  写入缓冲区
 */
//1,按照字节创建缓存
var buf = new Buffer(256);
//2,向缓存写入数据
len = buf.write("hel我lo world");
//3,输出字节长度
console.log("写入字节数 : "+  len);
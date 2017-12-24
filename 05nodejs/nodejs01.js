/**
 * Created by Administrator on 2017/12/21 0021.  创建 缓冲区
 */
//1 ,字节创建
var buf = new Buffer(10);
//2,数组创建
var buf = new Buffer([10, 20, 30, 40, 50]);
//3,字符串创建
var buf = new Buffer("www.runoob.com", "utf-8");

console.log("准备写入文件");

/**
 * Created by Administrator on 2017/12/21 0021.  Buffer 转换为 JSON 对象
 */
//1,按照字符串创建缓存
var buf = new Buffer('hello world!');
//2,把缓存转为json
var json = buf.toJSON(buf);
//3,输出json
console.log(json);

/**
 * Created by Administrator on 2017/12/21 0021.  Buffer 转换为 JSON 对象
 */
//1,按照字符串创建缓存
var buf1 = new Buffer('hello');

var buf2= new Buffer('hello');

var result = buf1.compare(buf2);

if(result==0){
    console.log('相等');
}
else{
    console.log('不相等');
}
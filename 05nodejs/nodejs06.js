/**
 * Created by Administrator on 2017/12/21 0021.  Buffer 缓冲区比较
 */
//1,创建缓存
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
//2,比较两个缓存
var result = buffer1.compare(buffer2);

if(result == 0){
    console.log( "相同");
}else {
    console.log("不相同");
}

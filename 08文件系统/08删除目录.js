var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录


var path =__dirname;

console.log("准备删除目录 "+path+"/seraph/test");

fs.rmdir(__dirname+"/seraph/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir(__dirname+"/seraph/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});
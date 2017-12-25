//1，引入模块
var fs = require('fs');
fs.readdir('seraph',function (err,files) {
    if(!err){
        files.forEach(function (file) {

            console.log(file)
        });
    }
});
/**
 * Created by Administrator on 2017/12/24 0024.
 */
//1,引入fs模块
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input22.txt'));

console.log("文件解压完成。");

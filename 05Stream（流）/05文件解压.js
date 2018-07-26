/**
 * Created by Administrator on 2017/12/24 0024.
 */
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input22222.txt'));

console.log("文件解压完成。");
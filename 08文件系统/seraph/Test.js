var fs  = require('fs');


fs.unlink('input2.txt',function (err) {
    if(err)
        return console.log(err);

    console.log("删除成功！")
});

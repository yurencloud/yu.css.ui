var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹
var filePath = path.resolve('../dist/component/');

// node createCssToJsMap.js >> cssMap.js
// 检查-和\符号，检查switch

fs.readdir(filePath, function (err, files) {
    if (err) {
        console.warn(err)
    } else {
        files.forEach(function (filename) {
            var fileDir = path.join(filePath, filename);
            fs.stat(fileDir, function (error, stats) {
                if (error) {
                    console.warn('获取文件stats失败');
                } else {
                    console.log('export const '+filename.split('.')[0].replace('-','')+' = `' +fs.readFileSync(fileDir, 'utf-8') + '`;')
                }
            })
        });
    }
});


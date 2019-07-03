var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹
var filePath = path.resolve('../dist/component/');

fs.readdir(filePath, function (err, files) {
    if (err) {
        console.warn(err)
    } else {
        for (var i = 0; i < files.length; i++) {

        }
        files.forEach(function (filename) {
            var fileDir = path.join(filePath, filename);
            fs.stat(fileDir, function (error, stats) {
                if (error) {
                    console.warn('获取文件stats失败');
                } else {
                    var name = filename.split('.')[0].replace(/-/g, '')
                    var content = fs.readFileSync(fileDir, 'utf-8')

                    if (name === 'switch') {
                        name = 'switchs'
                    }
                    if (name === 'alert') {
                        name = 'alerts'
                    }
                    if (name === 'checkbox' || name === 'transfer' || name === 'tree') {
                        content = content.replace(/\\/g, '\\\\')
                    }
                    if (name === 'iconfont') {
                    } else {
                        console.log('export const ' + name + ' = `' + content + '`;')
                    }
                }
            })
        });
    }
})



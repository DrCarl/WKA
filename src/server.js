// express
var express = require('express')
// 路径模块
var path = require('path');
// 文件模块
var fs=require('fs');

// 首页模版
var devicesHtmlStr = fs.readFileSync(path.resolve(__dirname, 'index.html'), {encoding: 'utf8'});

// 创建server
var APP = express()
.use('/res', express.static(path.resolve(__dirname, './res')))
.use('/lib', express.static(path.resolve(__dirname, './lib')))
.use('/js', express.static(path.resolve(__dirname, './js')))

.get('/', function (req, res) {

    // 打开设备目录
    res.send(devicesHtmlStr);

}).listen(9000, function () {

    console.log('listening on port 9000!');

})
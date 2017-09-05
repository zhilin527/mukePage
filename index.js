/**
 * Created by zzmx on 2017年7月19日.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require("path");
var port = process.env.PORT || 4000;


// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });
server.listen(port);
console.log("app listening on " +port);
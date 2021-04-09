var express = require('express');
 require('dotenv').config()
 var app = express();
 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 app.get('/test', function (req, res) {
    res.send(`${process.env.DB_USER} : ${req.body.u}`);
 })
 var port = process.env.PORT || 8081;
 var server = app.listen(port, function () {
    var host = server.address().address
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
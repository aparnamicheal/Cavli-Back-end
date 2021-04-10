
var express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config()

const S3Service = require('./S3/S3Service');
const FileService = require('./S3/FileService');

class App{
    constructor(){
        this.express=express();
        this.setMiddleWares();
        this.setRoutes();
    }
    setMiddleWares(){
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        }
    setRoutes(){
        const s3Service= new S3Service();
        const fileServices= new FileService();
        this.express.get('/test', function (req, res) 
        {
            res.send(`${process.env.DB_USER} : ${req.body.u}`);
         });
        this.express.get('/getSignedUrl',s3Service.getSignedUrl)
        this.express.get('/getfileUrl',fileServices.getfileUrl)
        
        
}
}
module.exports = App
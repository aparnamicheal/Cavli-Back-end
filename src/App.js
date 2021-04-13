
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

const S3Service = require('./S3/S3Service'); 
const FileService = require('./File/FileService');

class App{
    constructor(){
        this.express=express();
        this.setMiddleWares();
        this.setRoutes();
    }
    setMiddleWares(){
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(cors({ origin:"*", }));
        // : /^(https:\/\/.+\.cavli\.id)|^(https:\/\/.+\-+\.cavli\.id)|^(http:\/\/localhost\:[8090|3000|8091])/, allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, csrf-token, Authorization", methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", credentials: true }));
    }
    setRoutes(){
        const s3Service= new S3Service();     // Object Creation
        const fileServices= new FileService();
    
        this.express.get('/test', function (req, res) 
        {
            res.send(`${process.env.DB_USER} : ${req.body.u}`);
         });


        this.express.get('/getSignedUrl',s3Service.getSignedUrl) // set route, objectname.method
        this.express.get('/getfileUrl',fileServices.getfileUrl)
        this.express.get('/savefile',fileServices.saveFile)
        this.express.get('/deletefile',fileServices.deleteFile)
        this.express.get('/getallfiles',fileServices.getAllFiles)
        
    }
}

module.exports = App

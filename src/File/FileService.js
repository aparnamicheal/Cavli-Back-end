const { request } = require('express');
const FileModel = require('./FileModel'); //import


class FileService{
    constructor(){}
    
    getfileUrl(req,res){     //Method(parameters)
    let tym="https://thulasi.psc.kerala.gov.in/thulasi/";
    res.send(tym);    
    }
    
    saveFile(req,res){
        const fileName=req.body.fileName //user input
        const url=req.body.url           // user input
        const new_file={fileName,url}
        const file= FileModel.create(new_file)
        res.send(file)
    }
   // deleteFile(req,res){
   //    const _id=req.query._id
     //  const file=FileModel.remove({_id})
       //res.send(file)
       deleteFile(req,res){
         FileModel.remove({},function(err,result){
           
             if(err){
                  console.log(err);}
                  else{
                       res.json(result)
                      
                  }
             
         }  );
       }
        

    getAllFiles(req,res){
        const query = req.params.query;
       
        FileModel.find({
            'request': query
            
        }, 
        function(err, result) {
            if (err) throw err;
            if (result) {
                res.json(result)
            } else {
                res.send(JSON.stringify({
                    error : 'Error'
                }))
            }
        })
    }
}
module.exports = FileService 
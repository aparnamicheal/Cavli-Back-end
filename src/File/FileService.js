const FileModel = require('./FileModel'); 
class FileService{
    constructor(){}
    
    getfileUrl(req,res){     //Method(parameters)
    let tym="https://thulasi.psc.kerala.gov.in/thulasi/";
    res.send(tym);    
    }
    
    saveFile(req,res){
        const new_file={fileName:'cavli',url:'s3//abc'}
        const file= FileModel.create(new_file)
        res.send(file)
    }
    }


    module.exports = FileService 
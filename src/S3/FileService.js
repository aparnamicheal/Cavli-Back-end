class FileService{
    constructor(){}
    
    getfileUrl(req,res){     
    let url="https://thulasi.psc.kerala.gov.in/thulasi/";
    res.send(url);    
    }
    }
    module.exports = FileService 
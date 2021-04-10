class S3Service{
    constructor(){}
    getSignedUrl(req,res){     
    let url="s3.com/signedurl";
    res.send(url);    //
    }
    }
    module.exports = S3Service  
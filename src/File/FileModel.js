var mongoose = require('mongoose')

const fileSchema=mongoose.Schema({ 
    fileName:{type:String},
    url:{type:String},
    createdAt:{type:Date,default:Date.now}
},{
    collection:'file1'
})
const FileModel=mongoose.model('file1',fileSchema)

module.exports = FileModel 
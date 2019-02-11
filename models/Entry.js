var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    bugTitle:{
        type:String,
        required:true
    },
    projectName:{
        type:String,
        required:true
    },
    reporterName:{
        type:String,
        required:true
    },
    bugType:{
        type:String,
        required:true
    },
    bugState:{
        type:String,
        required:true
    },
    bugDescription:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }




});

mongoose.model('Entries', EntrySchema);
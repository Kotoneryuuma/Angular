////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/haiku');
    var TaskSchema = new mongoose.Schema({
        title: String,
        description: {type: String , default : ""},
        completed: { type: Boolean , default : false}
        
    },{
        timestamps : true
    })
    mongoose.model('Task', TaskSchema); 
    var Task = mongoose.model('Task');

    
    module.exports = Task;